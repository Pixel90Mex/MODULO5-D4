import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';

const MySearchBar = (books, setRenderBooks) => {

    const [searchTerm, setSearchTerm] = useState("");
    console.log(searchTerm);

    const handleSearch = () => {
        if (searchTerm !== "") {
            const filteredBooks = books.filter((book) =>
                book.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            );
            setRenderBooks(filteredBooks);
        } else {
            setRenderBooks(books);
        }
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col sm={12}>
                    <Form className="d-flex" onSubmit={(e) => {
                        e.preventDefault()
                        handleSearch()
                    }}>
                        <Form.Control
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button type='submit'>
                            Search
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default MySearchBar;
