// Carrito de compras usando array

let listaDeCompras = [];

export const agregarProducto = (producto) => {
    const productoNormalizado = producto.toLowerCase();

    if (!listaDeCompras.includes(productoNormalizado)) {
        listaDeCompras.push(productoNormalizado);
        console.log(`Se agrego el producto ${productoNormalizado}`);
    } else {
        console.log(`El producto ${productoNormalizado} ya esta en el carrito`);
    }
};

export const eliminarProducto = (producto) => {
    const productoNormalizado = producto.toLowerCase();
    const longitudOriginal = listaDeCompras.length;

    listaDeCompras = listaDeCompras.filter(item => item !== productoNormalizado);

    if (listaDeCompras.length < longitudOriginal) {
        console.log(`Se elimino ${productoNormalizado}`);
    } else {
        console.log(`No se encontro el producto ${productoNormalizado}`);
    }
};

// Mostrar productos de la lista
export const mostrarLista = () => {
    console.log('\nCarrito de compras');
    if(listaDeCompras.length ===0){
        console.log('El carrito aun no tiene articulos');
        return;
    }

    listaDeCompras.forEach((producto,index) => {
        console.log(`${index +1}. ${producto}`);
    });
}
