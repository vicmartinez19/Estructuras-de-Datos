import { listaDeCompras, agregarProducto, mostrarLista } from './listaCompras.js';

console.log('--- Iniciando Lista de Compras ---');
mostrarLista();

agregarProducto('Leche');
agregarProducto('Pan');
agregarProducto('Huevos');

mostrarLista();