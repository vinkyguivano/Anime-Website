/** @jsxImportSource @emotion/react */
import styles from "./style"

export const Main = ({ children }) => {
  return (
    <div css={styles.main.container}>
      <div css={styles.main.content}>
        {children}
      </div>
    </div>
  )
}