import React from 'react'
import { ListGroup } from 'react-bootstrap';
import MyRatingSystem from './MyRatingSystem'

const MySingleComment = ({comment}) => {
    return (
        <ListGroup.Item
            className='d-flex justify-content-between align-items-start'>
            <div className='ms-2 me-auto'>
                <div>
                    {comment.comment}
                </div>
                <div>
                    relativo al libro: {comment.elementId}
                </div>
            </div>
            <MyRatingSystem stars={comment.rate} />
        </ListGroup.Item>

    )
}

export default MySingleComment