import React, { useState, useContext } from 'react';
import { collection, addDoc, getFirestore,doc, updateDoc, getDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { CartContext } from '../../context/ShoppingCartContext';

const Form = () => {
    const { cart, clear } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [orderId, setOrderId] = useState('');
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // verifico que los campos no estén vacios
        if (nombre === '' || apellido === '' || email === '' || confirmEmail === '' || telefono === '' || direccion === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error en la compra',
                text: 'Por favor, completa todos los campos antes de finalizar la compra.',
                timer: 3000,
                timerProgressBar: true,
                allowOutsideClick: false,
            });
            return;
        }

        // verifico que los mails sean iguales
        if (email !== confirmEmail) {
            Swal.fire({
                icon: 'error',
                title: 'Error en la compra',
                text: 'El correo electrónico y la confirmación no coinciden.',
                timer: 3000,
                timerProgressBar: true,
                allowOutsideClick: false,
            });
            return;
        }

        // verifico el stock antes de procesar el pedido
        try {
            for (const item of cart) {
                const productDocRef = doc(db, 'products', item.id);
                const productDocSnapshot = await getDoc(productDocRef);

                if (!productDocSnapshot.exists()) {
                    throw new Error('Producto no encontrado en la base de datos.');
                }

                const productData = productDocSnapshot.data();
                const productStock = productData.stock;

                if (item.cantidad > productStock) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error en la compra',
                        text: `El producto "${productData.nombre}" ya no está disponible en stock.`,
                        timer: 3000,
                        timerProgressBar: true,
                        allowOutsideClick: false,
                    });
                    return;
                }
            }

            // creo un array para guardar los productos comprados
            const selectedProducts = cart.map((item) => ({
                id: item.id,
                nombre: item.nombre,
                cantidad: item.cantidad,
                precio: item.precio,
            }));

            // monto total
            const totalAmount = cart.reduce(
                (total, item) => total + item.precio * item.cantidad,
                0
            );

            // agrego productos y total en la orden
            const order = {
                nombre,
                apellido,
                email,
                telefono,
                direccion,
                productos: selectedProducts,
                total: totalAmount,
            };

            // envio la orden a la base de datos
            const docRef = await addDoc(ordersCollection, order);
            const orderId = docRef.id;

            // disminuye la cantidad de stock en la base de datos para cada producto en el carrito
            for (const item of cart) {
                const productDocRef = doc(db, 'products', item.id);
                await updateDoc(productDocRef, {
                    stock: item.stock - item.cantidad,
                });
            }

            setOrderId(orderId);

            Swal.fire('¡Compraste con éxito!', `La orden se ha realizado exitosamente. El id de su compra es ${orderId}. Te enviaremos un email a ${email} con la confirmación de la compra.`, 'success');
            clear();
        } catch (error) {
            console.error('Error agregando el producto a la base de datos: ', error);
            Swal.fire('Hubo un problema con tu compra.', `Intenta de nuevo más tarde`, 'error');
        }
    };

    return (
        <>
            <h1>Checkout</h1>
            <form className='checkOutForm' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                />
                <input
                    type="email"
                    name="confirmEmail"
                    placeholder="Confirmar Email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    autoComplete="email"
                />
                <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />
                <input
                    type="text"
                    name="direccion"
                    placeholder="Dirección de Envío"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                />
                <button type="submit">Finalizar Compra</button>
            </form>
        </>
    );
};

export default Form;
