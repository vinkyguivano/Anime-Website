import { css } from "@emotion/react";

const styles = {
  header: {
    container: css({
      margin: '1rem 0',
      textAlign: 'center',
      h3: {
        fontWeight: 'bold'
      }
    })
  },
  content: {
    container: css({
      width: '100%'
    }),
    button: css({
      margin: '1.5rem auto',
      display: 'block'
    }),
    inputDanger: css({
      border: '2px solid red'
    }),
    errorText: css({
      display: 'block',
      color: 'red',
      marginTop: '1rem',
      fontSize: 14
    }),
    addNewBtn: css({
      cursor: "pointer",
      marginTop: '1rem',
      fontSize: 14,
      textDecoration: 'underline',
      display: 'inline-block'
    })
  },
  delete: {
    btnGroup: css({
      textAlign: 'center',
      button :{
        '&:first-child':{
           marginRight: 5
        },
        '&:nth-child(2)':{
            marginLeft: 5
        }      
      }
    })
  }
}

export default styles