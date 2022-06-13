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
    '@media(max-width: 350px)': {
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
  card: {
    container: css({
      maxWidth: '100%',
      boxShadow: '0 0 10px 1px #999',
      borderRadius: '.4rem',
      overflow: 'hidden',
      backgroundColor: 'white',
      position: 'relative',
      '&:hover': {
        img :{
          filter: 'brightness(50%)'
        }
      }
    }),
    image: css({
      width: '100%',
      aspectRatio: '3 / 4',
      backgroundColor: '#444',
      transition: '.4s'
    }),
    title: css({
      padding: '1rem',
      minHeight: '3rem',
      textAlign: 'center',
      fontSize: '.85rem',
      fontWeight: 800,
      lineHeight: 1.5,
      '@media(max-width: 360px)': {
        fontSize: '.75rem'
      },
    }),
    btnGroup: css({
      padding: '0 1rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }),
    btnUpdate: css({
      width: '80%',
      marginTop: 8,
    }),
    btnDelete: css({
      width: '80%',
    }),
  },
  noCollection: css({
    gridColumn: '1 / span 5',
    textAlign: 'center',
    fontSize: 16
  }),
  btnWrapper: css({
    textAlign: 'center',
    marginBottom: '1rem',
    marginTop: '-10px'
  })
}

export default styles