import { Container, Row, Spinner } from 'react-bootstrap';
import MySingleBook from './MySingleBook';
import React, { useEffect, useState } from 'react';
import "../style/MyBookList.css"
import MySearchBar from './MySearchBar'

const MyBookList = () => {
    //impostazione degli stati
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [books, setBooks] = useState([]);
    const [renderBooks, setRenderBooks] = useState([]);

    //funzione per chiamata API
    const getBooks = async () => {
        setLoading(true);
        try {
            const data = await fetch("https://epibooks.onrender.com/");
            const response = await data.json();
            setBooks(response);
            setRenderBooks(response);
            setLoading(false);
        } catch (error) {
            if (error) {
                setError("Errore durante la ricezione dei dati");
            }
        }
    }
    //chiamata per ottenere i libri ed inserirli in un array
    useEffect(() => {
        getBooks();
    }, [])
    //inserimento dell'array di libri nella card MySingleBook
    return (
        <>
            <Container id='container'>
                {error && <h1 className='text-danger'>{error}</h1>}
                {loading && !error && <Spinner color="#36d7b7" />}
                {!loading && !error &&
                    <div>
                        <MySearchBar books={books}  setBooks={setBooks} setRenderBooks={setRenderBooks}/>
                        <h4 className='text-center mb-5'>Ultimi arrivi!</h4>
                        <Container fluid>
                            <Row xs={1} sm={2} md={3} lg={4} className='gap-1'>
                                {renderBooks && renderBooks.map((book) => (
                                    <MySingleBook
                                        key={book.asin}
                                        title={book.title}
                                        img={book.img}
                                        author={book.author}
                                        price={book.price}
                                        asin={book.asin}
                                        category={book.category}
                                    />
                                ))}
                            </Row>
                        </Container>
                    </div>
                }
            </Container>
        </>
    )
}

export default MyBookList;