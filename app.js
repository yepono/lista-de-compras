// Importar funciones de array.js
import { agregarProducto, eliminarProducto, mostrarLista } from "./array.js";


// Hacer lista de compras
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

} while (opcion !== 4);