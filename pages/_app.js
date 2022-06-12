import 'bootstrap/dist/css/bootstrap.min.css';
import globalStyle from '../styles/global.style';
import { useEffect } from 'react'
import { Header, Container } from '../components/index'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof document !== undefined) {
      import("bootstrap/dist/js/bootstrap.bundle")
    }
  }, [])

  return (
    <>
      {globalStyle}
      <Header />
      <Container.Main>
        <Component {...pageProps} />
      </Container.Main>
    </>
  )
}

export default MyApp
