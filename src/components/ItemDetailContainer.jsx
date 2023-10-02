import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Loader from './Loader';
import { Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [productNotFound, setProductNotFound] = useState(false);

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
          setProductNotFound(true); 
        }
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
      });
  }, [id]);

  return (
    <div className='margin-top-70' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {productNotFound ? (
        <div>
          <p className='productoNoExiste'>El producto no existe.</p>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <Link to={'/'}>
              <Button variant='solid' colorScheme='yellow'>Continuar comprando</Button>
            </Link>
          </div>
        </div>
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <Loader />
      )}
    </div>
  );
}  

export default ItemDetailContainer;
