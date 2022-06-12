/** @jsxImportSource @emotion/react */
import styles from './style'

export const Main = ({ onClick, children, disabled = false, ...props }) => {
  return (
    <button
      type='button'
      css={styles.main}
      onClick={onClick}
      {...props}
      disabled = {disabled}
    >
      {children}
    </button>
  )
}