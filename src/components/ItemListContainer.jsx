import React, { useState, useEffect, useContext } from 'react';
import ItemList from '../components/ItemList'
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);

useEffect(() => {
  const db = getFirestore();
  const itemsCollection = collection(db, "products");
  getDocs(itemsCollection)
    .then((snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
      setProductos(docs);
    });
}, []);

  return (
    <div className='margin-top-70'>
      <ItemList productos={productos} />
    </div>
  )

}

export default ItemListContainer


