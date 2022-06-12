import { css } from "@emotion/react";

const styles = {
  container: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    columnGap: 0,
    '@media(min-width: 992px)': {
      gridTemplateColumns: '70% 30%',
      columnGap: '1.5rem'
    }
  }),
  cover: {
    container: css({
      margin: '1rem auto',
      width: 'fit-content',
      border: '5px solid #444',
      '@media(min-width: 992px)':{
        margin: '2rem auto'
      }
    }),
    image: css({
      maxWidth: '100%',
      height: 'auto'
    }),
    title: css({
      fontSize: '1.5rem',
      margin: '1.5rem 0 3.5rem',
      fontWeight: 'bold',
      textAlign: 'center'
    }),
  },
  detail: {
    container: css({
      boxShadow: '0 25px #444, 0 -25px #444',
      borderLeft: '2px solid #ddd',
      borderRight: '2px solid #ddd',
      padding: '1.5rem',
      width: '100%',
      backgroundColor: '#fff',
      '@media(min-width: 992px)':{
        marginTop: 25,
        order: -1
      }
    }),
    section: css({
      marginBottom: '1.5rem'
    }),
    title: css({
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '.5rem'
    }),
    content: css({
      fontSize: 14,
      textAlign: 'justify',
      marginBottom: '0px !important',
      maxHeight: 105,
      overflow: 'hidden',
    }),
    isDescShown: css({
      fontSize: 14,
      marginTop: 0,
      div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        p: {
          marginBottom: '0px !important',
          marginRight: 6
        },
        i: {
          fontSize: '1.5rem'
        }
      }
    }),
    layout: css({
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      '@media(min-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: '1rem'
      }
    }),
    blackBorder: css({
      height: 4,
      backgroundColor: "#444",
      marginBottom: '1.5rem'
    }),
    collectionContainer: css({
      display: 'grid',
      '@media(min-width: 600px)':{
        gridTemplateColumns: 'repeat(2, 1fr)'
      },
      '@media(min-width: 768px)':{
        gridTemplateColumns: 'repeat(3, 1fr)',
        columnGap:'1rem'
      }
    }),
    collection: css({
      display: 'block',
      margin: '.5rem 1rem',
      textDecoration: 'underline',
      fontSize: 16,
      "&:hover": {
        color: '#555'
      }
    })
  }
}

export default styles