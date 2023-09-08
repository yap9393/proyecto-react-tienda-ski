import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ productos }) => {
  const { id } = useParams();
  console.log('el ID en itemDetailCont.. es ' + id);

  return (
    <div>
      <ItemDetail productos={productos} itemId={id} />
    </div>
  );
};

export default ItemDetailContainer;