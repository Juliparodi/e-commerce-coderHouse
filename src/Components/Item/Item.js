import {Card, Image} from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";
import './item.css'
import {images} from './image'
import {Link} from "react-router-dom";
//import {useState} from "react";
//import ModalItem from './../Modal/ModalItem'

const Item = ({ item, handleAddToCart }) => {

  const { id, name, price, img, stock } = item;

  /*
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
   */

  return (
      <>
        <Card style={{ width: '19rem' }}>
          <Image variant="top" className={'card-image'} src={images[img]} alt="image" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>${price}</Card.Text>
            <Card.Text>Stock disponible: {stock}</Card.Text>
            <Card.Footer>
              <Link to={`/item/${id}`} className={'Option'}>Ver Detalle</Link>
            </Card.Footer>
            <ItemCount item={item} stock={10} initial={1} handleAddToCart={handleAddToCart} />
          </Card.Body>
        </Card>
        {/*<ModalItem item={item} handleAddToCart={handleAddToCart} showModal={showModal} handleCloseModal={handleCloseModal} />*/}

      </>
  );
};

export default Item;


