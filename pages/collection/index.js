/** @jsxImportSource @emotion/react */
import * as service from '../../lib/services'
import Head from 'next/head'
import styles from '../../styles/collection.style'
import { useState, useEffect } from 'react'
import { Button, Modal, Scroll, Card } from '../../components'
import Helper from '../../lib/helper'

export default function Collection() {

  const [collections, setCollections] = useState([])
  const [selectedCollection, setSelectedCollection] = useState({
    name: '',
    idx: ''
  })
  const [inputValue, setInputValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [modal, setModal] = useState({
    isOpen: false,
    type: 'add'
  })

  const handleModal = {
    open: (type) => {
      setModal(prev => ({ ...prev, isOpen: !prev.isOpen, type }))
    },
    close: () => {
      setModal(prev => ({ ...prev, isOpen: !prev.isOpen }))
      setIsTouched(false)
      setErrorMsg('')
    }
  }

  const handleDeleteCollection = () => {
    const { name } = selectedCollection
    const res = service.Collection.deleteOne(name)
    if (res) {
      fetchCollectionData()
      handleModal.close()
    }
  }

  const handleInputChange = (val) => {
    if (modal.type === 'add') {
      setInputValue(val)
    } else {
      setSelectedCollection(prev => ({
        ...prev,
        name: val
      }))
    }

    if (errorMsg) setErrorMsg('')
  }

  const handleAddCollection = () => {
    if (!validateError(inputValue)) {
      const res = service.Collection.addOne(inputValue)
      if (!res || res?.error) {
        if (res?.error) setErrorMsg('Collection name has already been taken')
        return
      }

      handleModal.close()
      setInputValue('')
      fetchCollectionData()
    }
    return
  }

  const handleEditCollection = () => {
    if (!validateError(selectedCollection.name)) {
      if (selectedCollection.name !== collections[selectedCollection.idx].name) {
        const res = service.Collection.updateOne(selectedCollection.idx, selectedCollection.name)
        if (!res || res?.error) {
          if (res?.error) setErrorMsg("Collection name has already been taken")
          return
        }
        fetchCollectionData()
      }
      handleModal.close()
    }
  }

  const validateError = (val) => {
    return !Helper.checkSpecialCharacter(val)
  }

  const fetchCollectionData = () => {
    const collections = service.Collection.getAll()
    setCollections(collections)
  }

  useEffect(fetchCollectionData, [])

  const collectionList = collections.map((c, i) => {
    const image = c.animes?.length > 0 ? c.animes[0].coverImage.large : '/no-image.jpg'
    return (
      <Card.Secondary
        handleDelete={() => { handleModal.open('delete'); setSelectedCollection({ name: c.name, idx: i }) }} 
        handleEdit={ () => { handleModal.open('update'); setSelectedCollection({ name: c.name, idx: i }) }}
        key={i}
        image={image}
        title={c.name}
        link={`/collection/${Helper.toSlug(c.name)}`}
        />
    )
  })

  return (
    <>
      <Head>
        <title>Collection List</title>
      </Head>
      <div css={styles.header.container}>
        <div css={styles.header.title}>My Anime Collection</div>
        <div css={styles.header.blackBox} />
      </div>
      <div css={styles.btnWrapper}>
        <Button.Main onClick={() => handleModal.open('add')}>
          Add Collection
        </Button.Main>
      </div>
      <div css={styles.container}>
        {collections?.length > 0 ? collectionList :
          <div css={styles.noCollection}>
            <p>There is no collection yet!<br />Start adding one by clicking <b>Add collection</b> button</p>
          </div>
        }
      </div>
      <Modal.Delete
        isOpen={modal.type === 'delete' && modal.isOpen}
        handleClose={handleModal.close}
        title={"Delete Collection"}
        itemName={selectedCollection.name}
        handleDelete={handleDeleteCollection} />
      <Modal.AddOrEdit
        isOpen={(modal.type === 'add' || modal.type === 'update') && modal.isOpen}
        handleChange={handleInputChange}
        value={modal.type === 'add' ? inputValue : selectedCollection.name}
        handleClose={handleModal.close}
        type={modal.type}
        isTouched={isTouched}
        handleBlur={() => setIsTouched(true)}
        isError={modal.type === 'add' ? validateError(inputValue) : validateError(selectedCollection.name)}
        errorMsg={errorMsg}
        handleSubmit={modal.type === 'add' ? handleAddCollection : handleEditCollection} />
      <Scroll />
    </>
  )
}

