/** @jsxImportSource @emotion/react */
import * as services from '../../lib/services'
import styles from '../../styles/anime-detail.style'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Button, Modal } from '../../components/index'
import Helper from '../../lib/helper'
import Link from 'next/link'

export default function Collection({ data }) {
  if (!data) {
    return null
  }

  const [showAll, setShowAll] = useState("")
  const [isDescShown, setDescShown] = useState(false)
  const [includedCollection, setIncludedCollection] = useState([])
  const [excludedCollection, setExcludedCollection] = useState([])
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)

  const {
    id,
    title,
    description,
    genres,
    coverImage,
    episodes,
    averageScore,
    startDate
  } = data

  const fetchCollectionsData = () => {
    const collections = services.Collection.getAll()
    const includedCollection = collections.filter(c => {
      if (!Array.isArray(c.animes)) return false
      c.animeIds = c.animes.map(a => a.id)
      return c.animeIds.includes(id)
    })
    const excludedCollection = collections.filter(c => {
      if (!Array.isArray(c.animes)) return false
      c.animeIds = c.animes.map(a => a.id)
      return !c.animeIds.includes(id)
    })

    setExcludedCollection(excludedCollection)
    setIncludedCollection(includedCollection)
  }

  const toggleModal = () => {
    setModalOpen(prev => !prev)
    setIsTouched(false)
  }

  const handleInputChange = (val) => {
    setSelectedValue(val)
    if(errorMsg) setErrorMsg('')
  }

  const handleInputBlur = () => {
    setIsTouched(true)
  }

  const handleAddAnimeToCollection = (e) => {
    e.preventDefault()
    let collectionName
    if (!checkError()) {
      if (typeof selectedValue === 'string') {
        const result = services.Collection.addOne(selectedValue)
        if (!result || result?.error) {
          if (result?.error) setErrorMsg("Collection name has already been taken")
          return false
        }
        collectionName = result.name
      } else {
        collectionName = selectedValue.label
      }
      const res = services.Collection.addOneAnime(collectionName, data)
      if(res){
        console.log("success")
        setSelectedValue("")
        setModalOpen(false)
        setIsTouched(false)
        fetchCollectionsData()
        return true
      }
      return false
    }
    return false
  }

  const renderCollection = includedCollection.length > 0 ? (
    <div css={styles.detail.collectionContainer}>
      {includedCollection.map((c, i) => (
        <Link key={i} href={`/collection/${Helper.toSlug(c.name)}`} passHref>
          <a css={styles.detail.collection}>{`${i+1}. ${c.name}`}</a>
        </Link>
      ))}
    </div>
  ) : (
    <div>There is no collection yet!</div>
  )

  const formatDesc = () => {
    const el = document.getElementById("description")
    let showAll = ''
    if (el) {
      let scrollHeight = el.scrollHeight
      let clientHeight = el.clientHeight
      clientHeight = scrollHeight === clientHeight ? 105 : clientHeight
      if (scrollHeight > clientHeight) {
        showAll = (
          <div css={styles.detail.isDescShown}>
            <div style={{ ...isDescShown && { display: 'none' } }} onClick={() => setDescShown(true)}>
              <p>Show more</p>
              <span><i className='uil uil-angle-down'></i></span>
            </div>
            <div style={{ ... !isDescShown && { display: 'none' } }} onClick={() => setDescShown(false)}>
              <p>Show less</p>
              <span><i className='uil uil-angle-up'></i></span>
            </div>
          </div>
        )
      }
      setShowAll(showAll)
    }
  }

  const checkError = () => {
    if (!selectedValue) {
      return true
    }
    if (typeof selectedValue === "string") {
      if (!Helper.checkSpecialCharacter(selectedValue)) return true
    }
    return false
  }

  useEffect(formatDesc, [isDescShown])
  useEffect(fetchCollectionsData, [])

  return (
    <>
      <Head>
        <title>Anime - {title.english || title.native}</title>
      </Head>
      <div css={styles.container}>
        <div>
          <div css={styles.cover.container}>
            <img css={styles.cover.image} src={coverImage.large} />
          </div>
          <div css={styles.cover.title}>{title.english || title.native}</div>
        </div>
        <div css={styles.detail.container}>
          <div css={styles.detail.section}>
            <div css={styles.detail.title}>Description</div>
            <p id="description" style={{ ...isDescShown && { maxHeight: 'max-content' } }} css={styles.detail.content} dangerouslySetInnerHTML={{ __html: description || '-' }} />
            {showAll}
          </div>
          <div css={styles.detail.layout}>
            <div css={styles.detail.section}>
              <div css={styles.detail.title}>Genres</div>
              <p css={styles.detail.content}>{genres?.join(', ') || '-'}</p>
            </div>
            <div css={styles.detail.section}>
              <div css={styles.detail.title}>Number of Episodes</div>
              <p css={styles.detail.content}>{episodes || '-'}</p>
            </div>
            <div css={styles.detail.section}>
              <div css={styles.detail.title}>Average Score</div>
              <p css={styles.detail.content}>{`${averageScore} / 100` || '-'}</p>
            </div>
            <div css={styles.detail.section}>
              <div css={styles.detail.title}>First Release Date</div>
              <p css={styles.detail.content}>{`${startDate.year} / ${startDate.month?.toString().padStart(2, '0')} / ${startDate?.day.toString().padStart(2, '0')}`}</p>
            </div>
          </div>
          <div css={styles.detail.blackBorder} />
          <div css={styles.detail.section}>
            <div css={styles.detail.title}>Featured Collection</div>
            {renderCollection}
            <Button.Main css={{ marginTop: '1rem' }} onClick={toggleModal}>
              <div>Add to collection</div>
            </Button.Main>
          </div>
        </div>
      </div>
      <Modal.AddAnimeToCollection
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        options={excludedCollection}
        selectedValue={selectedValue}
        handleChange={handleInputChange}
        handleBlur={handleInputBlur}
        handleSubmit={handleAddAnimeToCollection}
        isTouched={isTouched}
        checkError={checkError}
        errorMsg= {errorMsg}
      />
    </>
  )
}

export async function getServerSideProps({ params }) {
  const data = await services.Anime.getOne(params.id)
  return {
    props: {
      data
    }
  }
}