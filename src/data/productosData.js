// src/data/productosData.js

// CATEGORIAS
import paltaseguridad from '../assets/images/paltaseguridad.jpg';
import pseguridad from '../assets/images/pseguridad.jpg';
import pindicativo from '../assets/images/pindicativo.jpg';
import kitespecializado from '../assets/images/kitespecializado.jpg';
import bag from '../assets/images/bag.jpg';
import pespecial from '../assets/images/pespecial.jpg';

// PRECINTO ALTA SEGURIDAD IMAGENES
import altaseguridad from '../assets/images/altaseguridad.jpg';
import zeusblanco from '../assets/images/zeusblanco.jpg';
import zeus from '../assets/images/zeus.jpg';
import securelock4 from '../assets/images/securelock4.jpg';
import hercules from '../assets/images/hercules.jpg';
import bootleseal from '../assets/images/bootleseal.jpg';

// PRECINTO ALTA SEGURIDAD IMAGENES (FONDO BLANCO DETALLE)
import zeus_blanco from '../assets/images/zeus_blanco.jpg';
import zeusblanco_blanco from '../assets/images/zeusblanco_blanco.jpg';
import hercules_blanco from '../assets/images/hercules_blanco.jpg';
import securelock4_blanco from '../assets/images/securelock4_blanco.jpg';
import bootleseal_blanco from '../assets/images/bootleseal_blanco.jpg';

// PRECINTOS SEGURIDAD IMAGENES
import securelock23 from '../assets/images/securelock23.jpg';
import secureperno from '../assets/images/securelockperno.jpg';
import securelockABS from '../assets/images/securelockABS.jpg';

// PRECINTOS SEGURIDAD IMAGENES (FONDO BLANCO DETALLE)
import securelock23_blanco from '../assets/images/securelock23_blanco.jpg';
import secureperno_blanco from '../assets/images/securelockperno_blanco.jpg';
import securelockABS_blanco from '../assets/images/securelockABS_blanco.jpg';

// PRECINTO INDICATIVO IMAGENES
import anguilajr from '../assets/images/anguilajr.jpg';
import alligatorextintor from '../assets/images/alligatorextintor.jpg';
import alligator12 from '../assets/images/alligator12.jpg';
import anguilajrn12n from '../assets/images/anguilajrn12n.jpg';
import checkseal from '../assets/images/checkseal.jpg';
import cobra1n from '../assets/images/cobra1n.jpg';
import coladeraton12 from '../assets/images/coladeraton12.jpg';
import coladeraton1n from '../assets/images/coladeraton1n.jpg';
import dualstrap123 from '../assets/images/dualstrap123.jpg';
import excel12 from '../assets/images/excel12.jpg';
import hardseal from '../assets/images/hardseal.jpg';
import leonv2 from '../assets/images/leonv2.jpg';
import leon from '../assets/images/leon.jpg';
import orca from '../assets/images/orca.jpg';
import osiris12 from '../assets/images/osiris12.jpg';
import atlantis from '../assets/images/atlantis.jpg';
import smoothsealjrn1 from '../assets/images/smoothsealjrn1.jpg';
import superalligator12 from '../assets/images/superalligator12.jpg';
import quatriseal from '../assets/images/quatriseal.jpg';
import titan from '../assets/images/titan.jpg';
import triseal123 from '../assets/images/triseal123.jpg';
import tribelt from '../assets/images/tribelt.jpg';
import metalseal from '../assets/images/metalseal.jpg';

// PRECINTO INDICATIVO IMAGENES (FONDO BLANCO DETALLE)
import anguilajr_blanco from '../assets/images/anguilajr_blanco.jpg';
import alligatorextintor_blanco from '../assets/images/alligatorextintor_blanco.jpg';
import alligator12_blanco from '../assets/images/alligator12_blanco.jpg';
import anguilajrn12n_blanco from '../assets/images/anguilajrn12n_blanco.jpg';
import checkseal_blanco from '../assets/images/checkseal_blanco.jpg';
import cobra1n_blanco from '../assets/images/cobra1n_blanco.jpg';
import coladeraton12_blanco from '../assets/images/coladeraton12_blanco.jpg';
import coladeraton1n_blanco from '../assets/images/coladeraton1n_blanco.jpg';
import dualstrap123_blanco from '../assets/images/dualstrap123_blanco.jpg';
import excel12_blanco from '../assets/images/excel12_blanco.jpg';
import hardseal_blanco from '../assets/images/hardseal_blanco.jpg';
import leonv2_blanco from '../assets/images/leonv2_blanco.jpg';
import leon_blanco from '../assets/images/leon_blanco.jpg';
import orca_blanco from '../assets/images/orca_blanco.jpg';
import osiris12_blanco from '../assets/images/osiris12_blanco.jpg';
import atlantis_blanco from '../assets/images/atlantis_blanco.jpg';
import smoothsealjrn1_blanco from '../assets/images/smoothsealjrn1_blanco.jpg';
import superalligator12_blanco from '../assets/images/superalligator12_blanco.jpg';
import quatriseal_blanco from '../assets/images/quatriseal_blanco.jpg';
import titan_blanco from '../assets/images/titan_blanco.jpg';
import triseal123_blanco from '../assets/images/triseal123_blanco.jpg';
import tribelt_blanco from '../assets/images/tribelt_blanco.jpg';
import metalseal_blanco from '../assets/images/metalseal_blanco.jpg';

// PRECINTOS ESPECIALES IMAGENES
import forza from '../assets/images/forza.jpg';
import twistlock from '../assets/images/twistlock.jpg';
import ultraseal from '../assets/images/ultraseal.jpg';

// PRECINTOS ESPECIALES IMAGENES (FONDO BLANCO DETALLE)
import forza_blanco from '../assets/images/forza_blanco.jpg';
import twistlock_blanco from '../assets/images/twistlock_blanco.jpg';
import ultraseal_blanco from '../assets/images/ultraseal_blanco.jpg';

// SEGURIDAD ELECTRONICA (CANDADOS ELECTRONICOS / RFID)
import candadogeneral from '../assets/images/candados-electronicos.jpg';
import granColoso from '../assets/images/grancoloso.jpg';
import escorpionelectronico from '../assets/images/escorpionelectronico.jpg';
import granColoso_blanco from '../assets/images/grancoloso_blanco.jpg';
import escorpionelectronico_blanco from '../assets/images/escorpionelectronico_blanco.jpg';
import rfid from '../assets/images/lector-rfid.jpg';
import lectorRFID_blanco from '../assets/images/lectorRFID_blanco.jpg';

export const baseDeDatosCategorias = {
  'alta-seguridad': {
    titulo: 'Precintos de Alta Seguridad',
    productos: [
      { 
        id: 1, 
        title: 'ZEUS', 
        category: 'Precinto de Alta Seguridad', 
        img: zeus, 
        imgBlanco: zeus_blanco,
        description:'Precinto Aduanero tipo botella. Es utilizado en contenedores. Cumple con la Norma PE.00.08 de la SUNAT, Norma ISO 17712 y la Norma INACAL. Otorga máxima seguridad a sus bienes y valores.',
        material:'TAMBOR: Acero zincado, forrado con policarbonato.\nPIN: Acero zincado, forrado con policarbonato.',
        grabado:'Marcación Sistema láser / Logotipo o nombre personalizado / Numeración, código QR y de barras / Impresión UV.',
        propiedades:'Resistencia a la tracción: 1795.72 Kg',
        uso:'Containers / Vagones ferroviarios / Camiones / Furgonetas, entre otros.',   
        path: '/subproductos/prodetalles/1' 
      },
      { 
        id: 2, 
        title: 'ZEUS ENCAPSULADO', 
        category: 'Precinto de Alta Seguridad', 
        img: zeusblanco, 
        imgBlanco: zeusblanco_blanco,
        description:'Precinto rígido tipo botella para contenedores de alta seguridad, diseñado para proteger bienes y valores durante el transporte de carga. Cumple con la Norma ISO 17712 y los requisitos establecidos por INACAL.',
        material:'TAMBOR: Acero zincado, forrado con policarbonato.\nPIN: Acero zincado, forrado con policarbonato.\nCAPSULA: Policarbonato transparente.',
        grabado:'Marcación en sistema láser, logotipo o nombre personalizado, numeración correlativa, código QR, código de barras e impresión UV.',
        propiedades:'Resistencia a la tracción: 1719.24 Kg',
        uso:'Containers / Vagones ferroviarios / Camiones / Furgonetas, entre otros.',   
        path: '/subproductos/prodetalles/2' 
      },
      { 
        id: 3, 
        title: 'HÉRCULES', 
        category: 'Precinto de Alta Seguridad', 
        img: hercules, 
        imgBlanco: hercules_blanco,
        description:'Precinto aduanero metálico ajustable, diseñado para aplicaciones especiales por el mecanismo de seguridad que brinda a sus valores o productos.',
        material:'CUERPO: Aluminio (Inoxidable).\nCABLE: Acero Inoxidable.\nCAPSULA: Policarbonato.',
        grabado:'Marcación en sistema láser, logotipo o nombre personalizado, numeración correlativa, código QR, código de barras e impresión UV.',
        propiedades:'Resistencia a la tracción: 1644 Kg',
        uso:'Contenedores, furgonetas, puertas de almacenes, tolderas de camiones, entre otros.',       
        path: '/subproductos/prodetalles/3' 
      },
      { 
        id: 4, 
        title: 'SECURE LOCK lV', 
        category: 'Precinto de Alta Seguridad', 
        img: securelock4, 
        imgBlanco: securelock4_blanco,
        description:'Precinto aduanero metálico ajustable, diseñado para brindar protección y control de las mercancías durante su traslado.',
        material:'CUERPO: Aluminio (Inoxidable).\nCABLE: Acero Inoxidable.',
        grabado:'Marcación en sistema láser, logotipo o nombre personalizado, numeración, código de barras e impresión UV.',
        propiedades:'Resistencia a la tracción:\nSECURE LOCK IV: 1416.39 Kg',
        uso:'Contenedores, furgonetas, puertas de almacenes, tolderas de camiones y otras unidades.', 
        path: '/subproductos/prodetalles/4' 
      },
      { 
        id: 5, 
        title: 'BOOTLE SEAL', 
        category: 'Precinto de Alta Seguridad', 
        img: bootleseal, 
        imgBlanco: bootleseal_blanco,
        description:'Precinto rígido tipo botella de alta seguridad, diseñado para brindar protección y control durante el transporte de mercancías.',
        material:'TAMBOR: Acero zincado, forrado con ABS.\nPIN: Acero zincado, forrado con ABS.',
        grabado:'Marcación en sistema láser, siglas personalizadas, numeración correlativa e impresión UV.',
        propiedades:'Resistencia a la tracción: 1719.24 Kg',
        uso:'Containers / Vagones ferroviarios / Camiones / Furgonetas, entre otros.',    
        path: '/subproductos/prodetalles/5' 
      }
    ]
  },

  'seguridad': {
    titulo: 'Precintos de Seguridad',
    productos: [
      {
        id: 6,
        title: 'SECURE LOCK ll-lll',
        category: 'Precinto de Seguridad',
        img: securelock23,
        imgBlanco: securelock23_blanco,
        description: 'Precinto metálico ajustable diseñado para aplicaciones especiales, gracias a su mecanismo de cierre que contribuye a mantener la integridad de los puntos asegurados.',
        material: 'CUERPO: Aluminio (Inoxidable).\nCABLE: Acero Inoxidable.',
        grabado: 'Marcación a sistema láser, logotipo o nombre personalizado, numeración, código de barras e impresión UV.',
        propiedades: 'Resistencia a la tracción:\nSECURE LOCK I : 577.16 Kg\nSECURE LOCK II : 727.06 Kg\nSECURE LOCK III : 369.14 Kg',
        uso: 'Contenedores (Containers), furgonetas, puertas de almacenes, tolderas de camiones, cisternas, entre otros.',
        path: '/subproductos/prodetalles/6'
      },
      { 
        id: 7, 
        title: 'SECURE LOCK C-PERNO', 
        category: 'Precinto de Seguridad', 
        img: secureperno, 
        imgBlanco: secureperno_blanco,
        description:'Precinto ajustable diseñado para aplicaciones especiales, con un sistema de doble seguridad.',
        material:'CUERPO:Aluminio (Inoxidable).\nCABLE: Acero Inoxidable.',
        grabado:'Marcación a sistema láser, logotipo o nombre personalizado, numeración, código de barras e impresión UV.',
        propiedades:'Resistencia a la tracción:\nSECURE LOCK I C/PERNO: 736.23 Kg',
        uso:'Contenedores (Containers), furgonetas, puertas de almacenes, tolderas de camiones, cisternas, entre otros.',
        path: '/subproductos/prodetalles/7' 
      },
      { 
        id: 8, 
        title: 'SECURE LOCK lll ABS', 
        category: 'Precinto de Seguridad', 
        img: securelockABS, 
        imgBlanco: securelockABS_blanco,
        description:'Precinto ajustable diseñado para aplicaciones especiales, con un mecanismo de seguridad que contribuye a preservar la integridad.',
        material:'CUERPO:Aluminio (Inoxidable).\nCABLE: Acero Inoxidable.',
        grabado:'Marcación a sistema láser, logotipo o nombre personalizado, numeración, código de barras e impresión UV.',
        propiedades:'Resistencia a la tracción:\nSECURE LOCK III ABS: 274.3 Kg',
        uso:'Contenedores (Containers), furgonetas, puertas de almacenes, tolderas de camiones, cisternas, entre otros.',
        path: '/subproductos/prodetalles/8' 
      }
    ]
  },

  'indicativos': {
    titulo: 'Precintos Indicativos',
    productos: [
      { 
        id: 9, 
        title: 'ANGUILA JR-ll', 
        category: 'Precinto Indicativo', 
        img: anguilajr, 
        imgBlanco: anguilajr_blanco,
        description:'Precinto ajustable con cierre e inserto metálico interno, diseñado para reforzar la seguridad y confiabilidad del precintado.',
        material:'CUERPO: Polipropileno.\nTRABA: Acero Inoxidable.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración, código QR y de barras / Impresión UV.',
        propiedades:'Resistencia a la tracción:\nANGUILA JR: 45 Kg\nANGUILA II: 50 Kg',
        uso:'Tapas de cisternas, transporte de combustible, transporte de insumos a granel, vagones de carga, entre otros.',
        path: '/subproductos/prodetalles/9' 
      },
      { 
        id: 10, 
        title: 'ALLIGATOR-ll-EXTINTOR', 
        category: 'Precinto Indicativo', 
        img: alligatorextintor, 
        imgBlanco: alligatorextintor_blanco,
        description:'Precinto plástico ajustable diseñado para brindar seguridad y control, ideal para extintores.',
        material:'CUERPO: Polietileno, auto extinguible.',
        grabado:'Logotipo o nombre personalizado.',
        propiedades:'Resistencia a la tracción:\nALLIGATOR-II EXTINTOR: 6 Kgs.',
        uso:'Extintores, entre otros.',
        path: '/subproductos/prodetalles/10' 
      },
      { 
        id: 11, 
        title: 'ALLIGATOR l-ll', 
        category: 'Precinto Indicativo', 
        img: alligator12, 
        imgBlanco: alligator12_blanco,
        description:'Precinto plástico ajustable de alta resistencia, diseñado para brindar un alto nivel de seguridad.',
        material:'CUERPO:\nALLIGATOR I: Polipropileno\nALLIGATOR II: Nylon',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración correlativa.',
        propiedades:'Resistencia a la tracción:\nALLIGATOR I: 30 Kgs\nALLIGATOR II: 30 Kgs',
        uso:'Bolsas de valores, Cajeros automáticos, Courrier, Dispensadores, Gabinetes, Casinos, Tanques, entre otros.',
        path: '/subproductos/prodetalles/11' 
      },
      { 
        id: 12, 
        title: 'ANGUILA JR N-l-llN', 
        category: 'Precinto Indicativo', 
        img: anguilajrn12n, 
        imgBlanco: anguilajrn12n_blanco,
        description:'Precinto ajustable con cierre e inserto metálico interno, diseñado para reforzar la seguridad.',
        material:'CUERPO: Polipropileno.\nTRABA: Acero Inoxidable.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración.',
        propiedades:'Resistencia a la tracción:\nANGUILA JR N: 39 Kg\nANGUILA I N: 46 Kg\nANGUILA II N: 42 Kg',
        uso:'Tapas de cisternas, transporte de combustible, transporte de insumos a granel, entre otros.',
        path: '/subproductos/prodetalles/12' 
      },
      { 
        id: 13, 
        title: 'CHECK SEAL', 
        category: 'Precinto Indicativo', 
        img: checkseal, 
        imgBlanco: checkseal_blanco,
        description:'Precinto plástico fijo con sistema de triple traba, diseñado para brindar un alto nivel de seguridad.',
        material:'CUERPO: Polipropileno.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración.',
        propiedades:'Resistencia a la tracción:\nCHECK SEAL: 45.89 Kgs.',
        uso:'Todo tipo de camiones, contenedores, vagones, transporte aéreo y marítimo, compuertas, entre otros.',
        path: '/subproductos/prodetalles/13' 
      },
      { 
        id: 14, 
        title: 'COBRA l-N', 
        category: 'Precinto Indicativo', 
        img: cobra1n, 
        imgBlanco: cobra1n_blanco,
        description:'Precinto plástico ajustable de fácil y suave aplicación, diseñado para adaptarse a diversas necesidades.',
        material:'CUERPO: Polipropileno.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración.',
        propiedades:'Resistencia a la tracción:\nCOBRA I-N: 15 Kgs',
        uso:'Tanques de combustible y aceite, cartucheras, cajeros automáticos, dispensadores, cajas, entre otros.',
        path: '/subproductos/prodetalles/14' 
      },
      { 
        id: 15, 
        title: 'COLA DE RATON l-ll', 
        category: 'Precinto Indicativo', 
        img: coladeraton12, 
        imgBlanco: coladeraton12_blanco,
        description:'Precinto con una traba de acero inoxidable, protegido mediante un sellado hermético.',
        material:'CUERPO: Polipropileno.\nINSERTO: Acero Inoxidable.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración correlativa.',
        propiedades:'Resistencia a la tracción:\nCOLA DE RATÓN I: 13 Kg\nCOLA DE RATÓN II: 14 Kg',
        uso:'Tanques de combustible y aceite, cartucheras, cajeros automáticos, dispensadores, cajas, entre otros.',
        path: '/subproductos/prodetalles/15' 
      },
      { 
        id: 16, 
        title: 'DUAL STRIP l-ll-lll', 
        category: 'Precinto Indicativo', 
        img: dualstrap123, 
        imgBlanco: dualstrap123_blanco,
        description:'Precinto con sello de ajuste de longitud variable, equipado con dos mecanismos de cierre de acero.',
        material:'CUERPO: Polipropileno.\nTRABA: Acero Inoxidable.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración.',
        propiedades:'Resistencia a la tracción:\nDual Strip I : 32 Kgs\nDual Strip II-III : 40 Kgs',
        uso:'Bolsas postales, bolsas de dinero, tanques de combustible, transporte de minerales, entre otros.',
        path: '/subproductos/prodetalles/16' 
      },
      { 
        id: 17, 
        title: 'EXCEL l-ll', 
        category: 'Precinto Indicativo', 
        img: excel12, 
        imgBlanco: excel12_blanco,
        description:'Precinto diseñado para brindar protección y control de la mercadería, equipado con una flecha de doble ancla.',
        material:'CUERPO: Polipropileno / Policarbonato.\nFLECHA: Polipropileno / Policarbonato.\nCABLE: Acero con recubrimiento plástico.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración.',
        propiedades:'Resistencia a la tracción:\nEXCEL I: 31.61 Kg\nEXCEL II: 40.75 Kg',
        uso:'Medidores de agua y luz, alcancías, cilindros, máquinas registradoras, válvulas, entre otros.',
        path: '/subproductos/prodetalles/17' 
      },
      { 
        id: 18, 
        title: 'HARD SEAL',
        category: 'Precinto Indicativo',
        img: hardseal, 
        imgBlanco: hardseal_blanco,
        description:'Precinto plástico ajustable con sistema de traba hermética, diseñado para brindar un cierre seguro.',
        material:'CUERPO: Polipropileno.\nTRABA: Polipropileno.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración.',
        propiedades:'Resistencia a la tracción:\nHARD SEAL: 25 Kgs.',
        uso:'Armarios, Equipajes, Válvulas, Medidores, Puertas, casilleros, entre otros.',
        path: '/subproductos/prodetalles/18' 
      },
      { 
        id: 19, 
        title: 'LEÓN V.2', 
        category: 'Precinto Indicativo', 
        img: leonv2, 
        imgBlanco: leonv2_blanco,
        description:'Precinto plástico ajustable con doble traba metálica de entrada y salida.',
        material:'CUERPO: Polipropileno.\nTRABA: Metálica doble.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración correlativa.',
        propiedades:'Resistencia a la tracción:\nLEÓN V.2: 64.24 Kg',
        uso:'Camiones cisternas, transporte de cemento, sacos, valijas, bolsas de valores, entre otros.',
        path: '/subproductos/prodetalles/19' 
      },
      { 
        id: 20, 
        title: 'LEÓN', 
        category: 'Precinto Indicativo', 
        img: leon, 
        imgBlanco: leon_blanco,
        description:'Precinto plástico ajustable con doble traba metálica de entrada y salida.',
        material:'CUERPO: Polipropileno.\nTRABA: Metálica doble.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración correlativa.',
        propiedades:'Resistencia a la tracción:\nLEÓN: 48.95 Kg',
        uso:'Camiones cisternas, transporte de cemento, sacos, valijas, bolsas de valores, entre otros.',
        path: '/subproductos/prodetalles/20' 
      },
      { 
        id: 21, 
        title: 'METAL SEAL', 
        category: 'Precinto Indicativo', 
        img: metalseal, 
        imgBlanco: metalseal_blanco,
        description:'Cuenta con una cubierta de polipropileno que encapsula y protege la caja de seguridad metálica.',
        material:'COBERTOR DE TRABA: Polipropileno\nCORREA: Hojalata',
        grabado:'Marcación en sistema láser, logotipo o nombre personalizado, numeración correlativa.',
        propiedades:'Resistencia a la tracción:\nMETAL SEAL: 85 Kgs',
        uso:'Todo tipo de camiones, contenedores, vagones, transporte de minerales, almacenes, entre otros.',
        path: '/subproductos/prodetalles/21' 
      },
      { 
        id: 22, 
        title: 'ORCA', 
        category: 'Precinto Indicativo', 
        img: orca,
        imgBlanco: orca_blanco,
        description:'Precinto con doble traba metálica de entrada y salida, diseñado con un cuerpo cilíndrico.',
        material:'CUERPO: Polipropileno.\nTAPA: Polipropileno.\nTRABA: Metálico.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración correlativa.',
        propiedades:'Resistencia a la tracción:\nORCA: 34.67 Kg',
        uso:'Todo tipo de camiones, cisternas de combustibles, sacos, valijas, entre otros.', 
        path: '/subproductos/prodetalles/22' 
      },
      { 
        id: 23, 
        title: 'OSIRIS l-ll', 
        category: 'Precinto Indicativo', 
        img: osiris12, 
        imgBlanco: osiris12_blanco,
        description:'Precinto de plástico con apertura fácil, equipado con una traba de seguridad de acero inoxidable.',
        material:'CUERPO: Polipropileno.\nINSERTO: Acero Inoxidable.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración.',
        propiedades:'Resistencia a la tracción:\nOSIRIS I: 42 Kg\nOSIRIS II: 32Kg',
        uso:'Camiones, cisternas, válvulas, puertas de contenedores, bolsas de valores, almacenes, entre otros.',
        path: '/subproductos/prodetalles/23' 
      },
      { 
        id: 24, 
        title: 'ATLANTIS', 
        category: 'Precinto Indicativo', 
        img: atlantis, 
        imgBlanco: atlantis_blanco,
        description:'Precinto plástico ajustable con doble traba metálica y sistema de cierre seguro.',
        material:'CUERPO: Polipropileno.\nTAPA: Polipropileno.\nTRABA: Metálica.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración.',
        propiedades:'Resistencia a la tracción:\nATLANTIS: 35.69 Kgs',
        uso:'Containers, Furgonetas, Puertas de Almacenes, Tolderas de camiones, Cisternas, entre otros.',
        path: '/subproductos/prodetalles/24' 
      },
      { 
        id: 25, 
        title: 'SMOOTH SEAL JR N-l', 
        category: 'Precinto Indicativo', 
        img: smoothsealjrn1, 
        imgBlanco: smoothsealjrn1_blanco,
        description:'Precinto plástico ajustable de cierre suave y rápido, equipado con una traba metálica.',
        material:'CUERPO: Polipropileno.\nINSERTO: Acero Inoxidable.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración.',
        propiedades:'Resistencia a la tracción:\nSMOOTH SEAL Jr N: 65 Kg\nSMOOTH SEAL I: 60 Kg',
        uso:'Todo tipo de camiones, contenedores, vagones, transporte aéreo y marítimo, compuertas, entre otros.',
        path: '/subproductos/prodetalles/25' 
      },
      { 
        id: 26, 
        title: 'SUPER ALLIGATOR l-ll', 
        category: 'Precinto Indicativo', 
        img: superalligator12, 
        imgBlanco: superalligator12_blanco,
        description:'Precinto Super Alligator, diseñado con un tamaño compacto y un grosor que proporciona alta resistencia.',
        material:'CUERPO: Polipropileno.\nTRABA: Flotante.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración correlativa.',
        propiedades:'Resistencia a la tracción:\nSUPER ALLIGATOR I: 16 Kg\nSUPER ALLIGATOR II: 24 Kg',
        uso:'Almacenes, cajas metálicas, bandejas, válvulas, entre otros.',
        path: '/subproductos/prodetalles/26' 
      },
      { 
        id: 27, 
        title: 'QUATRISEAL', 
        category: 'Precinto Indicativo', 
        img: quatriseal, 
        imgBlanco: quatriseal_blanco,
        description:'Precinto tipo flecha con cuatro anclas integradas a una cápsula de alta protección.',
        material:'CUERPO: Polipropileno.\nFLECHA: Polipropileno.\nCABLE: Acero con recubrimiento plástico.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración.',
        propiedades:'Resistencia a la tracción:\nQUATRISEAL: 40 Kgs',
        uso:'Medidores de agua y luz, alcancías, cilindros, contómetros, válvulas, entre otros.',
        path: '/subproductos/prodetalles/27' 
      },
      { 
        id: 28, 
        title: 'TITÁN', 
        category: 'Precinto Indicativo', 
        img: titan, 
        imgBlanco: titan_blanco,
        description:'Precinto abre fácil, equipado con una traba de seguridad de acero inoxidable.',
        material:'CUERPO: Polipropileno.\nTAPA: Polipropileno.\nTRABA: Metálico.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración.',
        propiedades:'Resistencia a la tracción:TITÁN: 35.68 Kg',
        uso:'Camiones, válvulas, puertas de contenedores, bolsas de valores, almacenes, entre otros.',
        path: '/subproductos/prodetalles/28' 
      },
      { 
        id: 29, 
        title: 'TRI SEAL l-ll-lll', 
        category: 'Precinto Indicativo', 
        img: triseal123, 
        imgBlanco: triseal123_blanco,
        description:'Precinto ajustable con traba metálica interna de tres puntos de anclaje.',
        material:'CUERPO: Polipropileno.\nTRABA: Acero Inoxidable.',
        grabado:'Marcación en sistema láser o Hot Stamping, logotipo o nombre personalizado, numeración.',
        propiedades:'Resistencia a la tracción:\nTRI SEAL I: 35 Kg\nTRI SEAL II: 40 Kg',
        uso:'Camiones, válvulas, puertas de contenedores, bolsas de valores, entre otros.',
        path: '/subproductos/prodetalles/29' 
      }
    ]
  },

  'especiales': {
    titulo: 'Precintos Especiales',
    productos: [
      { 
        id: 30, 
        title: 'FORZA', 
        category: 'Precinto Especial', 
        img: forza, 
        imgBlanco: forza_blanco,
        description:'Precinto especial de alta resistencia.',
        material:'CUERPO: Polipropileno de alta densidad.',
        grabado:'Marcación láser.',
        propiedades:'Resistencia alta.',
        uso:'Aplicaciones especiales de alta seguridad.',
        path: '/subproductos/prodetalles/30' 
      },
      { 
        id: 31, 
        title: 'TWIST LOCK', 
        category: 'Precinto Especial', 
        img: twistlock, 
        imgBlanco: twistlock_blanco,
        description:'Precinto rotativo giratorio para medidores.',
        material:'CUERPO: Policarbonato transparente.',
        grabado:'Marcación láser correlativa.',
        propiedades:'Mecanismo giratorio anti-retorno.',
        uso:'Medidores de energía, agua y gas.',
        path: '/subproductos/prodetalles/31' 
      },
      { 
        id: 32, 
        title: 'ULTRA SEAL', 
        category: 'Precinto Especial', 
        img: ultraseal, 
        imgBlanco: ultraseal_blanco,
        description:'Precinto especial de máxima protección.',
        material:'CUERPO: Polímero reinforced.',
        grabado:'Marcación láser e impresión UV.',
        propiedades:'Alta resistencia a la intemperie.',
        uso:'Valores y transporte especial.',
        path: '/subproductos/prodetalles/32' 
      }
    ]
  },

  'especializados': {
    titulo: 'Kits Especializados',
    productos: []
  },

  'big-bag': {
    titulo: 'Bolsas Big Bag',
    productos: []
  }
};

// ARREGLO EXCLUSIVO DE SEGURIDAD ELECTRÓNICA
export const seguridadElectronica = [
  {
    id: 33,
    title: 'GRAN COLOSO',
    category: 'Candado Electrónico',
    imggeneral:candadogeneral,
    img: granColoso,
    imgBlanco: granColoso_blanco,
    description: 'Cerradura electrónica inteligente diseñada para asegurar las puertas de contenedores, integrando sensores y tecnología de geolocalización para fortalecer el control y monitoreo de la carga durante su transporte.\nEl sistema proporciona información en tiempo real mediante red celular e incorpora GPS para el rastreo y monitoreo de la ubicación, con acceso a través de plataforma web y aplicación móvil.  ',
    material: 'Marco exterior: Aleación de polímeros.\nCerradura: Acero inoxidable.\nPrecinto incluido: Secure Lock III. ',
    grabado: 'Cerradura electrónica.\nSistema de carga: Recargable mediante entrada POGO con conexión magnética.\nSensores: Movimiento, apertura y cierre, colocación y separación.\nGPS: Precisión de hasta 2 m. ',
    propiedades: 'Peso: 2,8 kg.\nResistente a condiciones ambientales adversas.\nDiseño resistente al agua.\nSistema diseñado para detectar y evidenciar intentos de manipulación no autorizada.',
    uso: 'Containers / Vagones ferroviarios / Camiones / Furgonetas, entre otros.',
    path: '/subproductos/prodetalles/33'
  },
  {
    id: 34,
    title: 'ESCORPIÓN',
    category: 'Candado Electrónico',
    img: escorpionelectronico,
    imgBlanco: escorpionelectronico_blanco,
    description: 'Candado inteligente con GPS diseñado para el control y monitoreo remoto de cargas y activos, permitiendo gestionar su apertura y cierre mediante una aplicación móvil o plataforma web. Incorpora comunicación celular, geolocalización y sensores que generan alertas en tiempo real ante diferentes eventos.\nSu diseño robusto y resistente al agua lo hace adecuado para operaciones logísticas y aplicaciones en ambientes exteriores, proporcionando mayor control sobre la ubicación y el estado del dispositivo.  ',
    material: 'Marco exterior: aleación de aluminio\nCerradura y refuerzos: acero inoxidable\nCable: acero con sensor de corte ',
    grabado: 'Dimensiones: 75 mm de largo × 99 mm de alto × 41 mm de espesor\nPeso: 850 g\nComunicación: GSM 850/900/1800/1900 MHz, LTE Cat-M1 y LTE\nIntervalo de transmisión: ajustable\nMemoria de posiciones: sí\nPrecisión GPS: hasta 5 m\nSensibilidad GPS: -160 dBm ',
    propiedades: 'Apertura y cierre remoto mediante aplicación móvil o plataforma web.\nGeolocalización y visualización de la ubicación del dispositivo.\nSensores para monitoreo en tiempo real.\nAlertas ante diferentes eventos y condiciones del dispositivo.\nSensor de corte integrado en el cable de acero.\nNo requiere llave física para su apertura.\nSistema de carga mediante conector magnético.\nBatería recargable de litio.\nCuerpo fabricado en aleación de aluminio de alta resistencia.\nResistente al agua, con protección IP67.\nCable de longitud adaptable según las necesidades de la aplicación. ',
    uso: 'Contenedores, transporte y logística, almacenes, control y monitoreo de carga, puertas y puntos de acceso, activos que requieren geolocalización y control remoto. ',
    path: '/subproductos/prodetalles/34'
  },
  {
    id: 35,
    title: 'RFID',
    category: 'RFID',
    img: rfid,
    imgBlanco: lectorRFID_blanco,
    description: 'Computadora portátil robusta diseñada para aplicaciones de logística, almacenes, manufactura y comercio minorista, equipada con pantalla HD de 5,5 pulgadas y procesador de ocho núcleos. Integra funciones de lectura de códigos de barras 1D y 2D, NFC y conectividad Bluetooth, Wi-Fi y 4G.\nLa versión premium incorpora reconocimiento de huella digital y funciones UHF, además de compatibilidad con Impinj Gen2X, ampliando sus capacidades para aplicaciones de identificación, trazabilidad y gestión de información',
    material: 'Dimensiones: 160 × 76 × 15,5 / 17,0 mm.\nPantalla: HD de 5,5", relación 18:9, IPS, resolución 1440 × 720.\nProcesador: ocho núcleos.\nRAM + ROM: 3 GB + 32 GB / 4 GB + 64 GB / 6 GB + 64 GB / 6 GB + 128 GB.\nSistema operativo: Android 11 / 13.\nAlmacenamiento externo: Micro SD de hasta 256 GB.\nBluetooth: 5.1\nConectividad: 2G, 3G y 4G.\nWi-Fi: compatible con 802.11 a/b/g/n/ac/ax-ready.\nGPS: GPS/AGPS, GLONASS, BeiDou y Galileo.\nNFC: frecuencia de 13,56 MHz.\nReconocimiento facial: compatible con ISO 19794-5.\nLector de códigos: compatible con códigos 1D y 2D.\nRFID UHF: compatible con Impinj Gen2X.\nAudio y alertas: sonido, indicador LED y vibrador.\nSIM: Nano SIM.\nSeguridad: soporte para diferentes soluciones de gestión y seguridad mediante software/SDK.',
    grabado: 'Pantalla táctil, conectividad Wi-Fi / Bluetooth / 4G.',
    propiedades: 'Diseño portátil y robusto para operaciones profesionales\nPantalla HD de 5,5 pulgadas para facilitar la visualización de información\nLectura de códigos de barras 1D y 2D\nTecnología NFC para identificación e intercambio de información\nGPS y sistemas GNSS para funciones de geolocalización\nConectividad mediante Bluetooth, Wi-Fi y redes móviles 4G\nCompatibilidad con tecnología RFID UHF e Impinj Gen2X\nReconocimiento de huella digital disponible en la versión premium\nCompatible con herramientas de gestión y seguridad empresarial\nMemoria ampliable mediante tarjeta Micro SD de hasta 256 GB.',
    uso: 'Logística, almacenes, manufactura, comercio minorista, gestión de inventarios, identificación y lectura de productos, trazabilidad mediante códigos de barras y RFID.',
    path: '/subproductos/prodetalles/35'
  }
];

// EXPORTACIÓN GENERAL DE PRECINTO TRADICIONALES
export const PRODUCTOS = [
  ...baseDeDatosCategorias['alta-seguridad'].productos,
  ...baseDeDatosCategorias['seguridad'].productos,
  ...baseDeDatosCategorias['indicativos'].productos,
  ...baseDeDatosCategorias['especiales'].productos
];

// SOLUCIONES SECUNDARIAS
export const solucionesSecundarias = [
  {
    id: 'alta-seguridad',
    categoryKey: 'alta-seguridad',
    title: 'Precintos de Alta Seguridad',
    category: 'Solución',
    img: paltaseguridad,
    path: '/productos/alta-seguridad'
  },
  {
    id: 'seguridad',
    categoryKey: 'seguridad',
    title: 'Precintos de Seguridad',
    category: 'Solución',
    img: pseguridad,
    path: '/productos/seguridad'
  },
  {
    id: 'indicativos',
    categoryKey: 'indicativos',
    title: 'Precintos Indicativos',
    category: 'Solución',
    img: pindicativo,
    path: '/productos/indicativos'
  },
  {
    id: 'especiales',
    categoryKey: 'especiales',
    title: 'Precintos Especiales',
    category: 'Solución',
    img: pespecial,
    path: '/productos/especiales'
  },
  { 
    id: 'especializados', 
    categoryKey: 'especializados', 
    title: 'Kits Especializados', 
    category: 'Kits', 
    img: kitespecializado, 
    path: '/productos/especializados' 
  },
  { 
    id: 'big-bag', 
    categoryKey: 'big-bag', 
    title: 'BIG BAG', 
    category: 'Bolsa', 
    img: bag, 
    path: '/productos/big-bag' 
  }
];