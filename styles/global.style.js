import { Global, css } from "@emotion/react";

const styles = css(`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'DM Sans', sans-serif
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover{
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }
`)

export default <Global styles={styles}/>