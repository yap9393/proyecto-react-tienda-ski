import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Loader from './Loader';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemDoc = doc(db, "products", id);
    getDoc(itemDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const productData = snapshot.data();
          setProduct({ id, ...productData });
        } else {
          console.log("Producto no encontrado");
        }
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
      });
  }, [id]);


  return (
    <div className='margin-top-70' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {product ? <ItemDetail product={product} /> : <Loader></Loader>}
    </div>
  );
};

export default ItemDetailContainer;
