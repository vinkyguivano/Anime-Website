/** @jsxImportSource @emotion/react */
import Link from 'next/link'
import { Button } from '..'
import styles from './style'

export const Home = ({ anime }) => {
  const { id, title, coverImage, description } = anime
  return (
    <Link href={`/anime/${id}`} passHref>
      <a css={styles.home.container}>
        <img css={styles.home.image} src={coverImage.large} alt={"anime title"} />
        <div css={styles.home.title}>{title.english || title.native}</div>
        <div css={styles.home.description} id="description">
          <span dangerouslySetInnerHTML={{ __html: description?.slice(0, 200) }}></span>
        </div>
      </a>
    </Link>
  )
}

export const Secondary = ({ link, title, image, handleEdit, handleDelete }) => {
  return (
    <div css={styles.secondary.container}>
      <Link href={link} passHref>
        <a><img css={styles.secondary.image} src={image} alt={"cover image"} /> </a>
      </Link>
      <div css={styles.secondary.title}>
        {title}
      </div>
      <div css={styles.secondary.btnGroup}>
        {
          handleDelete && (
            <Button.Main red medium css={styles.secondary.btnDelete} onClick={handleDelete}>
              Delete
            </Button.Main>
          )
        }
        {
          handleEdit && (
            <Button.Main green medium css={styles.secondary.btnUpdate} onClick={handleEdit}>
              Update
            </Button.Main>
          )
        }
      </div>
    </div>
  )
}