/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react"
import styles from './style'

export default function Main() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setScrollY(window.scrollY)
    }
  }, [])

 return (
    <div
      onClick={() => window.scrollTo(0,0)} 
      css={styles.scrollUp} 
      style={{ ...scrollY >= 500 && { bottom: '3rem' } }}>
      <i className='uil uil-angle-up'></i>
    </div>
  )
}


