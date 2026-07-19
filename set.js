// Lista de compras

let listaDeCompras = new Set();

// Agregar producto
export const agregarProducto = (producto) => {
    const productoNormalizado = producto.toLowerCase();

    if (!listaDeCompras.has(productoNormalizado)) {
        listaDeCompras.add(productoNormalizado);
        console.log(`Se agrego el producto ${producto}`);
    } else {
        console.log(`El producto ${productoNormalizado} ya esta en el carrito`);
    }
};

// Eliminar producto
export const eliminarProducto = (producto) => {
    const productoNormalizado = producto.toLowerCase();

    if (listaDeCompras.delete(productoNormalizado)) {
        console.log(`Se elimino ${productoNormalizado}`);
    } else {
        console.log(`No se encontro el producto ${productoNormalizado}`);
    }
}

// Mostrar productos de la lista
export const mostrarLista = () => {
    console.log('\nCarrito de Compras');
    if (listaDeCompras.size === 0) {
        console.log('El carrito aun no tiene articulos');
        return;
    }

    // Imprimir el set con indices
    [...listaDeCompras].forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`);
    });
}


/* // Hacer lista de compras
let opcion;
do {

    opcion = prompt('Bienvenidx a la tiendita de la esquina en linea! \nSeleccione la opción que desee realizar: \n1.Agregar producto.\n2.Eliminar producto.\n3.Mostrar lista de productos.\n4.Salir\n¿Que desea realizar?:');

    while (!Number.isInteger(Number(opcion))) {
        console.log('Ingrese una opcion valida.')
        opcion = prompt('Bienvenidx a la tiendita de la esquina en linea! \nSeleccione la opción que desee realizar: \n1.Agregar producto.\n2.Eliminar producto.\n3.Mostrar lista de productos.\n4.Salir\n¿Que desea realizar?:');
    }

    opcion = Number(opcion)

    switch (opcion) {
        case 1:
            {
                let producto = prompt('Ingrese el nombre del producto: ');
                agregarProducto(producto);
                break;
            }
        case 2:
            {
                if (listaDeCompras.size === 0) {
                    console.log('El carrito aun no tiene articulos.');
                    break;
                }
                let producto = prompt('Ingrese el nombre del producto que desea eliminar: ');
                eliminarProducto(producto);
                break;
            }
        case 3:
            mostrarLista();
            break;

        case 4:
            break;

        default:
            console.log('Debe ingresar un valor entre 1 y 4.')
            break;

    }

} while (opcion !== 4); */






