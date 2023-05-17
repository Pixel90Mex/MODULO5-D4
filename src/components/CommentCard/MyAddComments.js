import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import { Spinner } from 'react-bootstrap'

const MyAddComment = ({ asin, closeFunction, refreshFunction }) => {
  const [commentText, setCommentText] = useState('')
  const [rate, setRate] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const sendComment = async () => {
    const myComment = {
      comment: commentText,
      rate: rate,
      elementId: asin
    }
    setLoading(true)
    try {
      const data = await fetch('https://striveschool-api.herokuapp.com/api/comments/',
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkMjFkY2RmZGUzMjAwMTRjZDdhN2QiLCJpYXQiOjE2ODM4MjUxMTYsImV4cCI6MTY4NTAzNDcxNn0.jW3AP_wKWMp5GyAAn-YGABI1reEwVrRixmvmBfeDzBo`
          },
          method: 'POST',
          body: JSON.stringify(myComment),
        })
      const response = await data.json()
      setLoading(false)
    } catch (error) {
      if (error) setError("Errore nell'invio dei dati")
    }
  }
  const validate = () => {
    return (commentText && rate)
  }
  const saveButtonEvent = async () => {
    if (validate()) {
      await sendComment()
      await refreshFunction()
      closeFunction()
    } else {
      setError('Devi inserire entrambe le informazioni richieste')
    }
  }
  return (
    <div
      className="modal show"
      style={{ display: 'block' }}
    >
      <Modal.Dialog centered>
        <Modal.Header>
          <Modal.Title>Nuovo Commento</Modal.Title>
        </Modal.Header>
        <Modal.Header>
          <Modal.Title>{`Id libro: ${asin}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4>Testo del commento</h4>
            <textarea
              rows="5"
              cols="30"
              onChange={(e) => setCommentText(e.target.value)}
            >
            </textarea>
            <br></br>
            <label className='me-2'>Rate</label>
            <input
              type="number"
              name="rate"
              min="1"
              max="5"
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          {error &&
            <div>
              <h5 className='text-danger'>{error}</h5>
            </div>
          }
          {loading && !error && <Spinner/>}
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => closeFunction()}>
            Close
          </Button>
          <Button variant="secondary" onClick={sendComment}>
            Save
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default MyAddComment