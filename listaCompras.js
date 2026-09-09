
export const listaDeCompras = [];

const normalizar = (texto) => texto.trim().toLowerCase();

export const agregarProducto = (producto) => {
  if (!producto || typeof producto !== 'string' || producto.trim() === '') {
    console.warn('[AVISO] Producto inválido. No se puede agregar un elemento vacío.');
    return false;
  }

  const productoLimpio = producto.trim();
  const existe = listaDeCompras.some((item) => normalizar(item) === normalizar(productoLimpio));

  if (existe) {
    console.warn(`[DUPLICADO] El producto "${productoLimpio}" ya se encuentra en la lista de compras.`);
    return false;
  }

  listaDeCompras.push(productoLimpio);
  console.log(`[AGREGADO] Producto añadido: "${productoLimpio}"`);
  return true;
};

export const eliminarProducto = (producto) => {
  if (!producto || typeof producto !== 'string') return false;

  const productoLimpio = producto.trim();
  const indice = listaDeCompras.findIndex((item) => normalizar(item) === normalizar(productoLimpio));

  if (indice === -1) {
    console.warn(`[NO ENCONTRADO] No se pudo eliminar "${productoLimpio}" porque no está en la lista.`);
    return false;
  }

  const [eliminado] = listaDeCompras.splice(indice, 1);
  console.log(`[ELIMINADO] Producto eliminado exitosamente: "${eliminado}"`);
  return true;
};

export const mostrarLista = () => {
  console.log('\n========================================');
  console.log('         LISTA DE COMPRAS ACTUAL        ');
  console.log('========================================');

  if (listaDeCompras.length === 0) {
    console.log('La lista de compras está actualmente vacía.');
    console.log('========================================\n');
    return;
  }

  listaDeCompras.forEach((item, index) => {
    console.log(`  ${index + 1}. [ ] ${item}`);
  });

  console.log('----------------------------------------');
  console.log(`Total de artículos en la lista: ${listaDeCompras.length}`);
  console.log('========================================\n');
};