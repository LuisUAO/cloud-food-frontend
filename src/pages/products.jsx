import React, { useContext } from 'react';
import { Grid } from '../components/common/grid';
import { Product } from '../components/products/product';
import { ProductsNavigator } from '../components/products/navigator';
import { ProductsDetail } from '../components/products/details';
import { useState } from 'react';
import { ProductsEditor } from '../components/products/seller/editor';
import { useProducts } from '../hooks/restaurant';
import { UserContext } from '../hooks/user';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export function ProductsPage() {
    let user = useContext(UserContext);
    console.log(user);
    let [active, setActive] = useState(false);
    let [product, setProduct] = useState(false);

    let { id } = useParams();
    // Crud de Productos
    let [
        products,
        productsReload,
        productsCreate,
        productsUpdate,
        productsRemove
    ] = useProducts(user.token, id);
    // Iniciar los Productos
    useEffect(() => {productsReload()}, []);

    const onModalFake = (e) => setActive(false);
    const onRequestEdit = (x) => {
        setActive(true);
        setProduct(x);
    }

    console.log(products);

    // -----------------
    // CRUD de Productos
    // -----------------

    const onEditorAccept = (name, price, image) => {
        let data = {
            nombre: name, 
            precio: price, 
            imagen: image
        };

        if (product) 
            productsUpdate(product._id, data);
        else productsCreate(data);

        // Ocultar Ventana
        setActive(false);
    };

    const onEditorDelete = () => {
        if (product)
            productsRemove(product._id);

        // Ocultar Ventana
        setActive(false);
    }

    // Revisar Si es dueño del restaurante. profe usted no se cansa de React?, que framework tan feo y problematico
    const admin = user && user.ok && products && user.usuario._id == products.restaurante.usuario;

    return (
        <>
            <ProductsNavigator 
                requestAdd={() => onRequestEdit(false)}
                id={id}
                admin={admin}
                name={products ? products.restaurante.nombre : "Invalido"}
            />
            <div class="container">
                    {
                        products && products.productos.length > 0
                        ?
                        <Grid>
                        {products.productos.map(x => 
                            <Product name={x.nombre} price={x.precio} onClick={() => onRequestEdit(x)} />)}
                        </Grid>
                        :
                        <h1 class="box">No hay Productos en este Restaurante aun.</h1>
                    }
            </div>

            {
                admin 
                ? <ProductsEditor product={product} visible={active} onAccept={onEditorAccept} onDelete={onEditorDelete} onClose={onModalFake} />
                : <ProductsDetail product={product} visible={active} onAccept={onModalFake} onClose={onModalFake} />    
            }
        </>
    );
}