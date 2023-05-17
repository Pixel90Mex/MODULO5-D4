import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { ListGroup } from 'react-bootstrap';
import MySingleComment from './MySingleComment';
import { useState } from 'react';
import MyAddComment from './MyAddComments';

const MyCommentList = ({asin, comments, closeFunction, refreshFunction }) => {
    const [isAddCommentOpen, setIsAddCommentOpen] = useState(false)
    const toggleAddComment = () => {
        setIsAddCommentOpen(!isAddCommentOpen)
    }
    return (
        <div
            className="modal show"
            style={{ display: 'block' }}
        >
            <Modal.Dialog centered scrollable>
                <Modal.Header>
                    <Modal.Title>Commenti</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        {comments && comments.map((comment, index) => {
                            return (
                                <MySingleComment key={index} comment={comment}/>
                            )
                        })}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => closeFunction()}>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={toggleAddComment}>
                        Add Comment
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
            {isAddCommentOpen && <MyAddComment asin={asin} closeFunction={toggleAddComment}
                refreshFunction={refreshFunction}/>}
        </div>
    )
}

export default MyCommentList