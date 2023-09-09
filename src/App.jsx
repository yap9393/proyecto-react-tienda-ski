import ItemListContainer from './components/ItemListContainer.jsx'
import NavBar from './components/NavBar.jsx'
import React from 'react'
import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'


const App = () => {

  let productos = [
    {
      id: 1,
      nombre: "Rossignol Escaper",
      categoria: "ski",
      descripcion: "Perfecto para cualquier terreno, este esquí ofrece un equilibrio óptimo entre agarre en pista y flotación en nieve polvo, brindando versatilidad y confianza a los esquiadores de todos los niveles.",
      imageURL: 'https://images.evo.com/imgp/zoom/178695/708775/rossignol-black-ops-escaper-skis-2021-.jpg',
      precio: 1000,
      stock: 8
    },
    {
      id: 2,
      nombre: "Burton Freestyle",
      categoria: "snowboard",
      descripcion: "Diseñado para los amantes de los trucos y acrobacias en el parque de nieve, este esquí cuenta con una construcción liviana y mayor flexibilidad, permitiendo giros y saltos suaves con aterrizajes estables.",
      imageURL: 'https://m.media-amazon.com/images/I/61IC3pJUntL.jpg',
      precio: 1500,
      stock: 3
    },
    {
      id: 3,
      nombre: "k2 Excavator",
      categoria: "snowboard",
      descripcion: "Listo para aventuras fuera de pista, este esquí presenta una forma ancha y rocker en la punta para una flotación excepcional en nieve profunda, ideal para aquellos que buscan explorar terrenos vírgenes en la montaña.",
      imageURL: 'https://images.evo.com/imgp/zoom/207166/819100/clone.jpg',
      precio: 2000,
      stock: 6
    },
    {
      id: 4,
      nombre: "Rossignol Experience 88",
      categoria: "ski",
      descripcion: "Un esquí versátil y confiable para esquiadores intermedios y avanzados.",
      imageURL: 'https://images.evo.com/imgp/700/80687/377489/clone.jpg',
      precio: 1399,
      stock: 9
    },
    {
      id: 5,
      nombre: "Salomon QST 106",
      categoria: "ski",
      descripcion: "Un esquí freeride diseñado para condiciones de nieve profunda y terrenos empinados.",
      imageURL: 'https://images.evo.com/imgp/700/219240/910795/clone.jpg',
      precio: 1499,
      stock: 2
    },
    {
      id: 6,
      nombre: "K2 Pinnacle 105",
      categoria: "ski",
      descripcion: "Un esquí all-mountain de alto rendimiento que se adapta a cualquier terreno.",
      imageURL: 'https://images.evo.com/imgp/zoom/121945/489156/clone.jpg',
      precio: 1599,
      stock: 4
    },
    {
      id: 7,
      nombre: "Burton Custom X",
      categoria: "snowboard",
      descripcion: "Un snowboard diseñado para riders avanzados que buscan velocidad y precisión.",
      imageURL: 'https://images.evo.com/imgp/zoom/236548/1019749/clone.jpg',
      precio: 1299,
      stock: 7
    },
    {
      id: 8,
      nombre: "Lib Tech T.Rice Pro",
      categoria: "snowboard",
      descripcion: "Un snowboard freestyle y freeride inspirado en el famoso rider Travis Rice.",
      imageURL: 'https://images.evo.com/imgp/700/239622/1012963/clone.jpg',
      precio: 1399,
      stock: 1
    },
    {
      id: 9,
      nombre: "Nordica Enforcer 93",
      categoria: "ski",
      descripcion: "Un esquí all-mountain versátil y ágil que brinda un gran control en cualquier condición.",
      imageURL: 'https://images.evo.com/imgp/zoom/162248/642118/clone.jpg',
      precio: 1499,
      stock: 5
    },
    {
      id: 10,
      nombre: "Jones Explorer",
      categoria: "snowboard",
      descripcion: "Un snowboard freeride que te lleva a explorar las montañas sin límites.",
      imageURL: 'https://images.evo.com/imgp/zoom/138779/569376/clone.jpg',
      precio: 1349,
      stock: 10
    },
    {
      id: 11,
      nombre: "Burton Ion Snowboard Boots",
      categoria: "botas de snowboard",
      descripcion: "Las Burton Ion Snowboard Boots son una elección de alta gama para riders que buscan el máximo rendimiento y comodidad en las montañas. Diseñadas con tecnología de vanguardia, estas botas ofrecen un ajuste preciso y una respuesta excepcional en cualquier terreno.",
      imageURL: 'https://images.evo.com/imgp/zoom/181385/738184/burton-ion-snowboard-boots-.jpg',
      precio: 799,
      stock: 8
    },
    {
      id: 12,
      nombre: "Burton Ruler Snowboard Boots",
      categoria: "botas de snowboard",
      descripcion: " Las Burton Ruler Snowboard Boots son una excelente opción para snowboarders de nivel intermedio que buscan comodidad y rendimiento a un precio asequible. Estas botas ofrecen un ajuste cómodo y versátil para disfrutar de un día completo en la montaña.",
      imageURL: 'https://images.evo.com/imgp/zoom/137774/585834/burton-ruler-snowboard-boots-.jpg',
      precio: 699,
      stock: 3
    },
    {
      id: 13,
      nombre: "Salomon S​/Pro 100 GW Ski Boots",
      categoria: "botas de ski",
      descripcion: "Las Salomon S​/Pro 100 GW Ski Boots son ideales para esquiadores que buscan un equilibrio perfecto entre rendimiento y comodidad. Estas botas ofrecen un ajuste personalizable y una transferencia de energía excepcional, lo que las convierte en una opción versátil para diversas condiciones en la montaña.",
      imageURL: 'https://images.evo.com/imgp/700/197395/811226/salomon-s-pro-100-gw-ski-boots-.jpg',
      precio: 699,
      stock: 6
    },
    {
      id: 14,
      nombre: "Rossignol Evo 70 Ski Boots 2024",
      categoria: "botas de ski",
      descripcion: "Las Rossignol Evo 70 Ski Boots 2024 son una elección confiable para esquiadores principiantes y aquellos que buscan comodidad en la montaña. Estas botas ofrecen un ajuste cómodo y una facilidad de uso excepcional, lo que las convierte en una opción ideal para aquellos que están comenzando en el mundo del esquí.",
      imageURL: 'https://images.evo.com/imgp/700/227411/918279/clone.jpg',
      precio: 699,
      stock: 7
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("Todos");
  // console.log("2) "+selectedCategory)

  return (
    <BrowserRouter>
      <NavBar setSelectedCategory={setSelectedCategory} />
      <Routes>
        <Route exact path="/" element={<ItemListContainer selectedCategory={selectedCategory} productos={productos} />} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer selectedCategory={selectedCategory} productos={productos} />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer productos={productos}/>} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  
  );
}
export default App