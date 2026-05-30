// ========================================
// ESTADO DEL CARRITO
// ========================================
function obtenerVarianteSeleccionada(
  productoId
){

  return window
    .variantesSeleccionadas?.[
      productoId
    ] || null;

}

let carrito =

  JSON.parse(
    localStorage.getItem(
      "carrito"
    )
  ) || [];

// ========================================
// UTILIDADES
// ========================================

function guardarCarrito() {

  localStorage.setItem(

    "carrito",

    JSON.stringify(carrito)

  );

}

function obtenerProducto(
  idProducto
) {

  return PRODUCTOS.find(

    producto =>
      producto.id === idProducto

  );

}

// ========================================
// REFRESCAR UI
// ========================================

function actualizarCarritoUI() {

  guardarCarrito();

  renderizarCarrito();

  actualizarContadorCarrito();

}

// ========================================
// AGREGAR PRODUCTO
// ========================================

function agregarAlCarrito(
  idProducto
) {

  const producto =
    obtenerProducto(
      idProducto
    );

  if (!producto) return;

  const itemExistente =
    carrito.find(

      item =>
        item.id === idProducto

    );

  // ========================================
  // PRODUCTO EXISTENTE
  // ========================================

  if (itemExistente) {

    if (

      itemExistente.cantidad <
      producto.stock

    ) {

      itemExistente.cantidad++;

    }

  }

  // ========================================
  // NUEVO PRODUCTO
  // ========================================

  else {

    carrito.push({

      id:
        producto.id,

      cantidad:
        1

    });

  }

  actualizarCarritoUI();

}

// ========================================
// AUMENTAR CANTIDAD
// ========================================

function aumentarCantidad(
  idProducto
) {

  const item =
    carrito.find(

      item =>
        item.id === idProducto

    );

  const producto =
    obtenerProducto(
      idProducto
    );

  if (

    !item ||
    !producto

  ) {

    return;

  }

  if (

    item.cantidad <
    producto.stock

  ) {

    item.cantidad++;

  }

  actualizarCarritoUI();

}

// ========================================
// DISMINUIR CANTIDAD
// ========================================

function disminuirCantidad(
  idProducto
) {

  const item =
    carrito.find(

      item =>
        item.id === idProducto

    );

  if (!item) return;

  if (

    item.cantidad > 1

  ) {

    item.cantidad--;

  }

  else {

    carrito =
      carrito.filter(

        item =>
          item.id !== idProducto

      );

  }

  actualizarCarritoUI();

}

// ========================================
// VACIAR CARRITO
// ========================================

function vaciarCarrito() {

  carrito = [];

  actualizarCarritoUI();

}

// ========================================
// RENDERIZAR CARRITO
// ========================================

function renderizarCarrito() {

  const lista =
    document.getElementById(
      "lista-carrito"
    );

  const totalContainer =
    document.getElementById(
      "total-carrito"
    );

  const mensajeVacio =
    document.getElementById(
      "carrito-vacio"
    );

  if (

    !lista ||
    !totalContainer ||
    !mensajeVacio

  ) {

    return;

  }

  lista.innerHTML = "";

  mensajeVacio.style.display =

    carrito.length === 0
      ? "block"
      : "none";

  let total = 0;

  carrito.forEach(item => {

    const producto =
      obtenerProducto(
        item.id
      );

    if (!producto) return;

    const subtotal =
  item.precio *
  item.cantidad;

    total += subtotal;

    const li =
      document.createElement(
        "li"
      );

    li.className =
      "item-carrito";

    li.innerHTML = `

      <img
        src="${producto.imagen}"
        alt="${producto.nombre}"
      >

      <div class="info-item">

        <h4>
  ${producto.nombre}
</h4>

${
  item.variante
  ? `
      <small>
        ${item.variante}
      </small>
    `
  : ""
}
        <p>
          ${CONFIG.catalogo.moneda}
         ${item.precio}
        </p>

        <div class="controles">

          <button
            onclick="disminuirCantidad('${producto.id}')"
          >
            -
          </button>

          <span>
            ${item.cantidad}
          </span>

          <button
            onclick="aumentarCantidad('${producto.id}')"
          >
            +
          </button>

        </div>

      </div>

    `;

    lista.appendChild(li);

  });

  totalContainer.textContent =

    `Total: ${CONFIG.catalogo.moneda}${total}`;

}

// ========================================
// CONTADOR + BARRA FLOTANTE
// ========================================

function actualizarContadorCarrito() {

  const contadorInferior =
    document.getElementById(
      "contador-bottom"
    );

  const barra =
    document.getElementById(
      "barra-flotante"
    );

  const barraCantidad =
    document.getElementById(
      "barra-cantidad"
    );

  const barraTotal =
    document.getElementById(
      "barra-total"
    );

  const totalCantidad =

    carrito.reduce(

      (acumulado, item) =>

        acumulado +
        item.cantidad,

      0

    );

  const totalPrecio =

    carrito.reduce(

      (
        acumulado,
        item
      ) => {

        const producto =
          obtenerProducto(
            item.id
          );

        if (!producto) {

          return acumulado;

        }

        return (

          acumulado +

          (
            producto.precio *
            item.cantidad
          )

        );

      },

      0

    );

  // ========================================
  // CONTADOR INFERIOR
  // ========================================

  if (contadorInferior) {

    contadorInferior.textContent =
      totalCantidad;

    contadorInferior.style.display =

      totalCantidad > 0
        ? "flex"
        : "none";

  }

  // ========================================
  // BARRA FLOTANTE
  // ========================================

  if (

    barra &&
    barraCantidad &&
    barraTotal

  ) {

    if (totalCantidad > 0) {

      barra.style.display =
        "flex";

      barraCantidad.textContent =

        `${totalCantidad} producto${totalCantidad > 1 ? "s" : ""} en el carrito`;

      barraTotal.textContent =

        `Total: ${CONFIG.catalogo.moneda}${totalPrecio}`;

    }

    else {

      barra.style.display =
        "none";

    }

  }

}
function agregarAlCarritoConVariante(
  idProducto
){

  const producto =
    obtenerProducto(idProducto);

  if(!producto) return;

  let variante = null;

  if(producto.variantes?.length){

    const seleccionada =
      document.querySelector(
        `input[name="variante-${idProducto}"]:checked`
      );

    const indice =
      Number(
        seleccionada?.value ?? 1
      );

    variante =
      producto.variantes[indice];

  }

  const itemExistente =
    carrito.find(item =>

      item.id === idProducto &&

      item.variante ===
      variante?.nombre

    );

  if(itemExistente){

    itemExistente.cantidad++;

  }else{

    carrito.push({

      id:idProducto,

      cantidad:1,

      variante:
        variante?.nombre || null,

      precio:
        variante?.precio ??
        producto.precio

    });

  }

  actualizarCarritoUI();

}
function agregarAlCarritoConVariante(
  idProducto
){

  const producto =
    obtenerProducto(
      idProducto
    );

  if(!producto) return;

  const variante =
    obtenerVarianteSeleccionada(
      idProducto
    );

  const precio =

    variante?.precio ??

    producto.precio;

  const nombreVariante =

    variante?.nombre ??

    "Mediano";

  const itemExistente =
    carrito.find(

      item =>

        item.id === idProducto &&

        item.variante ===
        nombreVariante

    );

  if(itemExistente){

    itemExistente.cantidad++;

  }

  else{

    carrito.push({

      id:idProducto,

      cantidad:1,

      variante:nombreVariante,

      precio

    });

  }

  actualizarCarritoUI();

}