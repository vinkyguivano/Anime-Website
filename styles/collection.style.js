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