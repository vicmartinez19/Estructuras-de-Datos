export const listaDeCompras = [];

// Normaliza el texto eliminando espacios extremos y convirtiendo a minusculas
const normalizar = (texto) => texto.trim().toLowerCase();

export const agregarProducto = (producto) => {
  // Validacion de elemento vacio o tipo incorrecto
  if (!producto || typeof producto !== 'string' || producto.trim() === '') {
    console.warn('[AVISO] Producto inválido. No se puede agregar un elemento vacío.');
    return false;
  }

  const productoLimpio = producto.trim();
  // Comprobacion estricta contra elementos existentes
  const existe = listaDeCompras.some((item) => normalizar(item) === normalizar(productoLimpio));

  if (existe) {
    console.warn(`[DUPLICADO] El producto "${productoLimpio}" ya se encuentra en la lista de compras.`);
    return false;
  }

  listaDeCompras.push(productoLimpio);
  console.log(`[AGREGADO] Producto añadido: "${productoLimpio}"`);
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