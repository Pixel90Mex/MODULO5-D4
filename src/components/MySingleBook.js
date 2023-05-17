import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';
import "../style/MySingleBook.css";
import { useState } from 'react';
import MyCommentArea from './CommentCard/MyCommentArea';

function MySingleBook({title, price, asin, img, category, author }) {

    const [selected, setSelected] = useState(false);

    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

    const toggleSelected = () => {
        setSelected(asin);
    }

    const toggleModal = () => {
      setIsCommentModalOpen(!isCommentModalOpen);
    }

  return (
    <>
    <Card className={`${selected ? 'border border border-danger shadow opacity-25 bg-dark text-white' : null }`} id='Book' style={{ width: '20rem' }} onClick={toggleSelected}>
      <Card.Img className='object-fit-cover' variant="top" src={img} style={{ height: '26rem'}} />
      <Card.Body key={asin} className='position-relative'>
        <Card.Title className='text-truncate'>{title}</Card.Title>
        <Card.Subtitle className="mb-2">{author}</Card.Subtitle>
        <Card.Text className='mb-1'>
        {category.charAt(0).toUpperCase() + category.slice(1)}
        </Card.Text>
        <Badge bg="danger" className="mb-2">€{price}</Badge>
        <Button onClick={toggleModal} className='position-absolute start-50' variant="primary" >Comments</Button>
      </Card.Body>
    </Card>
    {isCommentModalOpen && <MyCommentArea closeFunction={toggleModal} asin={asin} toggleModal={toggleModal}/>}
    </>
  );
}

export default MySingleBook;