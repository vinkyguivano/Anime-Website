import { css } from "@emotion/react";

const styles = {
  main: css({
    display: 'inline-block',
    outline: 'none',
    border: 'none',
    textDecoration: 'none',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#555',
    padding: '10px 24px',
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 10,
    transition: '.5s',
    "&:hover":{
      backgroundColor: '#444'
    },
    "&:disabled": {
      backgroundColor: '#999'
    }
  }),
  green: css({
    backgroundColor: '#4CAF50',
    '&:hover' : css({
      backgroundColor: '#06750a',      
    })
  }),
  red: css({
    backgroundColor: '#f44336',
    '&:hover' : css({
      backgroundColor: '#80160e',      
    })
  }),
  medium: css({
    padding: '10px 16px',
    fontSize: 13,
  })
}

export default styles