/** @jsxImportSource @emotion/react */
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import * as Service from '../../lib/services'
import Helper from '../../lib/helper'
import Head from 'next/head'
import styles from "../../styles/collection-detail.style"
import { Modal, Scroll, Card } from "../../components"

export default function CollectionDetail() {

  const [collectionData, setCollectionData] = useState('')
  const [collectionNameInput, setCollectionNameInput] = useState('')
  const [isTouched, setIsTouched] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [modal, setModal] = useState({
    type: 'delete',
    isOpen: false
  })
  const [selectedAnime, setSelectedAnime] = useState('')
  const router = useRouter()
  const { index, collection } = collectionData

  const fetchCollectionData = () => {
    const nameSlug = router.query.name
    if (nameSlug) {
      const res = Service.Collection.getOne(Helper.normalizeSlug(nameSlug))
      setCollectionData(res)
      setCollectionNameInput(res.collection.name)
    }
  }

  const handleModal = {
    open: (type) => {
      setModal(prev => ({ ...prev, type, isOpen: true }))
    },
    close: () => {
      setModal(prev => ({ ...prev, isOpen: false }))
      if(modal.type === 'update'){
        setIsTouched(false)
        setCollectionNameInput(collection.name)
      }
    }
  }

  const handleDeleteModal = (anime) => {
    handleModal.open('delete')
    setSelectedAnime(anime)
  }
  
  const handleDeleteAnime = () => {
    const res = Service.Collection.deleteOneAnime(index, selectedAnime)
    if(res){
      handleModal.close()
      fetchCollectionData()
    }
  }
  const handleEditModal = () => {
    handleModal.open('update')
  }

  const handleInputChange = (val) => {
    setCollectionNameInput(val)
    if(errorMsg) setErrorMsg('')
  }

  const handleInputBlur = () => {
    setIsTouched(true)
  }

  const handleUpdateSubmit = () => {
    if(!isError()){
      if(collectionNameInput.toLowerCase() !== collection.name.toLowerCase()){
        const res = Service.Collection.updateOne(index, collectionNameInput)
        if(!res || res?.error){
          res?.error && setErrorMsg("Collection name has already been taken")
          return
        }
        router.replace(`/collection/${Helper.toSlug(collectionNameInput)}`)
      }
      handleModal.close()
    }
  }

  const isError = () => {
    return !Helper.checkSpecialCharacter(collectionNameInput)
  }

  const animeList = collection?.animes?.length > 0 ? collection.animes.map((anime) => {
    const { title, id, coverImage } = anime

    return (
      <Card.Secondary
        key={id}
        image={coverImage.large}
        title={title.english || title.native}
        handleDelete={() => handleDeleteModal(anime)}
        link={`/anime/${id}`}
      />
    )
  }) : (
    <div css={styles.noCollection}>
      Currently, there is no anime added yet!
    </div>
  )

  useEffect(fetchCollectionData, [router.isReady, router.query.name])

  return (
    <>
      <Head>
        <title>Anime Collection</title>
      </Head>
      <div css={styles.nameHeader}>
        <h3 css={styles.nameText}>
          {collection?.name}{' '} 
          <i className="uil uil-edit" onClick={handleEditModal}></i>
        </h3>
      </div>
      <p css={styles.listHeader}>Anime List</p>
      <div css={styles.listContainer}>
        {animeList}
      </div>
      <Scroll />
      <Modal.Delete
        title={"Delete Anime From Collection"}
        isOpen={modal.type === "delete" && modal.isOpen}
        handleClose={handleModal.close}
        itemName={selectedAnime.title?.english || selectedAnime.title?.native}
        handleDelete={handleDeleteAnime}
      />
      <Modal.AddOrEdit 
       type={'update'}
       isOpen={modal.type === "update" && modal.isOpen}
       handleClose={handleModal.close}
       value={collectionNameInput}
       isTouched={isTouched}
       handleBlur={handleInputBlur}
       handleChange={handleInputChange}
       handleSubmit={handleUpdateSubmit}
       errorMsg={errorMsg}
       isError={isError()}
       />
    </>
  )
}