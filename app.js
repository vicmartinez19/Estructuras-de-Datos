import {
  agregarProducto,
  eliminarProducto,
  mostrarLista,
  buscarProducto,
  vaciarLista
} from './listaCompras.js';

const iniciarApp = () => {
  console.log('==============================================');
  console.log('   SISTEMA DE GESTION DE LISTA DE COMPRAS     ');
  console.log('==============================================\n');

  mostrarLista();

  console.log('--- 1. Agregando productos ---');
  agregarProducto('Leche descremada');
  agregarProducto('Huevos (docena)');
  agregarProducto('Pan integral');
  agregarProducto('Manzanas');
  agregarProducto('Café en grano');

  console.log('\n--- 2. Probando control de duplicados ---');
  agregarProducto('leche descremada');
  agregarProducto('Pan integral');

  mostrarLista();

  console.log('--- 3. Buscando productos ---');
  buscarProducto('Manzanas');
  buscarProducto('Queso parmesano');

  console.log('\n--- 4. Eliminando productos ---');
  eliminarProducto('Huevos (docena)');
  eliminarProducto('Queso parmesano');

  mostrarLista();

  console.log('--- 5. Vaciando lista ---');
  vaciarLista();
  mostrarLista();
};

iniciarApp();