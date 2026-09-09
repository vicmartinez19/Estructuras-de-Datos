
export const listaDeCompras = [];

export const agregarProducto = (producto) => {
  listaDeCompras.push(producto);
  console.log(`[AGREGADO] Producto añadido: "${producto}"`);
  return true;
};

export const mostrarLista = () => {
  console.log('\n========================================');
  console.log('         LISTA DE COMPRAS ACTUAL        ');
  console.log('========================================');

  if (listaDeCompras.length === 0) {
    console.log('La lista de compras está actualmente vacía.');
    return;
  }

  listaDeCompras.forEach((item, index) => {
    console.log(`  ${index + 1}. ${item}`);
  });
  console.log('========================================\n');
};