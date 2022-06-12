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
    transition: .5,
    "&:hover":{
      backgroundColor: '#444'
    },
    "&:disabled": {
      backgroundColor: '#999'
    }
  })
}

export default styles