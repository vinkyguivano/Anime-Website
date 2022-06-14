/** @jsxImportSource @emotion/react */
import Modal from 'react-modal'
import styles from './style'
import Select from 'react-select'
import { Button } from '../../components'
import { useState } from 'react'

if(typeof document != 'undefined'){
  Modal.setAppElement(document.getElementById("__next"))
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%',
    minWidth: '40%',
    alignItems: 'center',
    display: 'flex'
  },
  overlay: {
    zIndex: 10000,
    backgroundColor: 'rgba(0,0,0,.8)',
  }
};

const customSelectStyle = {
  menu: (provided, state) => ({
    ...provided,
    position: 'relative',
  })
}

export const AddAnimeToCollection = ({
  isOpen,
  toggleModal,
  options,
  selectedValue,
  handleChange,
  handleBlur,
  handleSubmit,
  isTouched,
  checkError,
  errorMsg }) => {

  const [isSelectExisting, setSelectExisting] = useState(true)
  const showError = isTouched && checkError()
  const mapOptions = options.map(o => ({
    label: o.name, value: o.name
  }))

  const toggleSelect = () => {
    setSelectExisting(prev => !prev)
    handleChange('')
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="Modal Add Collection"
      onAfterOpen={() => document.body.style.overflow = 'hidden'}
      onAfterClose={() => document.body.style.overflow = 'unset'}
      style={{
        content: {
          ...customStyles.content
        },
        overlay: {
          ...customStyles.overlay
        }
      }}
    >
      <div>
        <div css={styles.header.container}>
          <h3>Add to collection</h3>
        </div>
        <div css={styles.content.container}>
          <p>Add your favorite anime to your collection. You can either select an existing collection or create a new one.</p>
          {
            (options.length < 1 || !isSelectExisting) ? (
              <>
                {options.length < 1 && <p>There is no existing collection available! Please create a new one.</p>}
                <input
                  type={'text'}
                  className="form-control"
                  onChange={e => handleChange(e.target.value)}
                  onBlur={handleBlur}
                  value={selectedValue}
                  placeholder={"Insert text here..."}
                  css={{ ...showError && styles.content.inputDanger }}
                />
                {
                  errorMsg && (
                    <span css={styles.content.errorText}>{errorMsg}</span>
                  )
                }{
                  !isSelectExisting &&
                  <span css={styles.content.addNewBtn} onClick={toggleSelect}>
                    Select existing collection
                  </span>
                }
              </>
            )
              :
              (
                <>
                  <Select
                    options={mapOptions}
                    value={selectedValue}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    styles={customSelectStyle}
                    placeholder={"Select a collection"}
                    maxMenuHeight={250}
                  />
                  <span css={styles.content.addNewBtn} onClick={toggleSelect}>
                    Create a new one
                  </span>
                </>
              )
          }
          <Button.Main
            css={styles.content.button}
            onClick={(e) => {
              const res = handleSubmit(e)
              if (res) {
                setSelectExisting(true)
              }
            }}
            {...checkError() && { disabled: true }}>
            <div>Submit</div>
          </Button.Main>
        </div>
      </div>
    </Modal>
  )
}

export const Delete = ({ isOpen, handleClose, itemName, handleDelete, title }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      onAfterOpen={() => document.body.style.overflow = 'hidden'}
      onAfterClose={() => document.body.style.overflow = 'unset'}
      style={customStyles}>
      <div>
        <div css={styles.header.container}>
          <h3>{title}</h3>
        </div>
        <div css={styles.content.container}>
          <p>Are you sure want to delete <b>{itemName}</b> ? The action can&apos;t be undone once it&apos;s deleted!</p>
          <div css={styles.delete.btnGroup}>
            <Button.Main green onClick={handleDelete}>
              Yes
            </Button.Main>
            <Button.Main red onClick={handleClose}>
              No
            </Button.Main>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export const AddOrEdit = ({
  isOpen,
  handleClose,
  value,
  handleChange,
  handleBlur,
  type,
  isTouched,
  isError,
  errorMsg,
  handleSubmit
}) => {

  const showError = isTouched && isError

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      onAfterOpen={() => document.body.style.overflow = 'hidden'}
      onAfterClose={() => document.body.style.overflow = 'unset'}
      style={customStyles}>
      <div style={{ width: '100%' }}>
        <div css={styles.header.container}>
          <h3>{type === 'add' ? 'Add' : 'Edit'} Collection</h3>
        </div>
        <div css={styles.content.container}>
          <p>Type your new collection name below </p>
          <input
            type="text"
            className="form-control"
            defaultValue={value}
            onChange={(e) => handleChange(e.target.value)} 
            onBlur={handleBlur}
            placeholder={"Insert text here.."}
            css={{ ...showError && styles.content.inputDanger }}/>
          {
            errorMsg && (
              <span css={styles.content.errorText}>{errorMsg}</span>
            )
          }
          <Button.Main
            css={styles.content.button}
            onClick={handleSubmit}
            {...isError && { disabled: true }}>
            <div>Submit</div>
          </Button.Main>
        </div>
      </div>
    </Modal>
  )
}