import { 
  ModuleSection, 
  QuizData, 
  CaseStudy, 
  Badge, 
  ApprenticeProgress 
} from '../types/induction';

export const SENA_CAMPUS_IMAGE = '/src/assets/images/sena_campus_modern_1794325227599.jpg';
export const SENA_SYMBOLS_IMAGE = '/src/assets/images/sena_symbols_concept_1794325229078.jpg';
export const SENA_COLLAB_IMAGE = '/src/assets/images/sena_collaborative_learning_1794325229781.jpg';
export const SENA_ESCUDO_IMAGE = 'https://www.sena.edu.co/assets/escudo-CKAC4aSg.png';
export const SENA_ESCUDO_FALLBACK = '/src/assets/images/sena_escudo.png';

export const INSTITUTIONAL_INFO = {
  nombre: 'Servicio Nacional de Aprendizaje - SENA',
  pais: 'República de Colombia',
  fundacion: '21 de junio de 1957 por Rodolfo Martínez Tono',
  lema: 'El SENA es Colombia',
  mision: 'El SENA está encargado de cumplir la función que le corresponde al Estado de invertir en el desarrollo social y técnico de los trabajadores colombianos, ofreciendo y ejecutando la formación profesional integral, para la incorporación y el desarrollo de las personas en actividades productivas que contribuyan al desarrollo social, económico y tecnológico del país.',
  vision: 'El SENA se consolida como una entidad referente nacional e internacional de formación profesional integral, caracterizada por su innovación pedagógica, pertinencia en la era de la inteligencia digital, equidad territorial y compromiso irrenunciable con la inclusión social y la paz total de Colombia.',
  valores: [
    {
      titulo: 'Integridad',
      descripcion: 'Actuamos con honestidad, coherencia y rectitud en cada actividad formativa y profesional.',
      ejemplo: 'Reconocer las fuentes en cada evidencia de aprendizaje y rechazar el plagio.'
    },
    {
      titulo: 'Respeto',
      descripcion: 'Reconocemos el valor inherente de cada persona en un ambiente de diálogo y empatía.',
      ejemplo: 'Escuchar la opinión de instructores y compañeros sin discriminar por ideología, género o condición.'
    },
    {
      titulo: 'Compromiso',
      descripcion: 'Asumimos con pasión y entrega nuestro papel como agentes de cambio productivo.',
      ejemplo: 'Entregar evidencias a tiempo y cuidar rigurosamente los ambientes de formación y maquinaria.'
    },
    {
      titulo: 'Solidaridad',
      descripcion: 'Apoyamos a nuestros pares para construir colectivamente el conocimiento y el bienestar.',
      ejemplo: 'Brindar apoyo a compañeros con dificultades de aprendizaje o herramientas técnicas.'
    },
    {
      titulo: 'Justicia y Equidad',
      descripcion: 'Garantizamos trato digno e igualdad de oportunidades en todas las instancias del Centro.',
      ejemplo: 'Respetar el debido proceso formativo y las deliberaciones del Comité de Evaluación.'
    }
  ]
};

export const SYMBOLS_DETAIL = {
  escudo: {
    nombre: 'El Escudo del SENA',
    descripcion: 'Diseñado en los primeros años de la entidad, sintetiza la confluencia de los tres grandes sectores económicos de la patria.',
    elementos: [
      {
        nombre: 'La Rueda Dentada (Piñón)',
        sector: 'Sector de la Industria y la Manufactura',
        detalle: 'Representa el esfuerzo obrero, la fuerza transformadora de la ingeniería, los procesos fabriles y el desarrollo industrial del país.'
      },
      {
        nombre: 'El Caduceo (Vara con alas y dos serpientes)',
        sector: 'Sector del Comercio y los Servicios',
        detalle: 'Símbolo del intercambio comercial justo, la gestión empresarial, la logística, las finanzas y los servicios que dinamizan la economía.'
      },
      {
        nombre: 'El Rayo y Haz Agropecuario',
        sector: 'Sector Primario y Agroindustrial',
        detalle: 'Representa la fertilidad de la tierra colombiana, la producción agrícola y pecuaria, y la energía vital que impulsa la ciencia y la tecnología.'
      }
    ]
  },
  bandera: {
    nombre: 'La Bandera del SENA',
    descripcion: 'Compuesta por un lienzo rectangular de color blanco inmaculado con el escudo institucional centrado.',
    significadoColor: 'El fondo blanco simboliza la paz, la tranquilidad, la pulcritud en las acciones y la transparencia institucional. La unión de los sectores en el centro representa la comunión del pueblo colombiano en torno a la educación para el trabajo.'
  },
  logosimbolo: {
    nombre: 'El Logosímbolo Institucional',
    descripcion: 'Evolucionado para reflejar la esencia humanista y vanguardista del SENA.',
    significado: 'Representa de forma estilizada al ser humano (el aprendiz) que camina erguido con paso firme hacia el horizonte de oportunidades. Los círculos y trazos delinean sus senderos de crecimiento: saber, hacer y convivir.'
  },
  himno: {
    titulo: 'Himno del SENA',
    letraAutor: 'Luis Alfredo Sarmiento (con Jesús Briceño S.)',
    musicaAutor: 'Daniel Marlés E.',
    notaPedagogica: 'En las ceremonias e inducciones contemporáneas se canta con orgullo tanto la versión original histórica ("Estudiantes del SENA, ¡adelante!") como la adaptación con la denominación oficial institucional ("Aprendices del SENA, ¡adelante!").',
    coro: [
      'Estudiantes del SENA, ¡adelante!',
      'Por Colombia luchad con amor,',
      'Con el ánimo noble y radiante,',
      'Transformémosla en mundo mejor.'
    ],
    estrofas: [
      {
        numero: 'I',
        versos: [
          'De la patria el futuro destino,',
          'En las manos del joven está;',
          'El trabajo es seguro camino,',
          'Que el progreso a Colombia dará.'
        ],
        analisis: 'Consagra a la juventud colombiana y al trabajo digno como el motor supremo que conduce al progreso socioeconómico y productivo del país.'
      },
      {
        numero: 'II',
        versos: [
          'En la forja del SENA se forman,',
          'Hombres libres que anhelan triunfar;',
          'Con la ciencia y la técnica unidas,',
          'Nuevos rumbos de paz trazarán.'
        ],
        analisis: 'Resalta el papel del SENA como forja de formación profesional integral, donde la ciencia, la tecnología y los valores humanos trazan senderos hacia la paz.'
      },
      {
        numero: 'III',
        versos: [
          'Hoy la patria nos grita sentida,',
          '¡Estudiantes del SENA, triunfad!',
          'Sólo así lograréis en la vida,',
          'Más justicia, mayor libertad.'
        ],
        analisis: 'Clamor de la nación hacia los aprendices y estudiantes para triunfar éticamente, garantizando una sociedad con justicia social y libertad.'
      },
      {
        numero: 'IV',
        versos: [
          'Avancemos con fuerza guerrera,',
          '¡Estudiantes con firme tesón!',
          'Que la patria en nosotros espera,',
          'Su pacífica revolución.'
        ],
        analisis: 'Exhorta a la constancia, el estudio y la disciplina para liderar la transformación y revolución pacífica del conocimiento en Colombia.'
      }
    ]
  }
};

export const NORMATIVA_REGULATION = {
  acuerdo: 'Acuerdo 007 de 2012 (Reglamento del Aprendiz) actualizado con Directrices de Formación Profesional Integral, Protocolos de Convivencia Digital y Rutas de Restitución',
  definicionAprendiz: 'Es aprendiz SENA toda persona matriculada en los programas de formación profesional integral de la entidad en cualquier modalidad (presencial, virtual, combinada o a distancia), comprometida con su propio aprendizaje y la convivencia institucional.',
  derechos: [
    {
      id: 'der-1',
      articulo: 'Art. 7, Numeral 1',
      titulo: 'Formación profesional integral de calidad',
      descripcion: 'Recibir formación profesional integral acorde con el programa de formación, con disponibilidad de instructores competentes, ambientes de aprendizaje adecuados y acceso a recursos tecnológicos.',
      ambito: 'Académico'
    },
    {
      id: 'der-2',
      articulo: 'Art. 7, Numeral 2',
      titulo: 'Inducción oportuna y completa',
      descripcion: 'Recibir al iniciar el proceso de formación la inducción institucional y técnica necesaria para apropiar la normativa, plataformas y metodología del SENA.',
      ambito: 'Institucional'
    },
    {
      id: 'der-3',
      articulo: 'Art. 7, Numeral 3',
      titulo: 'Carné institucional y credenciales digitales',
      descripcion: 'Disponer del documento de identificación estudiantil físico o digital que lo acredita como aprendiz SENA para acceder a sedes, bibliotecas y convenios.',
      ambito: 'Bienestar'
    },
    {
      id: 'der-4',
      articulo: 'Art. 7, Numeral 4',
      titulo: 'Garantía del Debido Proceso y Defensa',
      descripcion: 'Ser escuchado en descargos, aportar pruebas, contar con acompañamiento de vocero o bienestar y recurrir las decisiones ante el Comité de Evaluación y Seguimiento.',
      ambito: 'Jurídico'
    },
    {
      id: 'der-5',
      articulo: 'Art. 7, Numeral 5',
      titulo: 'Evaluación objetiva y retroalimentación',
      descripcion: 'Conocer oportunamente el resultado de sus evaluaciones y planes de mejora en un plazo no mayor a 8 días hábiles tras la entrega de evidencias.',
      ambito: 'Académico'
    },
    {
      id: 'der-6',
      articulo: 'Art. 7, Numeral 6',
      titulo: 'Programas de Bienestar al Aprendiz',
      descripcion: 'Participar en convocatorias de apoyos de sostenimiento, estímulos, monitorías, cultura, deporte y salud integral.',
      ambito: 'Bienestar'
    },
    {
      id: 'der-7',
      articulo: 'Art. 7, Numeral 7 (Actualizado)',
      titulo: 'Conectividad y Recursos Tecnológicos',
      descripcion: 'Acceso a plataformas virtuales oficiales (Zajuna, Sofia Plus), herramientas de software licenciadas y equipos de cómputo en los centros de formación.',
      ambito: 'Institucional'
    },
    {
      id: 'der-8',
      articulo: 'Art. 7, Numeral 8 (Actualizado)',
      titulo: 'Enfoque Diferencial y Accesibilidad',
      descripcion: 'Recibir ajustes razonables y garantías de inclusión para aprendices con condición de discapacidad o pertenencia a grupos étnicos y poblacionales diferenciales.',
      ambito: 'Bienestar'
    }
  ],
  deberes: [
    {
      id: 'deb-1',
      articulo: 'Art. 9, Numeral 1',
      titulo: 'Porte visible del carné institucional',
      descripcion: 'Portar permanentemente y en lugar visible el carné que lo identifica como aprendiz durante su permanencia en las instalaciones del SENA o empresas.',
      ambito: 'Seguridad'
    },
    {
      id: 'deb-2',
      articulo: 'Art. 9, Numeral 2',
      titulo: 'Puntualidad y asistencia continua',
      descripcion: 'Asistir con puntualidad a todas las sesiones presenciales o sincrónicas programadas, registrando asistencia y justificando ausencias en un plazo máximo de 3 días hábiles.',
      ambito: 'Académico'
    },
    {
      id: 'deb-3',
      articulo: 'Art. 9, Numeral 3',
      titulo: 'Uso de Elementos de Protección Personal (EPP)',
      descripcion: 'Utilizar el uniforme institucional y los elementos de seguridad y salud en el trabajo requeridos para cada taller o laboratorio.',
      ambito: 'Seguridad'
    },
    {
      id: 'deb-4',
      articulo: 'Art. 9, Numeral 4',
      titulo: 'Autenticidad y autoría en evidencias',
      descripcion: 'Entregar evidencias de aprendizaje de autoría propia, citando fuentes bibliográficas y absteniéndose de plagio o fraude con IA.',
      ambito: 'Ético'
    },
    {
      id: 'deb-5',
      articulo: 'Art. 9, Numeral 5',
      titulo: 'Cuidado del patrimonio y equipos',
      descripcion: 'Velar por la conservación, aseo y correcto uso de máquinas, herramientas, equipos de cómputo e infraestructura del Centro.',
      ambito: 'Convivencia'
    },
    {
      id: 'deb-6',
      articulo: 'Art. 9, Numeral 6 (Actualizado)',
      titulo: 'Convivencia digital y respeto en redes',
      descripcion: 'Mantener un trato respetuoso y ético en canales de comunicación institucional, foros, chats de WhatsApp y plataformas de teleformación.',
      ambito: 'Ético'
    }
  ],
  prohibiciones: [
    'Ingresar o permanecer en el Centro bajo el efecto de bebidas alcohólicas o sustancias psicoactivas.',
    'Portar armas de fuego, cortopunzantes o cualquier elemento que atente contra la integridad física.',
    'Cometer plagio, suplantación de identidad en evaluaciones o falsificación de documentos institucionales.',
    'Comercializar productos o servicios sin autorización expresa de la Subdirección del Centro.',
    'Utilizar el nombre del SENA, sus plataformas o redes para actividades ilícitas o fines políticos particulares.',
    'Realizar actos de ciberacoso, hostigamiento o discriminación a instructores o compañeros en canales digitales (Actualizado).'
  ],
  clasificacionFaltas: {
    tipos: [
      {
        nombre: 'Falta Académica',
        criterio: 'Afecta directamente el compromiso con el desarrollo de competencias y la apropiación de conocimientos (ej. no entrega injustificada de evidencias, plagio).',
        icono: 'GraduationCap'
      },
      {
        nombre: 'Falta Disciplinaria',
        criterio: 'Afecta la convivencia pacífica, la moral, el orden institucional, los bienes físicos o la integridad de los miembros de la comunidad.',
        icono: 'ShieldAlert'
      }
    ],
    grados: [
      {
        grado: 'Leve',
        descripcion: 'Afectación menor a la convivencia o cumplimiento que no causa daño físico, psicológico o patrimonial grave y no presenta antecedentes.',
        medidaSugerida: 'Llamado de atención verbal o Plan de Mejoramiento preventivo.'
      },
      {
        grado: 'Grave',
        descripcion: 'Conducta reiterada o que compromete la seguridad, el respeto o el avance formativo grupal con intencionalidad o negligencia notoria.',
        medidaSugerida: 'Llamado de atención escrito o Condicionamiento de matrícula con plan estricto.'
      },
      {
        grado: 'Gravísima',
        descripcion: 'Violación directa de derechos fundamentales, comisión de delitos, agresión física, porte de armas, daño intencional severo o fraude doloso.',
        medidaSugerida: 'Cancelación de matrícula e inhabilidad para matricularse en el SENA de 6 meses a 2 años.'
      }
    ]
  },
  debidoProcesoPasos: [
    {
      paso: 1,
      titulo: 'Informe de Novedad o Queja',
      actor: 'Instructor / Coordinador / Comunidad',
      descripcion: 'Se radica el informe detallado de la presunta falta académica o disciplinaria ante la Coordinación Académica con las evidencias preliminares.'
    },
    {
      paso: 2,
      titulo: 'Citación Oficial al Aprendiz',
      actor: 'Comité de Evaluación y Seguimiento',
      descripcion: 'Se notifica formalmente al aprendiz indicando fecha, hora, hechos imputados, normas presuntamente vulneradas y su derecho a aportar pruebas y descargos.'
    },
    {
      paso: 3,
      titulo: 'Audiencia de Descargos y Pruebas',
      actor: 'Aprendiz y Miembros del Comité',
      descripcion: 'El aprendiz expone su versión de los hechos, presenta testigos o documentos y ejerce plenamente su derecho a la defensa.'
    },
    {
      paso: 4,
      titulo: 'Deliberación y Recomendación',
      actor: 'Comité de Evaluación',
      descripcion: 'El comité evalúa antecedentes, atenuantes y agravantes, calificando la falta y emitiendo una recomendación motivada al Subdirector de Centro.'
    },
    {
      paso: 5,
      titulo: 'Acto Administrativo y Notificación',
      actor: 'Subdirector de Centro',
      descripcion: 'El Subdirector emite la resolución formal donde acoge o ajusta la recomendación y la notifica personalmente o por correo oficial al aprendiz.'
    },
    {
      paso: 6,
      titulo: 'Recurso de Reposición',
      actor: 'Aprendiz',
      descripcion: 'El aprendiz cuenta con cinco (5) días hábiles tras la notificación para interponer el recurso de reposición ante el Subdirector si considera vulnerados sus derechos.'
    }
  ]
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'caso-1',
    titulo: 'Presunto Plagio en Evidencia Técnica de Software',
    tipoFaltaCandidata: 'Académica',
    aprendizInvolucrado: 'Carlos Andrés Meza',
    programa: 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
    antecedentes: 'El aprendiz no registra antecedentes disciplinarios previos y ha mostrado buen desempeño en competencias transversales.',
    descripcionCaso: 'Durante la revisión de la evidencia "Módulo de Autenticación y Criptografía", el instructor detectó que el 90% del código fuente y los comentarios eran idénticos al repositorio de un compañero de otra ficha publicado en GitHub el año anterior, sin ninguna atribución de autoría ni explicación técnica.',
    pruebasAportadas: [
      'Reporte comparativo de similitud de código fuente al 93%.',
      'Historial de commits sin progresión de desarrollo.',
      'Copia de la evidencia original entregada por el autor original.'
    ],
    opcionesSancion: [
      {
        id: 'opt-1a',
        decision: 'Archivar el caso sin consecuencias porque el código de programación es público en internet.',
        calificacionFalta: 'No constituye falta',
        medida: 'Archivo del caso',
        esCorrecta: false,
        argumentacionJuridica: 'Incorrecto. El Artículo 9 Numeral 4 del Reglamento exige autoría y honestidad intelectual. Copiar el trabajo de otro sin citar es plagio deliberado.'
      },
      {
        id: 'opt-1b',
        decision: 'Calificar como Falta Académica Grave y ordenar Plan de Mejoramiento con Llamado de Atención Escrito.',
        calificacionFalta: 'Grave',
        medida: 'Plan de mejoramiento',
        esCorrecta: true,
        argumentacionJuridica: 'Correcto. Al tratarse de una falta académica sin antecedentes, el enfoque formativo del SENA busca la reeducación ética. Se otorga un plan de mejoramiento con sustentación oral rigurosa y amonestación en hoja de vida.'
      },
      {
        id: 'opt-1c',
        decision: 'Cancelar de inmediato la matrícula e imponer inhabilidad por 2 años sin escuchar descargos.',
        calificacionFalta: 'Gravísima',
        medida: 'Cancelación de matrícula',
        esCorrecta: false,
        argumentacionJuridica: 'Incorrecto. Viola el principio de proporcionalidad y debido proceso para un aprendiz sin antecedentes en falta académica primaria.'
      }
    ]
  },
  {
    id: 'caso-2',
    titulo: 'Inasistencia Reiterada Injustificada en Taller Mecatrónico',
    tipoFaltaCandidata: 'Académica',
    aprendizInvolucrado: 'Valentina Restrepo Gil',
    programa: 'Tecnología en Automatización Industrial',
    antecedentes: 'Se le realizó previamente un llamado de atención verbal por llegar tarde a prácticas de laboratorio.',
    descripcionCaso: 'La aprendiz faltó de manera continua durante 4 días hábiles de la semana a las prácticas de automatización neumática. Al regresar al quinto día, no presentó incapacidad médica oficial de EPS o justificación certificada en los 3 días hábiles establecidos por el reglamento.',
    pruebasAportadas: [
      'Planilla de control biométrico y firmas de ambiente de formación.',
      'Avisos de inasistencia enviados por correo institucional sin respuesta.',
      'Afectación al cronograma del proyecto productivo en equipo.'
    ],
    opcionesSancion: [
      {
        id: 'opt-2a',
        decision: 'Iniciar trámite de deserción conforme al reglamento tras vencerse los plazos de justificación, o acordar plan de nivelación condicionado.',
        calificacionFalta: 'Grave',
        medida: 'Condicionamiento de matrícula',
        esCorrecta: true,
        argumentacionJuridica: 'Correcto. La inasistencia injustificada de más de tres (3) días continuos en formación presencial faculta la declaratoria de deserción, previa citación para conocer motivos de fuerza mayor justificados.'
      },
      {
        id: 'opt-2b',
        decision: 'Ignorar la inasistencia y permitirle presentar la práctica cuando ella lo desee.',
        calificacionFalta: 'No constituye falta',
        medida: 'Archivo del caso',
        esCorrecta: false,
        argumentacionJuridica: 'Incorrecto. La puntualidad y asistencia son deberes expresos que garantizan el cumplimiento de los Resultados de Aprendizaje (RAP).'
      }
    ]
  },
  {
    id: 'caso-3',
    titulo: 'Agresión Física y Daño Intencional de Maquinaria CNC',
    tipoFaltaCandidata: 'Disciplinaria',
    aprendizInvolucrado: 'Julián David Morales',
    programa: 'Mantenimiento Mecatrónico',
    antecedentes: 'Reincidente en amonestaciones por agresiones verbales a compañeros de ficha.',
    descripcionCaso: 'Tras una discusión acalorada en el taller de maquinado, el aprendiz golpeó a un compañero de aula provocándole lesiones físicas, y posteriormente propinó patadas al panel de control de un torno de control numérico causando la fractura de la pantalla táctil de la máquina institucional.',
    pruebasAportadas: [
      'Video de seguridad del taller de manufactura.',
      'Valoración médica de primeros auxilios del compañero agredido.',
      'Dictamen técnico de daño a bien público valorado en $4.500.000 COP.'
    ],
    opcionesSancion: [
      {
        id: 'opt-3a',
        decision: 'Un simple llamado de atención verbal en privado.',
        calificacionFalta: 'Leve',
        medida: 'Llamado de atención verbal',
        esCorrecta: false,
        argumentacionJuridica: 'Incorrecto. Agredir físicamente y destruir patrimonio del Estado constituye una falta gravísima que pone en riesgo la vida de la comunidad educativa.'
      },
      {
        id: 'opt-3b',
        decision: 'Calificar como Falta Disciplinaria Gravísima y recomendar al Subdirector la Cancelación de Matrícula con inhabilidad de 1 a 2 años.',
        calificacionFalta: 'Gravísima',
        medida: 'Cancelación de matrícula',
        esCorrecta: true,
        argumentacionJuridica: 'Correcto. Conforme al Artículo 25 del Reglamento, la agresión física y el daño doloso a la infraestructura física institucional son faltas gravísimas que conllevan la máxima sanción administrativa y eventual reporte legal.'
      }
    ]
  }
];

export const INDUCTION_MODULES: ModuleSection[] = [
  {
    id: 'mod-identidad',
    titulo: 'Identidad, Símbolos y Cultura SENA',
    duracionEstimada: '45 minutos',
    icono: 'Sparkles',
    descripcion: 'Apropia la misión, visión, historia de la institución más querida por los colombianos y el significado vivo de sus símbolos patrios e institucionales.',
    unidades: [
      {
        id: 'u-1',
        titulo: 'Origen histórico y Misión del SENA',
        tipo: 'lectura',
        contenidoResumen: 'Desde 1957 con Rodolfo Martínez Tono hasta la vanguardia de la innovación técnica contemporánea.'
      },
      {
        id: 'u-2',
        titulo: 'Explorador Interactivo del Escudo, Bandera y Logosímbolo',
        tipo: 'interactivo',
        contenidoResumen: 'Descubre los hotspots de la rueda dentada, caduceo, rayo y la senda del aprendiz.'
      },
      {
        id: 'u-3',
        titulo: 'Himno Institucional: Canto a la Juventud y al Trabajo',
        tipo: 'audio',
        contenidoResumen: 'Reproductor musical con estrofas sincronizadas y significado lírico.'
      },
      {
        id: 'u-4',
        titulo: 'Valores Institucionales en Acción',
        tipo: 'interactivo',
        contenidoResumen: 'Integridad, respeto, compromiso, solidaridad y equidad en el aula y la empresa.'
      }
    ]
  },
  {
    id: 'mod-normativa',
    titulo: 'Reglamento del Aprendiz y Convivencia',
    duracionEstimada: '60 minutos',
    icono: 'Scale',
    descripcion: 'Domina los derechos, deberes, prohibiciones, clasificación de faltas y el procedimiento del Comité de Evaluación y Seguimiento.',
    unidades: [
      {
        id: 'u-5',
        titulo: 'Catálogo de Derechos y Deberes del Aprendiz',
        tipo: 'interactivo',
        contenidoResumen: 'Derechos formativos, bienestar estudiantil y deberes de seguridad y puntualidad.'
      },
      {
        id: 'u-6',
        titulo: 'Faltas Académicas y Disciplinarias (Leves, Graves, Gravísimas)',
        tipo: 'lectura',
        contenidoResumen: 'Diferenciación de conductas, agravantes, atenuantes y consecuencias.'
      },
      {
        id: 'u-7',
        titulo: 'Ruta del Debido Proceso y Medidas Formativas',
        tipo: 'interactivo',
        contenidoResumen: 'Llamados de atención, planes de mejoramiento, comités y recurso de reposición.'
      },
      {
        id: 'u-8',
        titulo: 'Simulador de Casos del Comité de Evaluación',
        tipo: 'simulador',
        contenidoResumen: 'Toma decisiones jurídicas y formativas como miembro del comité disciplinario.'
      }
    ]
  },
  {
    id: 'mod-ecosistema',
    titulo: 'Ecosistema Tecnológico y Bienestar SENA',
    duracionEstimada: '35 minutos',
    icono: 'Laptop',
    descripcion: 'Conoce las plataformas que usarás a diario (ZAJUNA, SOFIA Plus), los apoyos de Bienestar al Aprendiz y las etapas de tu programa formativo.',
    unidades: [
      {
        id: 'u-9',
        titulo: 'Plataformas Digitales: Sofia Plus, Zajuna y Correo SoySena',
        tipo: 'interactivo',
        contenidoResumen: 'Gestión de matrículas, aulas virtuales LMS y comunicación institucional.'
      },
      {
        id: 'u-10',
        titulo: 'Etapas de Formación: Etapa Lectiva vs. Etapa Productiva',
        tipo: 'lectura',
        contenidoResumen: 'Contrato de aprendizaje, proyecto productivo, pasantía y monitorías.'
      },
      {
        id: 'u-11',
        titulo: 'Servicios de Bienestar, Salud y Fondo Emprender',
        tipo: 'interactivo',
        contenidoResumen: 'Apoyos de sostenimiento, fomento cultural, deportivo y emprendimiento.'
      }
    ]
  },
  {
    id: 'mod-evaluacion',
    titulo: 'Evaluación y Certificación de Inducción',
    duracionEstimada: '30 minutos',
    icono: 'Award',
    descripcion: 'Valida tus conocimientos adquiridos mediante el examen integral de inducción y genera tu Constancia Oficial Aprobada.',
    unidades: [
      {
        id: 'u-12',
        titulo: 'Quiz 1: Identidad y Símbolos',
        tipo: 'quiz',
        contenidoResumen: '5 preguntas sobre la historia y símbolos del SENA.'
      },
      {
        id: 'u-13',
        titulo: 'Quiz 2: Normativa y Convivencia',
        tipo: 'quiz',
        contenidoResumen: '5 preguntas sobre el reglamento del aprendiz y debido proceso.'
      },
      {
        id: 'u-14',
        titulo: 'Examen Final Integral de Inducción',
        tipo: 'quiz',
        contenidoResumen: '10 preguntas integrales que acreditan la culminación exitosa de la inducción.'
      }
    ]
  }
];

export const QUIZZES: Record<string, QuizData> = {
  'quiz-identidad': {
    id: 'quiz-identidad',
    titulo: 'Desafío: Identidad y Símbolos SENA',
    descripcion: 'Demuestra cuánto sabes sobre la fundación, el escudo, la bandera, el himno y los valores del SENA.',
    moduloId: 'mod-identidad',
    puntajeMinimoAprobacion: 80,
    insigniaDesbloqueable: 'badge-identidad',
    preguntas: [
      {
        id: 'qi-1',
        pregunta: '¿En qué año fue fundado el SENA y quién fue su principal gestor e ideólogo?',
        opciones: [
          'En 1957, concebido por Rodolfo Martínez Tono.',
          'En 1970, durante el gobierno de Carlos Lleras Restrepo.',
          'En 1948, creado por la Organización de Estados Americanos.',
          'En 1962, fundado por el Ministerio de Educación Nacional.'
        ],
        respuestaCorrecta: 0,
        explicacion: 'El SENA nació el 21 de junio de 1957 mediante el Decreto Ley 118, concebido brillantemente por el economista Rodolfo Martínez Tono.'
      },
      {
        id: 'qi-2',
        pregunta: 'En el escudo oficial del SENA, ¿qué sector económico está simbolizado por la rueda dentada o piñón?',
        opciones: [
          'El sector agrícola y de tierras fértiles.',
          'El sector industrial, metalmecánico y manufacturero.',
          'El sector de finanzas, banca y seguros.',
          'El sector de transporte marítimo y aduanero.'
        ],
        respuestaCorrecta: 1,
        explicacion: 'La rueda dentada representa la industria, la fuerza transformadora de los trabajadores y el desarrollo manufacturero.'
      },
      {
        id: 'qi-3',
        pregunta: '¿Qué representa el caduceo (la vara con dos serpientes entrelazadas y alas) en el escudo del SENA?',
        opciones: [
          'La salud ocupacional y enfermería.',
          'El sector comercial y de servicios.',
          'El conocimiento ancestral de la botánica.',
          'La aviación militar colombiana.'
        ],
        respuestaCorrecta: 1,
        explicacion: 'El caduceo, tradicional atributo de Mercurio, representa universalmente la actividad mercantil, los servicios y el comercio.'
      },
      {
        id: 'qi-4',
        pregunta: '¿Cuál es el significado del fondo blanco en la bandera institucional del SENA?',
        opciones: [
          'La pureza de las materias primas procesadas.',
          'La paz, la serenidad, la libertad y la transparencia.',
          'La neutralidad política ante los sindicatos.',
          'El clima frío de los páramos colombianos.'
        ],
        respuestaCorrecta: 1,
        explicacion: 'El blanco de la bandera del SENA simboliza la paz como anhelo nacional, la serenidad en la formación y la transparencia en la gestión pública.'
      },
      {
        id: 'qi-5',
        pregunta: '¿Quién escribió la letra oficial del Himno del SENA?',
        opciones: [
          'Rafael Pombo',
          'Luis Alfredo Sarmiento (con Jesús Briceño S.)',
          'José Eustasio Rivera',
          'Daniel Marlés E.'
        ],
        respuestaCorrecta: 1,
        explicacion: 'La letra fue compuesta por Luis Alfredo Sarmiento (con colaboración de Jesús Briceño S.), mientras que la música fue creada por el maestro Daniel Marlés E.'
      }
    ]
  },
  'quiz-normativa': {
    id: 'quiz-normativa',
    titulo: 'Desafío: Normativa y Reglamento del Aprendiz',
    descripcion: 'Pon a prueba tu conocimiento de derechos, deberes, clasificación de faltas y el debido proceso sancionatorio.',
    moduloId: 'mod-normativa',
    puntajeMinimoAprobacion: 80,
    insigniaDesbloqueable: 'badge-normativa',
    preguntas: [
      {
        id: 'qn-1',
        pregunta: '¿Cuál es la norma que rige actualmente los deberes, derechos y procedimientos del aprendiz SENA?',
        opciones: [
          'El Código Sustantivo del Trabajo colombiano.',
          'El Acuerdo 007 de 2012 (Reglamento del Aprendiz SENA).',
          'La Ley 100 de Seguridad Social integral.',
          'El Decreto 2420 de contabilidad gubernamental.'
        ],
        respuestaCorrecta: 1,
        explicacion: 'El Acuerdo 007 de 2012 expedido por el Consejo Directivo Nacional contiene el Reglamento del Aprendiz SENA vigente.'
      },
      {
        id: 'qn-2',
        pregunta: 'Si un aprendiz presenta una inasistencia por fuerza mayor o calamidad doméstica, ¿cuántos días hábiles tiene para presentar su justificación?',
        opciones: [
          'Hasta un mes después de la inasistencia.',
          'Dentro de los tres (3) días hábiles siguientes.',
          'El mismo día antes de las 12 del mediodía.',
          'No necesita justificar si le avisa a un compañero.'
        ],
        respuestaCorrecta: 1,
        explicacion: 'El reglamento estipula que el aprendiz debe radicar su justificación debidamente soportada dentro de los tres (3) días hábiles siguientes al hecho.'
      },
      {
        id: 'qn-3',
        pregunta: '¿Cuál de las siguientes acciones NO constituye una sanción disciplinaria, sino una medida formativa pedagógica preventiva?',
        opciones: [
          'Condicionamiento de matrícula.',
          'Plan de mejoramiento académico o disciplinario.',
          'Cancelación de matrícula.',
          'Llamado de atención escrito con copia a hoja de vida.'
        ],
        respuestaCorrecta: 1,
        explicacion: 'El Plan de Mejoramiento es una medida formativa concertada con el aprendiz para superar falencias antes de llegar a sanciones punitivas.'
      },
      {
        id: 'qn-4',
        pregunta: '¿Qué autoridad institucional es la única facultada para imponer formalmente sanciones como el Condicionamiento o la Cancelación de matrícula?',
        opciones: [
          'El vocero de la ficha.',
          'El vigilante del Centro.',
          'El Subdirector del Centro de Formación mediante acto administrativo.',
          'El representante de los aprendices de la jornada.'
        ],
        respuestaCorrecta: 2,
        explicacion: 'El Comité de Evaluación recomienda, pero la decisión jurídica y sancionatoria corresponde exclusivamente al Subdirector de Centro.'
      },
      {
        id: 'qn-5',
        pregunta: 'Frente a una sanción notificada por resolución del Subdirector de Centro, ¿qué recurso legal puede interponer el aprendiz y en qué término?',
        opciones: [
          'Recurso de apelación en 30 días calendario.',
          'Recurso de reposición dentro de los cinco (5) días hábiles siguientes a la notificación.',
          'Tutela inmediata ante la Corte Penal Internacional.',
          'No existe ningún recurso una vez firmada la sanción.'
        ],
        respuestaCorrecta: 1,
        explicacion: 'Garantizando el debido proceso, el aprendiz puede interponer el Recurso de Reposición dentro de los cinco (5) días hábiles siguientes a la notificación personal.'
      }
    ]
  },
  'quiz-final': {
    id: 'quiz-final',
    titulo: 'Examen Integral de Certificación de Inducción',
    descripcion: 'Evaluación final comprensiva para verificar la apropiación total de la cultura, normativa y servicios del SENA.',
    moduloId: 'mod-evaluacion',
    puntajeMinimoAprobacion: 80,
    insigniaDesbloqueable: 'badge-certificacion',
    preguntas: [
      {
        id: 'qf-1',
        pregunta: '¿Qué principio orienta la formación profesional integral en el SENA?',
        opciones: [
          'La memorización teórica sin aplicación práctica.',
          'El desarrollo armónico de competencias técnicas, humanas y sociales para el trabajo digno.',
          'La formación orientada exclusivamente a la preparación de exámenes estandarizados.',
          'La instrucción acelerada sin evaluación de resultados de aprendizaje.'
        ],
        respuestaCorrecta: 1,
        explicacion: 'La formación profesional integral concibe al aprendiz como un ser integral (saber, saber hacer y saber ser) que aporta al desarrollo de su comunidad y la empresa.'
      },
      {
        id: 'qf-2',
        pregunta: '¿Cuáles son los tres elementos primordiales plasmados en el escudo del SENA?',
        opciones: [
          'El sol naciente, el río Magdalena y la orquídea nacional.',
          'La rueda dentada (industria), el caduceo (comercio/servicios) y el rayo (agro/energía).',
          'Un libro abierto, una antorcha olímpica y la balanza de la justicia.',
          'Una computadora portátil, una espiga de trigo y una paloma blanca.'
        ],
        respuestaCorrecta: 1,
        explicacion: 'La rueda dentada, el caduceo y el rayo o haz agropecuario representan los tres grandes sectores productivos que impulsan el desarrollo de Colombia.'
      },
      {
        id: 'qf-3',
        pregunta: '¿Cuál es el significado del logosímbolo del SENA?',
        opciones: [
          'Un engranaje cibernético de inteligencia artificial.',
          'El aprendiz o ser humano caminando erguido hacia el horizonte del futuro y el conocimiento.',
          'Un árbol con tres raíces que representan las tres cordilleras colombianas.',
          'Un mapa estilizado del territorio nacional.'
        ],
        respuestaCorrecta: 1,
        explicacion: 'El logosímbolo sintetiza la figura humana avanzando sobre las sendas del conocimiento, la innovación y el trabajo digno.'
      },
      {
        id: 'qf-4',
        pregunta: '¿Cuál es la primera línea del coro del Himno del SENA?',
        opciones: [
          '¡Gloria inmarcesible, júbilo inmortal!',
          'Estudiantes del SENA, ¡adelante!',
          'Compañeros de estudio marchemos con fe.',
          'Por la patria y la ciencia luchemos sin fin.'
        ],
        respuestaCorrecta: 1,
        explicacion: '"Estudiantes del SENA, ¡adelante! Por Colombia luchad con amor..." es el vibrante inicio del coro institucional.'
      },
      {
        id: 'qf-5',
        pregunta: '¿Es un derecho del aprendiz recibir oportunamente los resultados de sus evaluaciones y planes de mejora?',
        opciones: [
          'No, el instructor solo publica notas al final de año.',
          'Sí, en un plazo máximo de ocho (8) días hábiles siguientes a la entrega de la evidencia.',
          'Solo si el aprendiz paga un derecho pecuniario administrativo.',
          'Únicamente si la nota es aprobatoria.'
        ],
        respuestaCorrecta: 1,
        explicacion: 'El Reglamento garantiza el derecho a conocer valoraciones y retroalimentaciones pedagógicas en un plazo no mayor a 8 días hábiles.'
      },
      {
        id: 'qf-6',
        pregunta: '¿Qué consecuencia inmediata acarrea cometer plagio doloso en una evidencia evaluativa de formación?',
        opciones: [
          'Ninguna, porque internet es de libre copia.',
          'Constituye una falta grave o gravísima que da lugar a proceso disciplinario en Comité de Evaluación.',
          'El instructor le da automáticamente un premio de investigación.',
          'Solo se le pide que vuelva a enviar el mismo archivo al final del trimestre.'
        ],
        respuestaCorrecta: 1,
        explicacion: 'El plagio atenta contra la integridad académica y ética institucional, siendo tipificado como falta grave que puede originar sanciones formales.'
      },
      {
        id: 'qf-7',
        pregunta: '¿Qué plataforma tecnológica del SENA es el Sistema de Gestión Académica donde se consultan notas, matrículas y certificaciones?',
        opciones: [
          'SOFIA Plus',
          'Microsoft Excel',
          'WhatsApp Institucional',
          'Wikipedia SENA'
        ],
        respuestaCorrecta: 0,
        explicacion: 'SOFIA Plus (Sistema Optimizado para la Formación Integral del Aprendizaje Activo) administra la gestión académica de la entidad.'
      },
      {
        id: 'qf-8',
        pregunta: '¿Cuál es el Ambiente Virtual de Aprendizaje (LMS) oficial para interactuar con guías, foros y evidencias virtuales en el SENA?',
        opciones: [
          'ZAJUNA',
          'Facebook Groups',
          'Telegram Bot',
          'Discord SENA'
        ],
        respuestaCorrecta: 0,
        explicacion: 'ZAJUNA es el ecosistema LMS oficial del SENA para el desarrollo de actividades virtuales y seguimiento pedagógico.'
      },
      {
        id: 'qf-9',
        pregunta: '¿Cuáles son las dos grandes etapas secuenciales que conforman un programa de formación titulada en el SENA?',
        opciones: [
          'Etapa Preliminar y Etapa Final.',
          'Etapa Lectiva y Etapa Productiva.',
          'Etapa de Admisión y Etapa de Deserción.',
          'Etapa Teórica y Etapa Militar.'
        ],
        respuestaCorrecta: 1,
        explicacion: 'Todo programa titulado consta de la Etapa Lectiva (adquisición de competencias en ambientes de formación) y la Etapa Productiva (aplicación en el sector real empresarial).'
      },
      {
        id: 'qf-10',
        pregunta: '¿Qué instancia institucional vela por el deporte, la salud, la cultura y el apoyo psicosocial de los aprendices?',
        opciones: [
          'La División de Compras y Contratación.',
          'El Área de Bienestar al Aprendiz.',
          'La Agencia Nacional de Minería.',
          'El Fondo Rotatorio de Aduanas.'
        ],
        respuestaCorrecta: 1,
        explicacion: 'Bienestar al Aprendiz diseña e implementa programas para el desarrollo humano, la salud física/mental, la recreación y los auxilios de sostenimiento.'
      }
    ]
  }
};

export const BADGES: Badge[] = [
  {
    id: 'badge-identidad',
    nombre: 'Embajador de la Identidad',
    descripcion: 'Aprobó con honores la unidad de historia, escudo, himno y valores institucionales.',
    icono: 'Sparkles',
    modulo: 'mod-identidad',
    color: '#39A900'
  },
  {
    id: 'badge-normativa',
    nombre: 'Guardián del Reglamento',
    descripcion: 'Domina los derechos, deberes, debido proceso y resolución de dilemas formativos.',
    icono: 'Scale',
    modulo: 'mod-normativa',
    color: '#00324D'
  },
  {
    id: 'badge-ecosistema',
    nombre: 'Navegante Tecnológico',
    descripcion: 'Conoce a la perfección las plataformas ZAJUNA, SOFIA Plus y Bienestar.',
    icono: 'Laptop',
    modulo: 'mod-ecosistema',
    color: '#0284C7'
  },
  {
    id: 'badge-simulador',
    nombre: 'Juez del Comité',
    descripcion: 'Resolvió con éxito los casos de convivencia y comités disciplinarios.',
    icono: 'ShieldCheck',
    modulo: 'mod-normativa',
    color: '#D97706'
  },
  {
    id: 'badge-certificacion',
    nombre: 'Inducción SENA Aprobada',
    descripcion: 'Completó al 100% todos los módulos y aprobó el examen integral final.',
    icono: 'Award',
    modulo: 'mod-evaluacion',
    color: '#39A900'
  }
];

export const MOCK_APPRENTICE: ApprenticeProgress = {
  id: 'apr-current',
  nombre: 'Wilfren Ortega',
  documento: '1098765432',
  email: 'wilfrenortega@gmail.com',
  ficha: '2829104',
  programa: 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
  centro: 'Centro de Servicios Financieros',
  regional: 'Regional Distrito Capital',
  fechaInicio: '10/11/2026',
  ultimoAcceso: 'Hoy a las 09:15 AM',
  progresoGlobal: 35,
  modulosCompletados: ['mod-identidad'],
  quizzesCompletados: {
    'quiz-identidad': {
      puntaje: 100,
      maxPuntaje: 100,
      aprobado: true,
      fecha: '10/11/2026'
    }
  },
  casosCompletados: ['caso-1'],
  insignias: ['badge-identidad'],
  estado: 'En Progreso',
  observacionesInstructor: [
    'Excelente apropiación de los símbolos del SENA en la primera jornada.',
    'Participación activa en el análisis del caso de ética de software.'
  ]
};

export const MOCK_COHORT_APPRENTICES: ApprenticeProgress[] = [
  MOCK_APPRENTICE,
  {
    id: 'apr-1',
    nombre: 'Camila Andrea Gómez Suárez',
    documento: '1014234567',
    email: 'cagomez@misena.edu.co',
    ficha: '2829104',
    programa: 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
    centro: 'Centro de Servicios Financieros',
    regional: 'Regional Distrito Capital',
    fechaInicio: '10/11/2026',
    ultimoAcceso: 'Hoy a las 11:20 AM',
    progresoGlobal: 100,
    modulosCompletados: ['mod-identidad', 'mod-normativa', 'mod-ecosistema', 'mod-evaluacion'],
    quizzesCompletados: {
      'quiz-identidad': { puntaje: 100, maxPuntaje: 100, aprobado: true, fecha: '10/11/2026' },
      'quiz-normativa': { puntaje: 100, maxPuntaje: 100, aprobado: true, fecha: '10/11/2026' },
      'quiz-final': { puntaje: 90, maxPuntaje: 100, aprobado: true, fecha: '10/11/2026' }
    },
    casosCompletados: ['caso-1', 'caso-2', 'caso-3'],
    insignias: ['badge-identidad', 'badge-normativa', 'badge-ecosistema', 'badge-simulador', 'badge-certificacion'],
    estado: 'Completado',
    observacionesInstructor: ['Inducción completada satisfactoriamente con honores.']
  },
  {
    id: 'apr-2',
    nombre: 'Mateo Sebastián Rojas Pardo',
    documento: '1023456789',
    email: 'msrojas@misena.edu.co',
    ficha: '2829104',
    programa: 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
    centro: 'Centro de Servicios Financieros',
    regional: 'Regional Distrito Capital',
    fechaInicio: '10/11/2026',
    ultimoAcceso: 'Ayer a las 04:45 PM',
    progresoGlobal: 70,
    modulosCompletados: ['mod-identidad', 'mod-normativa'],
    quizzesCompletados: {
      'quiz-identidad': { puntaje: 80, maxPuntaje: 100, aprobado: true, fecha: '09/11/2026' },
      'quiz-normativa': { puntaje: 80, maxPuntaje: 100, aprobado: true, fecha: '10/11/2026' }
    },
    casosCompletados: ['caso-1', 'caso-2'],
    insignias: ['badge-identidad', 'badge-normativa'],
    estado: 'En Progreso',
    observacionesInstructor: ['Buen ritmo de lectura en el reglamento.']
  },
  {
    id: 'apr-3',
    nombre: 'Laura Sofía Castro Morales',
    documento: '1034567890',
    email: 'lscastro@misena.edu.co',
    ficha: '2829104',
    programa: 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
    centro: 'Centro de Servicios Financieros',
    regional: 'Regional Distrito Capital',
    fechaInicio: '10/11/2026',
    ultimoAcceso: 'Hoy a las 08:10 AM',
    progresoGlobal: 100,
    modulosCompletados: ['mod-identidad', 'mod-normativa', 'mod-ecosistema', 'mod-evaluacion'],
    quizzesCompletados: {
      'quiz-identidad': { puntaje: 100, maxPuntaje: 100, aprobado: true, fecha: '10/11/2026' },
      'quiz-normativa': { puntaje: 100, maxPuntaje: 100, aprobado: true, fecha: '10/11/2026' },
      'quiz-final': { puntaje: 100, maxPuntaje: 100, aprobado: true, fecha: '10/11/2026' }
    },
    casosCompletados: ['caso-1', 'caso-2', 'caso-3'],
    insignias: ['badge-identidad', 'badge-normativa', 'badge-ecosistema', 'badge-simulador', 'badge-certificacion'],
    estado: 'Completado'
  },
  {
    id: 'apr-4',
    nombre: 'Juan David Henao Beltrán',
    documento: '1045678901',
    email: 'jdhenao@misena.edu.co',
    ficha: '2829104',
    programa: 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
    centro: 'Centro de Servicios Financieros',
    regional: 'Regional Distrito Capital',
    fechaInicio: '10/11/2026',
    ultimoAcceso: 'Hace 3 días',
    progresoGlobal: 15,
    modulosCompletados: [],
    quizzesCompletados: {},
    casosCompletados: [],
    insignias: [],
    estado: 'En Riesgo',
    observacionesInstructor: ['Alerta temprana: No ha completado la lectura de símbolos ni el primer cuestionario.']
  },
  {
    id: 'apr-5',
    nombre: 'Ana María Quintero Duque',
    documento: '1056789012',
    email: 'amquintero@misena.edu.co',
    ficha: '2829104',
    programa: 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
    centro: 'Centro de Servicios Financieros',
    regional: 'Regional Distrito Capital',
    fechaInicio: '10/11/2026',
    ultimoAcceso: 'Hoy a las 10:05 AM',
    progresoGlobal: 60,
    modulosCompletados: ['mod-identidad'],
    quizzesCompletados: {
      'quiz-identidad': { puntaje: 100, maxPuntaje: 100, aprobado: true, fecha: '10/11/2026' }
    },
    casosCompletados: ['caso-1'],
    insignias: ['badge-identidad'],
    estado: 'En Progreso'
  },
  {
    id: 'apr-6',
    nombre: 'Brayan Estiven Muñoz Vera',
    documento: '1067890123',
    email: 'bmunoz@misena.edu.co',
    ficha: '2829104',
    programa: 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
    centro: 'Centro de Servicios Financieros',
    regional: 'Regional Distrito Capital',
    fechaInicio: '10/11/2026',
    ultimoAcceso: 'Ayer a las 02:15 PM',
    progresoGlobal: 85,
    modulosCompletados: ['mod-identidad', 'mod-normativa', 'mod-ecosistema'],
    quizzesCompletados: {
      'quiz-identidad': { puntaje: 100, maxPuntaje: 100, aprobado: true, fecha: '09/11/2026' },
      'quiz-normativa': { puntaje: 80, maxPuntaje: 100, aprobado: true, fecha: '10/11/2026' }
    },
    casosCompletados: ['caso-1', 'caso-2', 'caso-3'],
    insignias: ['badge-identidad', 'badge-normativa', 'badge-ecosistema', 'badge-simulador'],
    estado: 'En Progreso'
  },
  {
    id: 'apr-7',
    nombre: 'Daniela Fernanda Cárdenas Niño',
    documento: '1078901234',
    email: 'dfcardenas@misena.edu.co',
    ficha: '2829104',
    programa: 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
    centro: 'Centro de Servicios Financieros',
    regional: 'Regional Distrito Capital',
    fechaInicio: '10/11/2026',
    ultimoAcceso: 'Hace 4 días',
    progresoGlobal: 10,
    modulosCompletados: [],
    quizzesCompletados: {},
    casosCompletados: [],
    insignias: [],
    estado: 'En Riesgo',
    observacionesInstructor: ['Citada por coordinación para verificar conectividad a internet.']
  },
  {
    id: 'apr-8',
    nombre: 'Santiago Andrés Pinzón Vargas',
    documento: '1089012345',
    email: 'sapinzon@misena.edu.co',
    ficha: '2829104',
    programa: 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
    centro: 'Centro de Servicios Financieros',
    regional: 'Regional Distrito Capital',
    fechaInicio: '10/11/2026',
    ultimoAcceso: 'Hoy a las 09:40 AM',
    progresoGlobal: 100,
    modulosCompletados: ['mod-identidad', 'mod-normativa', 'mod-ecosistema', 'mod-evaluacion'],
    quizzesCompletados: {
      'quiz-identidad': { puntaje: 100, maxPuntaje: 100, aprobado: true, fecha: '10/11/2026' },
      'quiz-normativa': { puntaje: 100, maxPuntaje: 100, aprobado: true, fecha: '10/11/2026' },
      'quiz-final': { puntaje: 90, maxPuntaje: 100, aprobado: true, fecha: '10/11/2026' }
    },
    casosCompletados: ['caso-1', 'caso-2', 'caso-3'],
    insignias: ['badge-identidad', 'badge-normativa', 'badge-ecosistema', 'badge-simulador', 'badge-certificacion'],
    estado: 'Completado'
  }
];

export const GLOSSARY_TERMS = [
  {
    termino: 'RAP (Resultado de Aprendizaje)',
    significado: 'Indicadores observables que evidencian los conocimientos, destrezas y actitudes logradas por el aprendiz durante el proceso formativo.'
  },
  {
    termino: 'Ficha de Caracterización',
    significado: 'Código numérico de 7 cifras que identifica unívocamente a un grupo de aprendices matriculados en un programa y centro de formación específico.'
  },
  {
    termino: 'Guía de Aprendizaje',
    significado: 'Instrumento pedagógico diseñado por el equipo de instructores que orienta al aprendiz paso a paso en las actividades a desarrollar para alcanzar los RAP.'
  },
  {
    termino: 'SOFIA Plus',
    significado: 'Sistema Optimizado para la Formación Integral del Aprendizaje Activo. Es la plataforma oficial donde se registran inscripciones, estados de matrícula y certificaciones.'
  },
  {
    termino: 'ZAJUNA',
    significado: 'Nuevo Ambiente Virtual de Aprendizaje (LMS) institucional del SENA en el cual se gestionan los contenidos interactivos, foros y evidencias.'
  },
  {
    termino: 'Sennova',
    significado: 'Sistema de Investigación, Desarrollo Tecnológico e Innovación del SENA, donde los aprendices participan en semilleros de investigación aplicada.'
  },
  {
    termino: 'Fondo Emprender',
    significado: 'Fondo de capital semilla creado por el Gobierno Nacional y administrado por el SENA para financiar iniciativas empresariales de aprendices y egresados.'
  },
  {
    termino: 'Etapa Productiva',
    significado: 'Periodo en el que el aprendiz aplica y consolida sus competencias en un entorno laboral real (contrato de aprendizaje, pasantía, vínculo laboral, proyecto productivo o monitoría).'
  },
  {
    termino: 'Comité de Evaluación y Seguimiento',
    significado: 'Instancia colegiada del Centro de Formación que analiza el rendimiento académico y disciplinario de los aprendices, garantizando el debido proceso formativo.'
  },
  {
    termino: 'Plan de Mejoramiento',
    significado: 'Medida pedagógica concertada entre el instructor y el aprendiz para superar dificultades en el logro de resultados de aprendizaje o subsanar faltas leves de convivencia.'
  },
  {
    termino: 'Escudo Institucional del SENA',
    significado: 'Emblema heráldico oficial que sintetiza los tres sectores económicos de Colombia: el piñón (industria), el caduceo (comercio y servicios) y el rayo con espigas (sector primario y agropecuario).'
  },
  {
    termino: 'Logosímbolo del SENA',
    significado: 'Representación gráfica estilizada del aprendiz caminando hacia el futuro, simbolizando el desarrollo humano integral a través del saber, hacer y convivir.'
  }
];
