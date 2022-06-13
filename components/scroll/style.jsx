import { css } from "@emotion/react";

const styles = {
  scrollUp: css({
    position: 'fixed',
    bottom: '-20%',
    right: '1rem',
    backgroundColor: '#ddd',
    borderRadius: '.4rem',
    padding: '.5rem 1rem',
    transition: '.4s',
    cursor: 'pointer',
    zIndex: 100,
    i: {
      fontSize: '1.5rem'
    }
  })
}

export default styles

