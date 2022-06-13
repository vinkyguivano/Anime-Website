import { css } from '@emotion/react'

const styles = {
  nameHeader: css({
    width: '100%'
  }),
  nameText: css({
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily: 'Ubuntu Mono',
    lineHeight: 1.5,
    paddingBottom: 8,
    borderBottom : '4px solid black'
  }),
  listHeader: css({
    marginTop: '1.5rem',
    textAlign: 'center',
    fontSize: '1.5rem',
  }),
  listContainer: css({
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
  noCollection: css({
    gridColumn: '1 / span 5',
    textAlign: 'center',
    fontSize: 16
  }),
}

export default styles