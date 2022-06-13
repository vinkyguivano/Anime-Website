/** @jsxImportSource @emotion/react */
import styles from './style'

export const Main = ({
  onClick,
  children,
  disabled = false,
  green = false,
  red = false,
  medium = false,
  ...props }) => {

  return (
    <button
      type='button'
      css={[styles.main, red && styles.red, green && styles.green, medium && styles.medium]}
      onClick={onClick}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  )
}