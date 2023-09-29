import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const Document = () => {
    const {id}=useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const db=getFirestore()
        const oneItem=doc(db,"products", `${id}`)
        getDoc(oneItem).then((snapshot)=>{
            if(snapshot.exists()){ 
                const docs =snapshot.data()
                setProduct(docs)
            }
        })
    },[])

    return (
        <div>
            <h1>Producto</h1>
            {
                <div>
                    <h4>producto: {product.nombre}</h4>
                </div>
            }
            {/* hago lo mismo en ItemDetail o itemDetail contenainer salvo que ahi no renderizo directamente
            sino que paso la propiedad como props. */}
        </div>
    )
}

export default Document