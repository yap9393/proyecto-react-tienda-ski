import React from 'react'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({selectedCategory, productos}) => {
  const { categoryId } = useParams();
  console.log("La categoría es : " + categoryId);
  console.log('3)'+selectedCategory)

  return (
    <>
    <ItemList productos={productos} selectedCategory={selectedCategory} />
    </>
  )

}

export default ItemListContainer


  // const mostrarProductos= new Promise((resolve,reject)=>{
  //   if (productos.length>0){
  //     setTimeout(()=>{
  //       resolve(productos)
  //     },5000)
  //   } else{
  //     reject("no hay productos para mostrar")
  //   }
  // })

  // mostrarProductos
  // .then((resultado)=>{
  //   console.log(resultado)
  // })
  // .catch((error)=>{
  //   console.log(error)
  // })