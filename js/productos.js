// ========================================
// PRODUCTOS BASE
// ========================================
//
// Este archivo contiene:
//
// • Estructura principal del catálogo
// • IDs únicos de productos
// • Categorías base
// • Imágenes fallback
// • Datos iniciales de respaldo
//
// Google Sheets puede sobrescribir:
//
// • nombre
// • descripción
// • categoría
// • precio
// • stock
// • imagen
//
// ========================================

// ========================================
// CATÁLOGO BASE
// ========================================

const PRODUCTOS = [

  // ========================================
  // RAMOS
  // ========================================

  {
  id:"ramo-rosas-rojas",

  nombre:"Ramo de Rosas Rojas",

  categoria:"Ramos",

  imagen:"img/productos/ramo-rosas.jpg",

  descripcion:"12 rosas frescas con envoltorio premium",

  precio:28000,

  stock:10,

  variantes:[
  {
    nombre:"M",
    precio:18000
  },
  {
    nombre:"L",
    precio:28000
  },
  {
    nombre:"XL",
    precio:42000
  }
]
},

  {

    id: "ramo-primavera",

    nombre:
      "Ramo Primavera",

    categoria:
      "Ramos",

    imagen:
      "img/productos/ramo-primavera.jpg",

    descripcion:
      "Combinación de flores coloridas y follaje natural",

    precio:
      22000,

    stock:
      8

  },

  // ========================================
  // ARREGLOS
  // ========================================

  {

    id: "arreglo-elegante",

    nombre:
      "Arreglo Elegante",

    categoria:
      "Arreglos",

    imagen:
      "img/productos/arreglo-elegante.jpg",

    descripcion:
      "Flores seleccionadas en caja decorativa",

    precio:
      38000,

    stock:
      5

  },

  {

    id: "arreglo-romantico",

    nombre:
      "Arreglo Romántico",

    categoria:
      "Arreglos",

    imagen:
      "img/productos/arreglo-romantico.jpg",

    descripcion:
      "Rosas y flores premium para ocasiones especiales",

    precio:
      45000,

    stock:
      4

  },

  // ========================================
  // PLANTAS
  // ========================================

  {

    id: "orquidea-blanca",

    nombre:
      "Orquídea Blanca",

    categoria:
      "Plantas",

    imagen:
      "img/productos/orquidea.jpg",

    descripcion:
      "Maceta decorativa incluida",

    precio:
      32000,

    stock:
      6

  },

  {

    id: "suculenta-premium",

    nombre:
      "Suculenta Premium",

    categoria:
      "Plantas",

    imagen:
      "img/productos/suculenta.jpg",

    descripcion:
      "Ideal para decorar interiores",

    precio:
      12000,

    stock:
      12

  },

  // ========================================
  // REGALOS
  // ========================================

  {

    id: "caja-chocolates",

    nombre:
      "Caja de Chocolates",

    categoria:
      "Regalos",

    imagen:
      "img/productos/chocolates.jpg",

    descripcion:
      "Complemento ideal para cualquier arreglo floral",

    precio:
      9500,

    stock:
      15

  },

  {

    id: "oso-peluche",

    nombre:
      "Oso de Peluche",

    categoria:
      "Regalos",

    imagen:
      "img/productos/peluche.jpg",

    descripcion:
      "Peluche suave de tamaño mediano",

    precio:
      14000,

    stock:
      8

  }

];

// ========================================
// NOTA IMPORTANTE
// ========================================
//
// La función:
//
// obtenerProducto()
//
// Se mantiene actualmente en carrito.js.
//
// Más adelante será movida a un
// archivo utilitario compartido para
// evitar duplicaciones entre módulos.
//
// ========================================