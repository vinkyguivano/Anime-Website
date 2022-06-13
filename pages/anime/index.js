/** @jsxImportSource @emotion/react */
import * as service from '../../lib/services'
import styles from '../../styles/anime.style'
import Link from 'next/link'
import Head from 'next/head'
import { Scroll, Card } from '../../components'

export default function AnimeList({ data }) {
  if (!data) {
    return null
  }

  const { media: animes, pageInfo } = data

  const { currentPage, lastPage, hasNextPage } = pageInfo

  const pagination = () => {
    const multiplier = Math.ceil(currentPage / 5)
    let start = (5 * multiplier) - 4
    const paginateNumber = []

    for (let i = 0; i < 5; i++) {
      paginateNumber.push(start)
      start++
      if (start > lastPage) {
        break
      }
    }

    return (
      <div css={styles.paginate.container}>
        <span css={styles.paginate.arrow} style={{ ...paginateNumber.includes(1) && { display: 'none' } }}>
          <Link href={`/anime?page=${currentPage - 1}`}>
            <a><i className='uil uil-angle-left'></i></a>
          </Link>
        </span>
        <div css={styles.paginate.content}>
          {
            paginateNumber.map((n, i) => (
              <div key={i}>
                <Link href={`/anime?page=${n}`} passHref>
                  <a css={[styles.paginate.number, n == currentPage && styles.paginate.activeNumber]}>{n}</a>
                </Link>
              </div>
            ))
          }
        </div>
        <span css={styles.paginate.arrow} style={{ ...!hasNextPage && { display: 'none' } }}>
          <Link href={`/anime?page=${currentPage + 1}`}>
            <a><i className='uil uil-angle-right'></i></a>
          </Link>
        </span>
      </div>
    )
  }

  const animeList = animes.map((anime, i) => {
    return <Card.Home anime={anime} key={i}/>
  })

  return (
    <>
      <Head>
        <title>Anime List</title>
      </Head>
      <div css={styles.header.container}>
        <div css={styles.header.title}>Welcome to the World of Anime</div>
        <div css={styles.header.blackBox} />
      </div>
      <div css={styles.container}>
        {animeList}
      </div>
      {pagination()}
      <Scroll />
    </>
  )
}

export async function getServerSideProps(context) {
  const page = context.query.page
  const data = await service.Anime.getList(page)
  return {
    props: {
      data
    }
  }
}