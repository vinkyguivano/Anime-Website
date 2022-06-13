/** @jsxImportSource @emotion/react */
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import * as Service from '../../lib/services'
import Helper from '../../lib/helper'
import Head from 'next/head'
import styles from "../../styles/collection-detail.style"
import Link from "next/link"
import { Modal, Button, Scroll, Card } from "../../components"

export default function CollectionDetail() {

  const [collectionData, setCollectionData] = useState('')
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
    }
  }

  const handleModal = {
    open: (type) => {
      setModal(prev => ({ ...prev, type, isOpen: true }))
    },
    close: () => {
      setModal(prev => ({ ...prev, isOpen: false }))

    }
  }

  const handleDeleteModal = (anime) => {
    handleModal.open('delete')
    setSelectedAnime(anime)
  }

  const handleDeleteAnime = () => {

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

  useEffect(fetchCollectionData, [router.isReady])

  return (
    <>
      <Head>
        <title>Anime Collection</title>
      </Head>
      <div css={styles.nameHeader}>
        <h3 css={styles.nameText}>{collection?.name}</h3>
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
      />
    </>
  )
}