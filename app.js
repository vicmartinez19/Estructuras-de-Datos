import { agregarProducto, mostrarLista } from './listaCompras.js';

console.log('--- 1. Agregando productos ---');
agregarProducto('Leche descremada');
agregarProducto('Huevos');

console.log('\n--- 2. Probando duplicados ---');
agregarProducto('leche descremada'); // Debe avisar duplicado
agregarProducto('   Huevos   ');     // Debe avisar duplicado

mostrarLista();