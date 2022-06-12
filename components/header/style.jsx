import { css } from "@emotion/react";

const style = {
  container: css({
    '@media(min-width: 1200px)':{
      maxWidth: 1108
    }
  }),
  navContainer: css({
    backgroundColor: "#eee",
    boxShadow: "0px 0px 11px rgba(0,0,0,80%)",
  }),
  navbrand: css({
    fontFamily: "Henny Penny",
    fontWeight: 600,
    color: '#000',
    cursor: 'pointer'
  }),
  navhambIcon: css({
    fontSize: '1.5rem',
    color: '#000'
  }),
  navtoggler: css({
    border: 'none',
    '&:focus':{
      outline: 'none',
      boxShadow: "0 0 0 1px",
      backgroundColor: '#ddd',
    }
  }),
  navItem: css({
    color: '#000',
    fontWeight: 400,
    paddingLeft: '12px !important',
    '&:hover':{
      color: "#777"
    },
    '@media(max-width: 992px)': {
      marginTop: 15
    }
  }),
  active: css({
    color: "#777"
  })
}

export default style