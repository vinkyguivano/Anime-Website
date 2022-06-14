import { css } from "@emotion/react";

const styles = {
  main:{
    container: css({
      minHeight: '100vh',
    }),
    content: css({
      maxWidth: 1080,
      margin: 'auto',
      padding: '6rem 2rem 5rem',
      '@media(min-width: 768px)' :{
        paddingLeft: '2.5rem',
        paddingRight: '2.5rem'
      }
    })
  } 
}

export default styles