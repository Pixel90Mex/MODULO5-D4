import { Badge } from 'react-bootstrap';

const MyBadge = ({str, color}) => {
  return (
    <Badge bg={color}>{str}</Badge>
  )
}

export default MyBadge;