import { agregarProducto, eliminarProducto, mostrarLista } from './listaCompras.js';

agregarProducto('Leche descremada');
agregarProducto('Huevos (docena)');
agregarProducto('Pan integral');

mostrarLista();

console.log('--- Probando eliminaciones ---');
eliminarProducto('Huevos (docena)');
eliminarProducto('Queso parmesano'); // Inexistente

mostrarLista();