// ========================================
// CONFIGURACIÓN GLOBAL DE LA PLANTILLA
// ========================================
//
// Toda la personalización del catálogo
// debe realizarse desde este archivo.
//
// ========================================

const CONFIG = {

  // ========================================
  // NEGOCIO
  // ========================================

  negocio: {

    nombre:
      "Florería Primavera",

    subtitulo:
      "Arreglos florales y regalos",

    logo:
      "img/logo/logo.png",

    whatsapp:
      "5491138599611"

  },

  // ========================================
  // CONTACTO
  // ========================================

  contacto: {

    email:
      "contacto@floreriaprimavera.com",

    direccion:
      "Buenos Aires, Argentina",

    horario:
      "Lunes a sábado de 08:00 a 20:00 hs."

  },

  // ========================================
  // REDES SOCIALES
  // ========================================

  redes: {

    instagram:
      "",

    facebook:
      "",

    tiktok:
      "",

    youtube:
      "",

    sitioWeb:
      ""

  },

  // ========================================
  // IDENTIDAD VISUAL
  // ========================================

  colores: {

    principal:
      "#D979A2",

    secundario:
      "#D979A2",

    acento:
      "#F2C94C",

    fondo:
      "#FFF7FA",

    texto:
      "#5B3A47"

  },

  // ========================================
  // BANNERS
  // ========================================

  banners: [

    "img/banners/banner1.jpg",

    "img/banners/banner2.jpg",

    "img/banners/banner3.jpg"

  ],

  // ========================================
  // CATÁLOGO
  // ========================================

  catalogo: {

    moneda:
      "$",

    usarGoogleSheets:
      true,

    sheetDB:
      "https://sheetdb.io/api/v1/qsl7b2o23zlr0"

  },

  // ========================================
  // MÓDULOS VISUALES
  // ========================================

  secciones: {

    mostrarSlider:
      true,

    mostrarBeneficios:
      true,

    mostrarCategorias:
      true,

    mostrarFAQ:
      true,

    mostrarContacto:
      true

  },

  // ========================================
  // FUNCIONALIDADES
  // ========================================

  funciones: {

    buscador:
      true,

    carrito:
      true,

    whatsapp:
      true,

    sliderAutomatico:
      true

  },

  // ========================================
  // BENEFICIOS
  // ========================================

  beneficios: [

    {
      icono:
        "fa-solid fa-truck",

      titulo:
        "Entrega en el día",

      descripcion:
        "En zonas seleccionadas"
    },

    {
      icono:
        "fa-solid fa-seedling",

      titulo:
        "Flores frescas",

      descripcion:
        "Seleccionadas diariamente"
    },

    {
      icono:
        "fa-solid fa-heart",

      titulo:
        "Dedicatoria incluida",

      descripcion:
        "Personalizá tu regalo"
    },

    {
      icono:
        "fa-solid fa-gift",

      titulo:
        "Presentación premium",

      descripcion:
        "Ideal para sorprender"
    }

  ]

};