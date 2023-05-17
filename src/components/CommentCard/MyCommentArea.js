import React from 'react'
import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import MyCommentList from './MyCommentList'


const MyCommentArea = ({closeFunction, asin}) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [comments, setComments] = useState([])

    const getComments = async () => {
        setLoading(true)
        try {
            const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkMjFkY2RmZGUzMjAwMTRjZDdhN2QiLCJpYXQiOjE2ODM4MjUxMTYsImV4cCI6MTY4NTAzNDcxNn0.jW3AP_wKWMp5GyAAn-YGABI1reEwVrRixmvmBfeDzBo`
                    }
                })
            const response = await data.json()
            setComments(response)
            setLoading(false)
        } catch (error) {
            if (error) {
                setError('Errore nella ricezione dei dati')
            }
        }
    }
    useEffect(() => {
        getComments()
    }, [asin])

    return (
        <>
            {loading && !error && <Spinner />}
            {!loading && !error && <MyCommentList asin={asin} comments={comments}
                closeFunction={closeFunction} refreshFunction={getComments} />}
            {error && <h3 className='text-danger'>{error}</h3>}
        </>
    )
}

export default MyCommentArea