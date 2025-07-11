/* activities.js --------------------------------------------------------- */
/* 24 departamentos · 2 ciudades cada uno · 7 actividades c/u            */
/* puedes añadir/quitar ciudades o actividades sin tocar el resto del    */
/* código del front; solo mantén la estructura Departamento → Ciudad → [] */

export const ACTIVITIES = {
  /* ─────────────── Cusco ─────────────── */
  CUSCO: {
    'Cusco Ciudad': [
      { id:'cus1', label:'Walking tour histórico', price:40, },
      { id:'cus2', label:'Museo Inka',             price:35, },
      { id:'cus3', label:'Sacsayhuamán + Cristo',  price:55, },
      { id:'cus4', label:'Clase de cocina andina', price:70, },
      { id:'cus5', label:'Mercado de San Pedro',   price:20, },
      { id:'cus6', label:'Plaza Mayor de Cusco', price:60, },
      { id:'cus7', label:'Vinicunca',        price:45, },
      { id:'cus8', label:'Machu Picchu',        price:45, },
    ],
    'Quillabamba': [
      { id:'quil1', label:'Catarata 7 Tinajas',    price:50, },
      { id:'quil2', label:'Ruta café y cacao',     price:90, },
      { id:'quil3', label:'Piscinas Cocalmayo',    price:35, },
      { id:'quil4', label:'Trek Abra Málaga',      price:110,},
      { id:'quil5', label:'Rafting Urubamba',      price:95, },
      { id:'quil6', label:'Canopy forestal',       price:80, },
      { id:'quil7', label:'City tour Quillabamba', price:25, }
    ]
  },

  /* ─────────────── Amazonas ─────────────── */
  AMAZONAS: {
    'Chachapoyas Ciudad': [
      { id:'ama1', label:'Plaza & miradores',            price:30, },
      { id:'ama2', label:'Museo Leymebamba',             price:55, },
      { id:'ama3', label:'Cañón Huaylla Belén',          price:70, },
      { id:'ama4', label:'Taller de cerámica',           price:40, },
      { id:'ama5', label:'Mercado local gourmet',        price:25, },
      { id:'ama6', label:'Catarata Gocta full-day',      price:110,},
      { id:'ama7', label:'Gastronomía amazónica',        price:50, }
    ],
    'Fortaleza de Kuélap': [
      { id:'kua1', label:'Ingreso Kuélap',               price:80,},
      { id:'kua2', label:'Teleférico panorámico',        price:30,},
      { id:'kua3', label:'Sendero Torreón',              price:25,},
      { id:'kua4', label:'Observación colibríes',        price:35,},
      { id:'kua5', label:'Arqueología guiada',           price:60,},
      { id:'kua6', label:'Picnic campesino',             price:45,},
      { id:'kua7', label:'Rappel en cañón',              price:90,}
    ]
  },

  /* ─────────────── Ancash ─────────────── */
  ANCASH: {
    'Huaraz': [
      { id:'anc1', label:'Laguna 69 trekking',          price:120,},
      { id:'anc2', label:'Nevado Pastoruri',            price:110,},
      { id:'anc3', label:'Plaza & miradores',           price:20, },
      { id:'anc4', label:'Baños termales Monterrey',    price:25, },
      { id:'anc5', label:'Museo Arqueológico UNASAM',   price:30, },
      { id:'anc6', label:'Ruta cervezas artesanales',   price:45, },
      { id:'anc7', label:'Parapente Callejón de Huaylas',price:95,}
    ],
    'Chavín de Huántar': [
      { id:'cha1', label:'Ingreso complejo',            price:40, },
      { id:'cha2', label:'Túneles y lanzón',            price:35, },
      { id:'cha3', label:'Museo Nacional Chavín',       price:30, },
      { id:'cha4', label:'Sendero Wacheqsa',            price:55, },
      { id:'cha5', label:'Almuerzo andino',             price:25, },
      { id:'cha6', label:'Community homestay',          price:65, },
      { id:'cha7', label:'Taller quena & pinkullo',     price:40, }
    ]
  },

  /* ─────────────── Apurímac ─────────────── */
  APURIMAC: {
    'Abancay': [
      { id:'apu1', label:'Cañón Apurímac mirador',      price:35, },
      { id:'apu2', label:'Santuario Ampay hiking',      price:60, },
      { id:'apu3', label:'Museo Regional',              price:20, },
      { id:'apu4', label:'City tour histórico',         price:25, },
      { id:'apu5', label:'Mirador Arco Iris',           price:15, },
      { id:'apu6', label:'Gastronomía pachamanca',      price:45, },
      { id:'apu7', label:'Rafting río Pachachaca',      price:90, }
    ],
    'Choquequirao Trek': [
      { id:'cho1', label:'Trek 4D/3N guiado',           price:350,},
      { id:'cho2', label:'Cabalgata parcial',           price:180,},
      { id:'cho3', label:'Camping full equip',          price:60, },
      { id:'cho4', label:'Vista Panorámica Sunchupata', price:40, },
      { id:'cho5', label:'Avistamiento cóndores',       price:55, },
      { id:'cho6', label:'Cocina en ruta',              price:30, },
      { id:'cho7', label:'Fotografía arqueológica',     price:25, }
    ]
  },

  /* ─────────────── Arequipa ─────────────── */
  AREQUIPA: {
    'Arequipa Ciudad': [
      { id:'are1', label:'Free walking tour',           price:35, },
      { id:'are2', label:'Monasterio Santa Catalina',   price:45, },
      { id:'are3', label:'Ruta sillar & cantera',       price:55, },
      { id:'are4', label:'Miradores Carmen Alto',       price:20, },
      { id:'are5', label:'Museo Santuarios Andinos',    price:30, },
      { id:'are6', label:'Cata queso y rocoto',         price:40, },
      { id:'are7', label:'Tour bares con pisco sour',   price:50, }
    ],
    'Cañón del Colca': [
      { id:'col1', label:'Full-day miradores',          price:110,},
      { id:'col2', label:'Baños termales Chacapi',      price:35, },
      { id:'col3', label:'Avistamiento cóndores',       price:45, },
      { id:'col4', label:'Trekking Sangalle (2D/1N)',   price:160,},
      { id:'col5', label:'Cabalgata Yanque',            price:55, },
      { id:'col6', label:'Pueblo Coporaque vivencial',  price:50, },
      { id:'col7', label:'Zipline Colca',               price:90, }
    ]
  },

  /* ─────────────── Ayacucho ─────────────── */
  AYACUCHO: {
    'Ayacucho Ciudad': [
      { id:'aya1', label:'Ruta iglesias coloniales',    price:30, },
      { id:'aya2', label:'Museo de la Memoria',         price:25, },
      { id:'aya3', label:'Pampa de Ayacucho',           price:45, },
      { id:'aya4', label:'Taller artesanía Huamanga',   price:35, },
      { id:'aya5', label:'Gastronomía puca picante',    price:25, },
      { id:'aya6', label:'Festival Semana Santa',       price:50, },
      { id:'aya7', label:'Tour bares & folk',           price:40, }
    ],
    'Vilcashuamán': [
      { id:'vil1', label:'Templo del Sol',              price:35, },
      { id:'vil2', label:'Baños Incas vip',             price:20, },
      { id:'vil3', label:'Laguna Pumacocha kayak',      price:60, },
      { id:'vil4', label:'Trekking Intihuatana',        price:45, },
      { id:'vil5', label:'Picnic pachamanca',           price:25, },
      { id:'vil6', label:'Flora & fauna guiada',        price:30, },
      { id:'vil7', label:'Fotografía arqueológica',     price:25, }
    ]
  },

  /* ─────────────── Cajamarca ─────────────── */
  CAJAMARCA: {
    'Cajamarca Ciudad': [
      { id:'caj1', label:'Baños del Inca',              price:25, },
      { id:'caj2', label:'Cuarto del Rescate',          price:15, },
      { id:'caj3', label:'Mirador Santa Apollonia',     price:20, },
      { id:'caj4', label:'Granero de Ventanillas Otuzco',price:40, },
      { id:'caj5', label:'Festival Carnaval',           price:60, },
      { id:'caj6', label:'Ruta quesos & manjar',        price:35, },
      { id:'caj7', label:'Paseo en chiva nocturna',     price:30, }
    ],
    'Cumbemayo': [
      { id:'cum1', label:'Bosque de piedras',           price:35, },
      { id:'cum2', label:'Canal pre-inca',              price:25, },
      { id:'cum3', label:'Senderismo guiado',           price:30, },
      { id:'cum4', label:'Picnic tradicional',          price:20, },
      { id:'cum5', label:'Fotografía geológica',        price:25, },
      { id:'cum6', label:'Cabalgata campestre',         price:35, },
      { id:'cum7', label:'Taller cerámica',             price:40, }
    ]
  },

  /* ─────────────── Callao ─────────────── */
  CALLAO: {
    'Callao Monumental': [
      { id:'cal1', label:'Street-art & galerías',       price:25, },
      { id:'cal2', label:'Fortaleza Real Felipe',       price:40, },
      { id:'cal3', label:'Ruta gastronómica marina',    price:50, },
      { id:'cal4', label:'Kayak Islas Cavinzas',        price:85, },
      { id:'cal5', label:'Museo Submarino Abtao',       price:35, },
      { id:'cal6', label:'Tour cervecerías artesanales',price:45, },
      { id:'cal7', label:'Puesta de sol La Punta',      price:20, }
    ],
    'Islas Palomino': [
      { id:'pal1', label:'Nado con lobos marinos',      price:120,},
      { id:'pal2', label:'Avistamiento aves guaneras',  price:45, },
      { id:'pal3', label:'Paseo en yate',               price:60, },
      { id:'pal4', label:'Snacks ceviche a bordo',      price:25, },
      { id:'pal5', label:'Fotografía marina',           price:30, },
      { id:'pal6', label:'Tour histórico faro',         price:20, },
      { id:'pal7', label:'Pesca deportiva',             price:70, }
    ]
  },

  /* ─────────────── Huancavelica ─────────────── */
  HUANCAVELICA: {
    'Huancavelica Ciudad': [
      { id:'hvc1', label:'Iglesia Santa Ana + plaza',  price:15, },
      { id:'hvc2', label:'Baños termales San Cristóbal',price:25,},
      { id:'hvc3', label:'Torre Santa Barbara',        price:20, },
      { id:'hvc4', label:'Ruta cordero asado',         price:30, },
      { id:'hvc5', label:'Feria artesanal',            price:15, },
      { id:'hvc6', label:'Museo minero',               price:25, },
      { id:'hvc7', label:'Festival del pasacalle',     price:20, },
    ],
    'Laguna de Choclococha': [
      { id:'choq1',label:'Avistamiento aves',          price:35,  },
      { id:'choq2',label:'Pesca trucha',               price:40,  },
      { id:'choq3',label:'Paseo en bote',              price:30,  },
      { id:'choq4',label:'Trekking orillas',           price:25,  },
      { id:'choq5',label:'Camping nocturno',           price:50,  },
      { id:'choq6',label:'Fotografía paisajística',    price:20,  },
      { id:'choq7',label:'Observación cielo oscuro',   price:35,  }
    ]
  },

  /* ─────────────── Huánuco ─────────────── */
  HUANUCO: {
    'Huánuco Ciudad': [
      { id:'hua1', label:'Kotosh – Templo Manos Cruzadas',price:35, },
      { id:'hua2', label:'City tour colonial',            price:20,  },
      { id:'hua3', label:'Puente Calicanto',              price:15,  },
      { id:'hua4', label:'Museo regional',                price:25,  },
      { id:'hua5', label:'Festival de la Perrona',        price:30,  },
      { id:'hua6', label:'Ruta café Tingo María',         price:60,  },
      { id:'hua7', label:'Gastronomía picante ceviche',   price:25,  }
    ],
    'Tingo María': [
      { id:'tin1', label:'Cueva de Las Lechuzas',         price:40,  },
      { id:'tin2', label:'Mirador Bella Durmiente',       price:25,  },
      { id:'tin3', label:'Cascada Gloriapata',            price:35,  },
      { id:'tin4', label:'Rafting río Huallaga',          price:85,  },
      { id:'tin5', label:'Chocolate artesanal',           price:30,  },
      { id:'tin6', label:'Kayak Laguna Milagro',          price:50,  },
      { id:'tin7', label:'Bioparque zoológico',           price:25,  }
    ]
  },

  /* ─────────────── Ica ─────────────── */
  ICA: {
    'Ica & Huacachina': [
      { id:'ica1', label:'Sandboard & buggies',           price:90,   },
      { id:'ica2', label:'Paseo Huacachina barca',        price:15,   },
      { id:'ica3', label:'Bodega pisco tasting',          price:45,   },
      { id:'ica4', label:'Museo Regional Adolfo B',       price:20,   },
      { id:'ica5', label:'Ruta pecanas & chocotejas',     price:30,   },
      { id:'ica6', label:'City tour Ica',                 price:25,   },
      { id:'ica7', label:'Cena bajo estrellas',           price:60,   }
    ],
    'Paracas': [
      { id:'par1', label:'Islas Ballestas',               price:75,   },
      { id:'par2', label:'Reserva Paracas biking',        price:50,   },
      { id:'par3', label:'Sandboard dunas rojizas',       price:65,   },
      { id:'par4', label:'Kayak bahía',                   price:40,   },
      { id:'par5', label:'Tour gastronomía marina',       price:55,   },
      { id:'par6', label:'Avistamiento flamencos',        price:30,   },
      { id:'par7', label:'Museo Julio C. Tello',          price:20,   }
    ]
  },

  /* ─────────────── Junín ─────────────── */
  JUNIN: {
    'Huancayo': [
      { id:'jun1', label:'Parque de la Identidad',        price:15,   },
      { id:'jun2', label:'Feria artesanal domingo',       price:10,   },
      { id:'jun3', label:'Torre Torre trekking',          price:25,   },
      { id:'jun4', label:'Tren Macho—ruta corta',         price:45,   },
      { id:'jun5', label:'Gastronomía papa a la huancaína',price:20, },
      { id:'jun6', label:'Huaytapallana glaciar full-day',price:95,  },
      { id:'jun7', label:'Tour queso en Concepción',      price:30,   }
    ],
    'Valle del Mantaro': [
      { id:'man1', label:'Circuito artesanía Wari',       price:40,   },
      { id:'man2', label:'Iglesia de Santa Rosa Ocopa',   price:30,   },
      { id:'man3', label:'Ruta fresa & helados',          price:25,   },
      { id:'man4', label:'Laguna Paca paseo bote',        price:20,   },
      { id:'man5', label:'Parapente mayoría',            price:90,   },
      { id:'man6', label:'Picnic alpacas',                price:35,   },
      { id:'man7', label:'Eco-trek Huancas',              price:50,   }
    ]
  },

  /* ─────────────── La Libertad ─────────────── */
  LA_LIBERTAD: {
    'Trujillo Ciudad': [
      { id:'lib1', label:'Free walking tour',             price:35,  },
      { id:'lib2', label:'Museo Chan Chan',               price:45,  },
      { id:'lib3', label:'Huaca de la Luna',              price:50,  },
      { id:'lib4', label:'Baile marinera show',           price:30,  },
      { id:'lib5', label:'Ruta caballos de paso',         price:55,  },
      { id:'lib6', label:'Gastronomía shambar',           price:25,  },
      { id:'lib7', label:'Night pubs colonial',           price:40,  }
    ],
    'Huanchaco': [
      { id:'hua8', label:'Caballitos de totora',          price:25,  },
      { id:'hua9', label:'Clases de surf',                price:70,  },
      { id:'hua10',label:'Paseo muelle histórico',        price:15,  },
      { id:'hua11',label:'Ceviche tour',                  price:45,  },
      { id:'hua12',label:'Yoga sunrise beach',            price:30,  },
      { id:'hua13',label:'Festival de la primavera',      price:60,  },
      { id:'hua14',label:'Paddle board sunset',           price:50,  }
    ]
  },

  /* ─────────────── Lambayeque ─────────────── */
  LAMBAYEQUE: {
    'Chiclayo': [
      { id:'lam1', label:'Mercado Modelo + brujos',       price:20,  },
      { id:'lam2', label:'Museo Tumbas Reales',           price:45,  },
      { id:'lam3', label:'Gastronomía cabrito',           price:25,  },
      { id:'lam4', label:'Pimentel pesca artesanal',      price:30,  },
      { id:'lam5', label:'Tour King Kong San Roque',      price:15,  },
      { id:'lam6', label:'Paseo nocturno plazas',         price:20,  },
      { id:'lam7', label:'Ruta ceviche norteño',          price:35,  }
    ],
    'Túcume & Pirámides': [
      { id:'tuc1', label:'Ingreso complejo',              price:35,  },
      { id:'tuc2', label:'Museo de sitio',                price:30,  },
      { id:'tuc3', label:'Mirador cerro Purgatorio',      price:20,  },
      { id:'tuc4', label:'Cabalgata algarrobos',          price:45,  },
      { id:'tuc5', label:'Avistamiento aves',             price:30,  },
      { id:'tuc6', label:'Taller greda mochica',          price:40,  },
      { id:'tuc7', label:'Picnic algarrobina',            price:25,  }
    ]
  },

  /* ─────────────── Lima ─────────────── */
  LIMA: {
    'Lima Centro': [
      { id:'lim1', label:'City tour colonial',            price:40,  },
      { id:'lim2', label:'Catacumbas San Francisco',      price:30,  },
      { id:'lim3', label:'Circuito Agua nocturno',       price:35,  },
      { id:'lim4', label:'Museo Larco',                  price:45,  },
      { id:'lim5', label:'Gastronomía ceviche & pisco',  price:55,  },
      { id:'lim6', label:'Tour grafiti Barrios Altos',   price:25,  },
      { id:'lim7', label:'Bares históricos',             price:40,  }
    ],
    'Barranco & Miraflores': [
      { id:'barr1',label:'Bike coast-line',              price:50,  },
      { id:'barr2',label:'Puente de los Suspiros',       price:15,  },
      { id:'barr3',label:'Parapente Costa Verde',        price:95,  },
      { id:'barr4',label:'Museo MATE + MAC',             price:30,  },
      { id:'barr5',label:'Ruta cervecerías craft',       price:45,  },
      { id:'barr6',label:'Clases surf Waikiki',          price:70,  },
      { id:'barr7',label:'Night food tour',              price:60,  }
    ]
  },

  /* ─────────────── Loreto ─────────────── */
  LORETO: {
    'Iquitos': [
      { id:'iqt1', label:'City walk malecón',            price:20,  },
      { id:'iqt2', label:'Mercado Belén flotante',       price:25,  },
      { id:'iqt3', label:'Reserva Manatee',              price:35,  },
      { id:'iqt4', label:'Tour ron cachaça',             price:30,  },
      { id:'iqt5', label:'Gastronomía juane',            price:25,  },
      { id:'iqt6', label:'Mirador Quistococha',          price:30,  },
      { id:'iqt7', label:'Night bars Live cumbia',       price:40,  }
    ],
    'Pacaya Samiria': [
      { id:'pac1', label:'Crucero 3D/2N lujo',           price:550, },
      { id:'pac2', label:'Avistamiento delfines rosados',price:95,  },
      { id:'pac3', label:'Pesca pirañas',                price:50,  },
      { id:'pac4', label:'Caminata nocturna',            price:45,  },
      { id:'pac5', label:'Birdwatching amanecer',        price:60,  },
      { id:'pac6', label:'Visita comunidad ribereña',    price:40,  },
      { id:'pac7', label:'Fotografía fauna',             price:55,  }
    ]
  },

  /* ─────────────── Madre de Dios ─────────────── */
  MADRE_DE_DIOS: {
    'Puerto Maldonado': [
      { id:'mdd1', label:'Lago Sandoval full-day',       price:110, },
      { id:'mdd2', label:'Mercado local frutas exóticas',price:20,  },
      { id:'mdd3', label:'Mirador obelisco',             price:15,  },
      { id:'mdd4', label:'Tour choco-nibs',              price:30,  },
      { id:'mdd5', label:'Kayak río Madre de Dios',      price:50,  },
      { id:'mdd6', label:'Gastronomía paiche',           price:35,  },
      { id:'mdd7', label:'Night walk selva',             price:45,  }
    ],
    'Reserva Tambopata': [
      { id:'tam1', label:'Collpa de guacamayos',         price:120, },
      { id:'tam2', label:'Canopy walk-way',              price:60,  },
      { id:'tam3', label:'Caimaneo nocturno',            price:45,  },
      { id:'tam4', label:'Camping lodge 2N',             price:260, },
      { id:'tam5', label:'Pesca artesanal',              price:35,  },
      { id:'tam6', label:'Visita comunidad Ese Eja',     price:40,  },
      { id:'tam7', label:'Fotografía macro insectos',    price:30,  }
    ]
  },

  /* ─────────────── Moquegua ─────────────── */
  MOQUEGUA: {
    'Moquegua Ciudad': [
      { id:'moq1', label:'Plaza & campanario',           price:10,  },
      { id:'moq2', label:'Museo Contisuyo',              price:20,  },
      { id:'moq3', label:'Ruta piscos & vino',           price:45,  },
      { id:'moq4', label:'Mirador Cerro Baúl',           price:25,  },
      { id:'moq5', label:'Gastronomía camarones',        price:35,  },
      { id:'moq6', label:'Festival Virgen de la Candelaria',price:40, },
      { id:'moq7', label:'Taller charango',              price:30,  }
    ],
    'Ilo': [
      { id:'ilo1', label:'Malecón costero',              price:15,  },
      { id:'ilo2', label:'Playas Pozo de Lisas',         price:20,  },
      { id:'ilo3', label:'Museo Chiribaya',              price:25,  },
      { id:'ilo4', label:'Tour cevicherías',             price:40,  },
      { id:'ilo5', label:'Pesca embarcada',              price:55,  },
      { id:'ilo6', label:'Kayak Islotes Punta Coles',    price:75,  },
      { id:'ilo7', label:'Puesta de sol faro',           price:20,  }
    ]
  },

  /* ─────────────── Pasco ─────────────── */
  PASCO: {
    'Oxapampa': [
      { id:'oxa1', label:'Destilería aguardiente',       price:30,  },
      { id:'oxa2', label:'Parque Misión Austriaca',      price:25,  },
      { id:'oxa3', label:'Tunki trial café',             price:35,  },
      { id:'oxa4', label:'Reserva Yanachaga trek',       price:60,  },
      { id:'oxa5', label:'Rappel cascada El Tigre',      price:70,  },
      { id:'oxa6', label:'Gastronomía charcutería',      price:25,  },
      { id:'oxa7', label:'Feria chocolates',             price:20,  }
    ],
    'Cerro de Pasco': [
      { id:'pas1', label:'Mirador mina a cielo abierto', price:15,  },
      { id:'pas2', label:'Laguna Patarcocha bote',       price:20,  },
      { id:'pas3', label:'Santuario Huayllay',           price:35,  },
      { id:'pas4', label:'Museo geológico',              price:15,  },
      { id:'pas5', label:'Torneo pesca trucha',          price:25,  },
      { id:'pas6', label:'Ruta ponche & maca',           price:20,  },
      { id:'pas7', label:'Festival Altiplano',           price:35,  }
    ]
  },

  /* ─────────────── Piura ─────────────── */
  PIURA: {
    'Piura Ciudad': [
      { id:'piu1', label:'City tour catedral',           price:15,  },
      { id:'piu2', label:'Museo Grau',                   price:20,  },
      { id:'piu3', label:'Mercado Catacaos artesanía',   price:25,  },
      { id:'piu4', label:'Gastronomía seco de chabelo',  price:25,  },
      { id:'piu5', label:'Baile tondero show',           price:30,  },
      { id:'piu6', label:'Tour algarrobina',             price:20,  },
      { id:'piu7', label:'Ruta manglares San Pedro',     price:45,  }
    ],
    'Máncora': [
      { id:'manq1',label:'Clases de surf',               price:70,  },
      { id:'manq2',label:'Avistamiento tortugas',        price:40,  },
      { id:'manq3',label:'Paseo cuatrimotos desierto',   price:65,  },
      { id:'manq4',label:'Snorkel Pocitas',              price:50,  },
      { id:'manq5',label:'Night life tour',              price:45,  },
      { id:'manq6',label:'Pesca deportiva embarcada',    price:90,  },
      { id:'manq7',label:'Yoga sunrise beach',           price:30,  }
    ]
  },

  /* ─────────────── Puno ─────────────── */
  PUNO: {
    'Puno Ciudad': [
      { id:'pun1', label:'Mirador Kuntur Wasi',          price:20,  },
      { id:'pun2', label:'Museo Dreyer',                 price:15,  },
      { id:'pun3', label:'Fiesta Candelaria show',       price:40,  },
      { id:'pun4', label:'Mercado artesanal',            price:15,  },
      { id:'pun5', label:'Ruta de la Quinua',            price:25,  },
      { id:'pun6', label:'City tour Iglesias',           price:20,  },
      { id:'pun7', label:'Night pubs folklóricos',       price:35,  }
    ],
    'Lago Titicaca': [
      { id:'tit1', label:'Islas Uros ½-day',             price:45,  },
      { id:'tit2', label:'Isla Taquile full-day',        price:85,  },
      { id:'tit3', label:'Kayak Titicaca',               price:60,  },
      { id:'tit4', label:'Homestay Amantaní',            price:110, },
      { id:'tit5', label:'Observación estrellas',        price:30,  },
      { id:'tit6', label:'Pesca totora tradicional',     price:25,  },
      { id:'tit7', label:'Fotografía aves Andinas',      price:30,  }
    ]
  },

  /* ─────────────── San Martín ─────────────── */
  SAN_MARTIN: {
    'Tarapoto': [
      { id:'tar1', label:'Catarata Ahuashiyacu',         price:40,  },
      { id:'tar2', label:'Tour chacras cacao',           price:45,  },
      { id:'tar3', label:'Laguna Sauce full-day',        price:85,  },
      { id:'tar4', label:'Gastronomía juanes & tacacho', price:25,  },
      { id:'tar5', label:'Canopy selva alta',            price:60,  },
      { id:'tar6', label:'Night life pubs',              price:35,  },
      { id:'tar7', label:'Parapente Cordillera Escalera',price:95,  }
    ],
    'Moyobamba': [
      { id:'moy1', label:'Orquídeas jardín botánico',    price:25,  },
      { id:'moy2', label:'Baños termales San Mateo',     price:20,  },
      { id:'moy3', label:'Mirador Tahuishco',            price:15,  },
      { id:'moy4', label:'Ruta café Alto Mayo',          price:35,  },
      { id:'moy5', label:'Taller cerámica awajún',       price:30,  },
      { id:'moy6', label:'Avistamiento colibríes',       price:25,  },
      { id:'moy7', label:'Cascada Gera trekking',        price:40,  }
    ]
  },

  /* ─────────────── Tacna ─────────────── */
  TACNA: {
    'Tacna Ciudad': [
      { id:'tac1', label:'City tour catedral & arco',    price:15,  },
      { id:'tac2', label:'Museo de Sitio Alto de la Alianza',price:20, },
      { id:'tac3', label:'Baños termales Calientes',     price:25,  },
      { id:'tac4', label:'Ruta vinos y piscos',          price:45,  },
      { id:'tac5', label:'Gastronomía picante tacneño',  price:25,  },
      { id:'tac6', label:'Compras zona franca',          price:10,  },
      { id:'tac7', label:'Pubs pisco night',             price:30,  }
    ],
    'Valle Viejo': [
      { id:'valv1',label:'Petroglifos Miculla',          price:35,  },
      { id:'valv2',label:'Avistamiento cóndores',        price:45,  },
      { id:'valv3',label:'Camping quebrada',             price:40,  },
      { id:'valv4',label:'Picnic tuna & choclo',         price:25,  },
      { id:'valv5',label:'Ciclismo cross-country',       price:50,  },
      { id:'valv6',label:'Taller alfarería',             price:30,  },
      { id:'valv7',label:'Tour arqueológico pukaras',    price:30,  }
    ]
  },

  /* ─────────────── Tumbes ─────────────── */
  TUMBES: {
    'Tumbes Ciudad': [
      { id:'tum1', label:'Manglares Santuario Nacional', price:45,  },
      { id:'tum2', label:'Mirador Cristo Redentor',      price:20,  },
      { id:'tum3', label:'Gastronomía conchas negras',   price:35,  },
      { id:'tum4', label:'Paseo boulevard',             price:15,  },
      { id:'tum5', label:'Pesca deportiva',              price:55,  },
      { id:'tum6', label:'Ruta artesanía Punta Sal',     price:25,  },
      { id:'tum7', label:'Night beach party',            price:40,  }
    ],
    'Manglares de Tumbes': [
      { id:'mang1',label:'Kayak manglares',              price:60,  },
      { id:'mang2',label:'Avistamiento aves',            price:35,  },
      { id:'mang3',label:'Tour cangrejos & conchas',     price:45,  },
      { id:'mang4',label:'Isla Hueso Blanca picnic',     price:50,  },
      { id:'mang5',label:'Clases eco-pesca',             price:30,  },
      { id:'mang6',label:'Fotografía sunset',            price:20,  },
      { id:'mang7',label:'Snorkel arrecifes',            price:55,  }
    ]
  },

  /* ─────────────── Ucayali ─────────────── */
  UCAYALI: {
    'Pucallpa': [
      { id:'uca1', label:'Laguna Yarinacocha paseo',     price:30,  },
      { id:'uca2', label:'Centro etnobotánico',          price:25,  },
      { id:'uca3', label:'Gastronomía inchicapi',        price:20,  },
      { id:'uca4', label:'Mercado de artesanía shipibo', price:15,  },
      { id:'uca5', label:'Tour graffiti amazónico',      price:25,  },
      { id:'uca6', label:'Mirador La Hoyada',            price:20,  },
      { id:'uca7', label:'Night boating',                price:35,  }
    ],
    'Reserva El Sira': [
      { id:'sira1',label:'Trekking selva alta',          price:65,  },
      { id:'sira2',label:'Avistamiento guacamayos',      price:45,  },
      { id:'sira3',label:'Camping comunidad nativa',     price:55,  },
      { id:'sira4',label:'Pesca caimanes',               price:40,  },
      { id:'sira5',label:'Cascada Velo de la Novia',     price:35,  },
      { id:'sira6',label:'Taller tintes naturales',      price:30,  },
      { id:'sira7',label:'Fotografía macro flora',       price:25,  }
    ]
  }
};
