import { css } from "@emotion/react";

const styles = {
  header: {
    container:css({
      width: 'fit-content',
      margin: '0 auto 3rem'
    }),
    title: css({
      fontWeight: 800,
      fontSize: '2.5rem',
      textAlign: 'center',
      fontFamily: 'Ubuntu Mono',
    }),
    blackBox: css({
      backgroundColor: '#111',
      height: '.5rem',
      borderRadius: '1rem',
      marginTop: 20
    })
  },
  container: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
    padding: '1rem 0',
    '@media(max-width: 320px)': {
      gridTemplateColumns: 'repeat(1, 1fr)'
    },
    '@media(min-width: 600px)': {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
    '@media(min-width: 768px)': {
      gridTemplateColumns: 'repeat(4, 1fr)'
    },
    '@media(min-width: 992px)': {
      gridTemplateColumns: 'repeat(5, 1fr)'
    },
  }),
  paginate: {
    container: css({
      padding: '2rem 0 1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }),
    arrow: css({
      display: 'block',
      backgroundColor: '#111',
      borderRadius: '50%',
      width: 30,
      height: 30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: '.5s',
      '&:hover':{
        backgroundColor: '#888'
      },
      '@media(max-width: 360px)':{
        width: 20,
        height: 20
      },
      i : css({
        fontSize: '1.5rem',
        color: '#ddd',
        '@media(max-width: 360px)':{
          fontSize: '1rem'
        },
      })
    }),
    content: css({
      margin: '0 .7rem',
      display: 'flex',
      alignItems: 'center',
      '@media(max-width: 360px)':{
        margin: '0. 4rem'
      }
    }),
    number: css({
      margin: '0 .7rem',
      color: '#111',
      '&:hover':{
        color: "#888",
      },
      '@media(max-width: 360px)':{
        margin: '0 .4rem',
        fontSize: '.75rem'
      }
    }),
    activeNumber: css({
      color: '#ddd',
      backgroundColor: 'black',
      padding: 6
    })
  }

}

export default styles