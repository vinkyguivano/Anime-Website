import { css } from "@emotion/react";

const styles = {
  home: {
    container: css({
      maxWidth: '100%',
      boxShadow: '0 0 10px 1px #999',
      borderRadius: '.4rem',
      overflow: 'hidden',
      cursor: 'pointer',
      backgroundColor: 'white',
      position: 'relative',
      '&:hover': {
        '& #description': {
          opacity: .8
        }
      }
    }),
    image: css({
      width: '100%',
      aspectRatio: '3 / 4',
      backgroundColor: '#444'
    }),
    title: css({
      margin: '1rem 1rem 2rem',
      textAlign: 'center',
      fontSize: '.85rem',
      fontWeight: 800,
      lineHeight: 1.5,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      '@media(max-width: 360px)': {
        fontSize: '.75rem'
      },
    }),
    description: css({
      backgroundColor: 'black',
      opacity: 0,
      transition: '.3s',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      span: {
        color: 'rgba(255,255,255,1)',
        display: 'inline-block',
        width: '80%',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        display: 'box',
      },
    })
  },
  secondary: {
    container: css({
      maxWidth: '100%',
      boxShadow: '0 0 10px 1px #999',
      borderRadius: '.4rem',
      overflow: 'hidden',
      backgroundColor: 'white',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
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
      margin: '1rem',
      textAlign: 'center',
      fontSize: '.85rem',
      fontWeight: 800,
      lineHeight: 1.5,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      '@media(max-width: 360px)': {
        fontSize: '.75rem'
      },
    }),
    btnGroup: css({
      padding: '0 1rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 'auto'
    }),
    btnUpdate: css({
      width: '80%',
      marginTop: 8,
    }),
    btnDelete: css({
      width: '80%',
    }),
  },
}

export default styles