export interface Vacante {
  id: string;
  slug: string;
  titulo: string;
  empresa: string;
  logo: string;
  provincia: 'Panamá' | 'Panamá Oeste' | 'Colón' | 'Chiriquí' | 'Remoto/Híbrido';
  zona: string;
  marcoLegal: 'Ley 513 de Pasantías' | 'Mi Primer Empleo (D.E. 27)' | 'Práctica Profesional Curricular' | 'Trainee SEM / Multinacional';
  remuneracion: string;
  remuneracionValor: number;
  area: 'Ingeniería & Software' | 'Finanzas & Contabilidad' | 'Marketing & Creativo' | 'Operaciones & Logística' | 'Ciencias & Salud' | 'Legal & RRHH';
  universidadAfin: string[];
  horasSemanales: number;
  duracionMeses: number;
  destacada: boolean;
  cuposDisponibles: number;
  tutorAsignado: string;
  descripcionCorta: string;
  requisitosFormacion: string[];
  beneficios: string[];
  fechaPublicacion: string;
}

export const vacantes: Vacante[] = [
  {
    id: "VAC-PAN-001",
    slug: "pasante-analisis-datos-pedidosya",
    titulo: "Pasante en Análisis de Datos y Business Intelligence",
    empresa: "PedidosYa Panamá (PeYantías)",
    logo: "🛵",
    provincia: "Panamá",
    zona: "Costa del Este",
    marcoLegal: "Ley 513 de Pasantías",
    remuneracion: "B/. 450.00 / mes (100% libre de deducciones)",
    remuneracionValor: 450,
    area: "Ingeniería & Software",
    universidadAfin: ["UTP", "UP", "USMA"],
    horasSemanales: 40,
    duracionMeses: 6,
    destacada: true,
    cuposDisponibles: 2,
    tutorAsignado: "Gerente de BI & Analytics (Ing. de Sistemas)",
    descripcionCorta: "Aprende modelado de datos en BigQuery y creación de dashboards de métricas operativas en un equipo ágil regional.",
    requisitosFormacion: [
      "Estudiante activo de Lic. en Ingeniería de Sistemas, Software, Datos o Industrial (últimos años)",
      "Interés genuino por SQL, Excel avanzado y métricas de e-commerce",
      "0 meses de experiencia requeridos (capacitación interna desde el primer día)",
      "Inglés intermedio (EF SET B1 o superior deseable)"
    ],
    beneficios: [
      "Asignación mensual de B/. 450.00 exenta de descuentos de CSS/SE",
      "Póliza privada de riesgos profesionales cubierta al 100%",
      "Crédito de alimentación en PedidosYa",
      "Carta de cumplimiento oficial para convalidar práctica universitaria de graduación"
    ],
    fechaPublicacion: "2026-10-24"
  },
  {
    id: "VAC-PAN-002",
    slug: "practicante-talento-humano-banco-general",
    titulo: "Practicante de Aprendizaje y Desarrollo Organizacional",
    empresa: "Banco General",
    logo: "🏦",
    provincia: "Panamá",
    zona: "Calle 50 / Obarrio",
    marcoLegal: "Práctica Profesional Curricular",
    remuneracion: "B/. 450.00 / mes (Estipendio formativo)",
    remuneracionValor: 450,
    area: "Legal & RRHH",
    universidadAfin: ["UP", "USMA", "ULatina", "UIP"],
    horasSemanales: 35,
    duracionMeses: 4,
    destacada: true,
    cuposDisponibles: 3,
    tutorAsignado: "Especialista Sénior de Capacitación y Cultura",
    descripcionCorta: "Apoyo en el despliegue de plataformas de formación interna, onboarding de colaboradores y gestión de iniciativas de bienestar corporativo.",
    requisitosFormacion: [
      "Cursando último año de Psicología, Recursos Humanos, Administración o Comunicación",
      "Carta de autorización de la facultad para realizar práctica universitaria",
      "Habilidades de comunicación empática y dinamismo para talleres formativos",
      "0 experiencia laboral requerida"
    ],
    beneficios: [
      "Estipendio de B/. 450.00 mensuales",
      "Mentoría continua con psicólogos organizacionales",
      "Certificado formal de horas prácticas (hasta 400h)",
      "Acceso al programa de beneficios corporativos"
    ],
    fechaPublicacion: "2026-10-23"
  },
  {
    id: "VAC-PAN-003",
    slug: "trainee-supply-chain-dell-sem",
    titulo: "Global Supply Chain Operations Trainee (SEM)",
    empresa: "Dell Technologies (Sede SEM)",
    logo: "💻",
    provincia: "Panamá Pacífico",
    zona: "Howard / Panamá Pacífico",
    marcoLegal: "Trainee SEM / Multinacional",
    remuneracion: "B/. 1,150.00 / mes (Beneficios corporativos)",
    remuneracionValor: 1150,
    area: "Operaciones & Logística",
    universidadAfin: ["UTP", "UP", "USMA", "ULatina"],
    horasSemanales: 40,
    duracionMeses: 12,
    destacada: true,
    cuposDisponibles: 4,
    tutorAsignado: "Director Regional de Logística Américas",
    descripcionCorta: "Formación intensiva de 12 meses en cadenas de suministro globales, gestión de inventarios y logística internacional para Latinoamérica.",
    requisitosFormacion: [
      "Estudiante de último año o recién egresado sin experiencia de Ing. Industrial, Logística o Comercio",
      "Inglés avanzado obligatorio (EF SET B2 o superior verificable en plataforma)",
      "Proactividad, orientación al detalle y capacidad analítica",
      "0 experiencia laboral exigida"
    ],
    beneficios: [
      "Remuneración competitiva de B/. 1,150.00 bajo régimen especial SEM",
      "Seguro médico privado integral y seguro de vida",
      "Ruta de transporte gratuita hacia Panamá Pacífico",
      "Posibilidad de permanencia en contrato indefinido al finalizar el programa"
    ],
    fechaPublicacion: "2026-10-22"
  },
  {
    id: "VAC-PAN-004",
    slug: "pexp-ingenieria-mantenimiento-acp",
    titulo: "Estudiante en Práctica - Mantenimiento Electromecánico (PEXP)",
    empresa: "Autoridad del Canal de Panamá (ACP)",
    logo: "🚢",
    provincia: "Panamá",
    zona: "Balboa / Miraflores",
    marcoLegal: "Práctica Profesional Curricular",
    remuneracion: "B/. 9.35 / hora (Aprox. B/. 1,496.00/mes)",
    remuneracionValor: 1496,
    area: "Ingeniería & Software",
    universidadAfin: ["UTP", "UP"],
    horasSemanales: 40,
    duracionMeses: 12,
    destacada: true,
    cuposDisponibles: 2,
    tutorAsignado: "Ingeniero Supervisor de Esclusas (Idóneo UTP)",
    descripcionCorta: "Programa de Experiencia Profesional (PEXP) en esclusas del Canal de Panamá. Diagnóstico preventivo y sistemas de potencia.",
    requisitosFormacion: [
      "Estudiante de último año de Ing. Electromecánica, Mecánica, Eléctrica o Naval (UTP o UP)",
      "Índice académico acumulativo mínimo de 1.75 / 3.00 (verificable en historial oficial)",
      "Disponibilidad a tiempo completo para contrato formativo de 12 meses",
      "Sin experiencia laboral previa en el sector"
    ],
    beneficios: [
      "Tarifa formativa oficial ACP de B/. 9.35 por hora laborada",
      "Experiencia técnica de clase mundial en la infraestructura crítica del país",
      "Equipo de protección personal (EPP) y capacitaciones de seguridad marítima",
      "Convalidación total del Trabajo de Graduación"
    ],
    fechaPublicacion: "2026-10-21"
  },
  {
    id: "VAC-PAN-005",
    slug: "pasante-contabilidad-junior-ortiz-mejia",
    titulo: "Pasante en Auditoría y Normas NIIF",
    empresa: "Ortiz & Mejía Consultores Contables",
    logo: "📊",
    provincia: "Panamá",
    zona: "El Cangrejo / Bella Vista",
    marcoLegal: "Ley 513 de Pasantías",
    remuneracion: "B/. 450.00 / mes (100% deducible fiscal)",
    remuneracionValor: 450,
    area: "Finanzas & Contabilidad",
    universidadAfin: ["UP", "UTP", "USMA", "ULatina", "UNACHI"],
    horasSemanales: 40,
    duracionMeses: 6,
    destacada: false,
    cuposDisponibles: 2,
    tutorAsignado: "Socio de Auditoría Externa (CPA Idóneo)",
    descripcionCorta: "Iníciate en la revisión de balances, conciliaciones bancarias y preparación de papeles de trabajo bajo NIIF para PyMEs.",
    requisitosFormacion: [
      "Estudiante de Licenciatura en Contabilidad, Auditoría o Finanzas (3er o 4to año)",
      "Conocimientos teóricos de asientos contables y ciclo financiero",
      "Manejo básico de hojas de cálculo (Excel)",
      "0 experiencia requerida, ganas de formarse hacia la idoneidad de CPA"
    ],
    beneficios: [
      "Estipendio de B/. 450.00 libres de descuentos según Ley 513",
      "Póliza de riesgos cubierta por la firma",
      "Mentoría directa por Contadores Públicos Autorizados (CPA)",
      "Capacitación en software contable Peachtree / QuickBooks"
    ],
    fechaPublicacion: "2026-10-20"
  },
  {
    id: "VAC-PAN-006",
    slug: "practicante-marketing-digital-onen",
    titulo: "Practicante de Marketing Digital e Inteligencia Artificial",
    empresa: "ONEN Creative & Tech Agency",
    logo: "🎨",
    provincia: "Panamá",
    zona: "San Francisco / Vía Porras",
    marcoLegal: "Práctica Profesional Curricular",
    remuneracion: "B/. 450.00 / mes (Ayuda de transporte y alimentos)",
    remuneracionValor: 450,
    area: "Marketing & Creativo",
    universidadAfin: ["UP", "USMA", "ULatina", "UIP", "ITSE"],
    horasSemanales: 30,
    duracionMeses: 4,
    destacada: false,
    cuposDisponibles: 1,
    tutorAsignado: "Directora de Estrategia Digital & Contenido",
    descripcionCorta: "Gestión de parrillas de contenido, redacción con herramientas de IA generativa y análisis de analíticas web.",
    requisitosFormacion: [
      "Estudiante de Mercadeo, Publicidad, Diseño Gráfico o Comunicación Social",
      "Creatividad visual, ortografía impecable y manejo de Canva o Figma básico",
      "0 experiencia laboral requerida; portafolio universitario o proyectos de clase bienvenidos",
      "Modalidad semi-presencial (3 días oficina, 2 días remoto)"
    ],
    beneficios: [
      "Estipendio de B/. 450.00 mensuales",
      "Flexibilidad horaria compatible con horarios de clases",
      "Certificación formal de práctica universitaria de 400 horas",
      "Acceso a licencias premium de software creativo e IA"
    ],
    fechaPublicacion: "2026-10-19"
  },
  {
    id: "VAC-PAN-007",
    slug: "asistente-junior-calidad-productos-toledano",
    titulo: "Pasante en Control de Calidad e Inocuidad de Alimentos",
    empresa: "Productos Toledano S.A.",
    logo: "🍗",
    provincia: "Panamá Oeste",
    zona: "La Chorrera / Capira",
    marcoLegal: "Mi Primer Empleo (D.E. 27)",
    remuneracion: "B/. 620.00 / mes (B/. 300 subsidiados por MITRADEL)",
    remuneracionValor: 620,
    area: "Ciencias & Salud",
    universidadAfin: ["UP", "UTP"],
    horasSemanales: 40,
    duracionMeses: 3,
    destacada: true,
    cuposDisponibles: 3,
    tutorAsignado: "Jefa de Aseguramiento de Calidad (Bióloga/Química)",
    descripcionCorta: "Apoyo en muestreo microbiológico, verificación de puntos críticos HACCP y registros de trazabilidad en planta industrial.",
    requisitosFormacion: [
      "Egresado reciente o estudiante de último año de Ing. de Alimentos, Química o Biología",
      "Residente en Panamá Oeste (La Chorrera, Arraiján o Capira) con interés industrial",
      "Carnet blanco y verde de manipulación de alimentos vigente",
      "0 meses de trabajo formal previo (Programa Mi Primer Empleo D.E. 27)"
    ],
    beneficios: [
      "Salario formal de B/. 620.00 con seguro colectivo otorgado por MITRADEL",
      "Almuerzo subsidiado en comedor industrial de planta",
      "Ruta de transporte local en Panamá Oeste",
      "Opción de contrato permanente al cumplir los 3 meses de pasantía"
    ],
    fechaPublicacion: "2026-10-18"
  },
  {
    id: "VAC-PAN-008",
    slug: "practicante-desarrollo-web-rootstack",
    titulo: "Practicante Frontend Developer (React / TypeScript)",
    empresa: "Rootstack Panamá",
    logo: "⚡",
    provincia: "Remoto/Híbrido",
    zona: "Ciudad de Panamá / Teletrabajo",
    marcoLegal: "Práctica Profesional Curricular",
    remuneracion: "B/. 500.00 / mes (Estipendio formativo tech)",
    remuneracionValor: 500,
    area: "Ingeniería & Software",
    universidadAfin: ["UTP", "UP", "ITSE"],
    horasSemanales: 40,
    duracionMeses: 6,
    destacada: true,
    cuposDisponibles: 2,
    tutorAsignado: "Tech Lead Frontend & Arquitecto de Software",
    descripcionCorta: "Aprende buenas prácticas de código limpio, consumo de APIs REST/GraphQL y arquitectura por componentes en proyectos corporativos.",
    requisitosFormacion: [
      "Estudiante de último semestre de Ing. de Software o Ciencias Computacionales (UTP/UP/ITSE)",
      "Bases de HTML, CSS, JavaScript y Git (enlace a proyectos universitarios o GitHub)",
      "0 experiencia laboral requerida (se evaluará lógica y pasión por aprender)",
      "Inglés técnico de lectura (EF SET B1+)"
    ],
    beneficios: [
      "Estipendio mensual de B/. 500.00",
      "Modalidad 100% remota o híbrida con oficina disponible en Obarrio",
      "Acompañamiento 1 a 1 de código por desarrolladores sénior",
      "Convalidación directa de 6 meses de práctica profesional UTP"
    ],
    fechaPublicacion: "2026-10-17"
  },
  {
    id: "VAC-PAN-009",
    slug: "trainee-recursos-humanos-procter-gamble",
    titulo: "Early Talent Trainee - Human Resources (SEM)",
    empresa: "Procter & Gamble (P&G Latam HQ)",
    logo: "🌐",
    provincia: "Panamá",
    zona: "Costa del Este (SEM Hub)",
    marcoLegal: "Trainee SEM / Multinacional",
    remuneracion: "B/. 1,300.00 / mes (Paquete multinacional)",
    remuneracionValor: 1300,
    area: "Legal & RRHH",
    universidadAfin: ["USMA", "UTP", "UP", "ULatina"],
    horasSemanales: 40,
    duracionMeses: 12,
    destacada: true,
    cuposDisponibles: 2,
    tutorAsignado: "HR Business Partner Latam Director",
    descripcionCorta: "Diseño de programas de talento regional, analítica de compensación y gestión del clima organizacional en la sede regional de P&G.",
    requisitosFormacion: [
      "Estudiante de penúltimo o último año de Ing. Industrial, Administración o Psicología",
      "Fluidez en inglés imprescindible (EF SET B2 o C1 verificable)",
      "Liderazgo estudiantil, espíritu colaborativo y orientación a resultados",
      "0 experiencia laboral formal requerida"
    ],
    beneficios: [
      "Remuneración de B/. 1,300.00 mensuales bajo estipendio multinacional SEM",
      "Seguro médico privado integral y seguro de vida",
      "Gimnasio corporativo en sitio y política flexible de teletrabajo",
      "Proyección para ingresar al programa de gestión internacional"
    ],
    fechaPublicacion: "2026-10-16"
  },
  {
    id: "VAC-PAN-010",
    slug: "pasante-logistica-zona-libre-colon",
    titulo: "Pasante en Logística Aduanera y Reexpedición",
    empresa: "Logística del Caribe ZLC",
    logo: "📦",
    provincia: "Colón",
    zona: "Zona Libre de Colón (France Field)",
    marcoLegal: "Ley 513 de Pasantías",
    remuneracion: "B/. 450.00 / mes (100% deducible fiscal)",
    remuneracionValor: 450,
    area: "Operaciones & Logística",
    universidadAfin: ["UP", "UTP", "UMIP"],
    horasSemanales: 40,
    duracionMeses: 6,
    destacada: false,
    cuposDisponibles: 2,
    tutorAsignado: "Gerente de Operaciones Aduaneras (Lic. en Logística)",
    descripcionCorta: "Capacitación en trámites del sistema DMCE de Zona Libre, consolidación de carga en bodegas y coordinación con líneas navieras.",
    requisitosFormacion: [
      "Estudiante de carreras de Logística, Transporte Multimodal o Negocios Internacionales (Colón)",
      "Residente en la provincia de Colón con motivación por el comercio exterior",
      "Manejo de herramientas ofimáticas",
      "0 meses de experiencia laboral previa"
    ],
    beneficios: [
      "Asignación mensual de B/. 450.00 libres de descuentos",
      "Póliza privada de accidentes laborales cubierta",
      "Transporte interno en Zona Libre",
      "Certificación formal de pasantía avalada por MITRADEL"
    ],
    fechaPublicacion: "2026-10-15"
  },
  {
    id: "VAC-PAN-011",
    slug: "practicante-ingenieria-civil-cimentaciones",
    titulo: "Practicante en Supervisión de Obra y Control de Ensayos",
    empresa: "Cimentaciones y Estructuras de Panamá",
    logo: "🏗️",
    provincia: "Panamá",
    zona: "Juan Díaz / Vía Tocumen",
    marcoLegal: "Práctica Profesional Curricular",
    remuneracion: "B/. 450.00 / mes (Apoyo de práctica)",
    remuneracionValor: 450,
    area: "Ingeniería & Software",
    universidadAfin: ["UTP", "UP"],
    horasSemanales: 40,
    duracionMeses: 6,
    destacada: false,
    cuposDisponibles: 2,
    tutorAsignado: "Ingeniero Residente de Proyecto (Idoneidad Junta Técnica)",
    descripcionCorta: "Acompañamiento en control de calidad de concreto, lectura de planos estructurales en AutoCAD y bitácora de obra civil.",
    requisitosFormacion: [
      "Estudiante de último año de Licenciatura en Ingeniería Civil (UTP)",
      "Índice académico mínimo de 1.50 para opción de graduación por práctica",
      "Conocimientos en AutoCAD y cálculo de cantidades de obra",
      "0 experiencia laboral requerida"
    ],
    beneficios: [
      "Estipendio mensual de B/. 450.00",
      "Equipo de protección completo para visita de campo",
      "Firma de cronograma Gantt y formularios oficiales F1/F2/F3 de la UTP",
      "Mentoría directa por ingenieros idóneos colegiados"
    ],
    fechaPublicacion: "2026-10-14"
  },
  {
    id: "VAC-PAN-012",
    slug: "pasante-asuntos-regulatorios-gsk",
    titulo: "Pasante en Asuntos Regulatorios Farmacéuticos (SEM)",
    empresa: "GlaxoSmithKline Panamá (GSK)",
    logo: "💊",
    provincia: "Panamá",
    zona: "Costa del Este",
    marcoLegal: "Trainee SEM / Multinacional",
    remuneracion: "B/. 1,100.00 / mes (Beneficios SEM)",
    remuneracionValor: 1100,
    area: "Ciencias & Salud",
    universidadAfin: ["UP", "ULatina"],
    horasSemanales: 40,
    duracionMeses: 12,
    destacada: true,
    cuposDisponibles: 1,
    tutorAsignado: "Gerente Regional de Asuntos Regulatorios Centroamérica",
    descripcionCorta: "Formación en registros sanitarios, documentación ante Ministerios de Salud de la región y farmacovigilancia.",
    requisitosFormacion: [
      "Estudiante de último año de Farmacia o Química Farmacéutica (UP)",
      "Inglés intermedio-avanzado (EF SET B2 deseable para contacto con plantas globales)",
      "Rigurosidad técnica, ética y atención minuciosa al detalle",
      "0 experiencia previa requerida"
    ],
    beneficios: [
      "B/. 1,100.00 mensuales bajo esquema de formación SEM",
      "Seguro médico privado y seguro dental",
      "Jornada de viernes corto y teletrabajo parcial",
      "Formación especializada en normativas internacionales FDA y EMA"
    ],
    fechaPublicacion: "2026-10-13"
  },
  {
    id: "VAC-PAN-013",
    slug: "practicante-finanzas-banco-aliado",
    titulo: "Practicante en Gestión de Crédito Comercial",
    empresa: "Banco Aliado",
    logo: "🏛️",
    provincia: "Panamá",
    zona: "Vía España / Bella Vista",
    marcoLegal: "Práctica Profesional Curricular",
    remuneracion: "B/. 450.00 / mes (Estipendio formativo)",
    remuneracionValor: 450,
    area: "Finanzas & Contabilidad",
    universidadAfin: ["UP", "USMA", "UTP", "ULatina"],
    horasSemanales: 40,
    duracionMeses: 4,
    destacada: false,
    cuposDisponibles: 2,
    tutorAsignado: "Vicepresidente Asistente de Análisis de Crédito",
    descripcionCorta: "Aprende el análisis de estados financieros, cálculo de ratios de liquidez/apalancamiento y elaboración de propuestas de crédito para empresas.",
    requisitosFormacion: [
      "Estudiante de último año de Finanzas, Banca, Economía o Contabilidad",
      "Buen manejo de Excel (fórmulas lógicas y financieras)",
      "Requisito de práctica profesional universitaria",
      "0 experiencia laboral requerida"
    ],
    beneficios: [
      "B/. 450.00 mensuales de estipendio libre de deducciones",
      "Capacitación en análisis de riesgo crediticio bancario",
      "Carta de cumplimiento de horas académicas",
      "Oportunidad de contratación fija al graduarse"
    ],
    fechaPublicacion: "2026-10-12"
  },
  {
    id: "VAC-PAN-014",
    slug: "pasante-soporte-redes-ciberseguridad-banistmo",
    titulo: "Pasante en Soporte de Redes y Ciberseguridad Básica",
    empresa: "Banistmo (Grupo Bancolombia)",
    logo: "🛡️",
    provincia: "Panamá",
    zona: "Torre Banistmo, Calle 50",
    marcoLegal: "Ley 513 de Pasantías",
    remuneracion: "B/. 450.00 / mes (100% deducible)",
    remuneracionValor: 450,
    area: "Ingeniería & Software",
    universidadAfin: ["UTP", "UP", "ITSE"],
    horasSemanales: 40,
    duracionMeses: 6,
    destacada: false,
    cuposDisponibles: 2,
    tutorAsignado: "Oficial Sénior de Seguridad de la Información (CISO Team)",
    descripcionCorta: "Supervisión de alertas de seguridad, configuración básica de accesos y soporte a infraestructura de telecomunicaciones.",
    requisitosFormacion: [
      "Estudiante activo de Redes Informáticas, Ciberseguridad o Telemática (UTP/ITSE)",
      "Conocimientos teóricos de modelo OSI, TCP/IP y sistemas operativos Windows/Linux",
      "0 meses de experiencia en el área",
      "Compromiso ético y confidencialidad estricta"
    ],
    beneficios: [
      "B/. 450.00 mensuales sin deducciones de seguro social",
      "Póliza privada de riesgos cubierta",
      "Acceso a la plataforma interna de cursos de ciberseguridad corporativa",
      "Convenio oficial avalado para práctica de graduación"
    ],
    fechaPublicacion: "2026-10-11"
  },
  {
    id: "VAC-PAN-015",
    slug: "practicante-comunicacion-corporativa-marriott",
    titulo: "Practicante en Relaciones Públicas y Experiencia del Huésped",
    empresa: "Marriott International Panamá",
    logo: "🏨",
    provincia: "Panamá",
    zona: "Albrook / Avenida Balboa",
    marcoLegal: "Práctica Profesional Curricular",
    remuneracion: "B/. 450.00 / mes (Alimentos incluidos)",
    remuneracionValor: 450,
    area: "Marketing & Creativo",
    universidadAfin: ["UP", "USMA", "ULatina", "UIP"],
    horasSemanales: 35,
    duracionMeses: 4,
    destacada: false,
    cuposDisponibles: 2,
    tutorAsignado: "Directora de Relaciones Públicas & Experiencia",
    descripcionCorta: "Protocolo de bienvenida para eventos ejecutivos, redacción de comunicaciones internas y monitoreo de satisfacción de clientes.",
    requisitosFormacion: [
      "Estudiante de Turismo, Hotelería, Comunicación Social o Relaciones Internacionales",
      "Excelente presencia, dicción y vocación de servicio",
      "Inglés conversacional fluido (EF SET B1 o B2)",
      "0 experiencia previa en hotelería de lujo"
    ],
    beneficios: [
      "Estipendio de B/. 450.00 mensuales",
      "Comidas completas durante el turno en el comedor de colaboradores",
      "Descuentos de alojamiento en hoteles Marriott a nivel mundial",
      "Convalidación formal de práctica universitaria"
    ],
    fechaPublicacion: "2026-10-10"
  },
  {
    id: "VAC-PAN-016",
    slug: "pasante-administracion-operativa-chiriqui",
    titulo: "Pasante en Administración y Facturación de Sucursal",
    empresa: "Distribuidora del Barú S.A.",
    logo: "🚚",
    provincia: "Chiriquí",
    zona: "David / Vía Interamericana",
    marcoLegal: "Ley 513 de Pasantías",
    remuneracion: "B/. 450.00 / mes (Ley 513 exenta)",
    remuneracionValor: 450,
    area: "Operaciones & Logística",
    universidadAfin: ["UNACHI", "UTP"],
    horasSemanales: 40,
    duracionMeses: 6,
    destacada: false,
    cuposDisponibles: 2,
    tutorAsignado: "Administrador Regional de Sucursal Chiriquí",
    descripcionCorta: "Apoyo en control de despachos hacia las provincias centrales, registro de facturas y atención a transportistas locales.",
    requisitosFormacion: [
      "Estudiante de Lic. en Administración, Logística o Contabilidad de UNACHI o UTP Chiriquí",
      "Residente en David o zonas aledañas",
      "Responsabilidad y ganas de aprender el ritmo de distribución mayorista",
      "0 experiencia previa requerida"
    ],
    beneficios: [
      "Asignación íntegra de B/. 450.00 mensuales sin deducciones fiscales",
      "Póliza de seguro contra accidentes cubierta",
      "Ambiente de trabajo colaborativo y regional",
      "Posibilidad de contratación como analista al concluir el periodo"
    ],
    fechaPublicacion: "2026-10-09"
  },
  {
    id: "VAC-PAN-017",
    slug: "trainee-customer-experience-maersk",
    titulo: "Customer Experience Operations Trainee (SEM)",
    empresa: "Maersk Panamá (Centro Regional SEM)",
    logo: "⚓",
    provincia: "Panamá",
    zona: "Costa del Este",
    marcoLegal: "Trainee SEM / Multinacional",
    remuneracion: "B/. 1,200.00 / mes (Beneficios SEM)",
    remuneracionValor: 1200,
    area: "Operaciones & Logística",
    universidadAfin: ["UMIP", "UTP", "UP", "USMA"],
    horasSemanales: 40,
    duracionMeses: 12,
    destacada: true,
    cuposDisponibles: 3,
    tutorAsignado: "Customer Experience Team Leader Centroamérica",
    descripcionCorta: "Gestión y seguimiento de embarques marítimos, coordinación con terminales portuarias y comunicación con clientes multinacionales.",
    requisitosFormacion: [
      "Estudiante de último año o graduando de Negocios Marítimos, Logística o Ing. Industrial",
      "Inglés avanzado indispensable (EF SET B2/C1 verificable)",
      "Habilidad para resolver problemas bajo presión y servicio al cliente",
      "0 experiencia laboral requerida"
    ],
    beneficios: [
      "Remuneración de B/. 1,200.00 bajo paquete multinacional",
      "Seguro médico privado con cobertura internacional",
      "Modalidad de trabajo flexible (híbrido 3x2)",
      "Programa global de desarrollo de carrera marítima"
    ],
    fechaPublicacion: "2026-10-08"
  },
  {
    id: "VAC-PAN-018",
    slug: "practicante-derecho-corporativo-morgan",
    titulo: "Practicante en Derecho Corporativo y Registro Mercantil",
    empresa: "Firma Jurídica Morgan & Asociados",
    logo: "⚖️",
    provincia: "Panamá",
    zona: "Avenida Aquilino de la Guardia",
    marcoLegal: "Práctica Profesional Curricular",
    remuneracion: "B/. 450.00 / mes (Estipendio formativo legal)",
    remuneracionValor: 450,
    area: "Legal & RRHH",
    universidadAfin: ["UP", "USMA", "ULatina", "ISAE"],
    horasSemanales: 35,
    duracionMeses: 6,
    destacada: false,
    cuposDisponibles: 2,
    tutorAsignado: "Abogado Asociado Sénior (Colegio Nacional de Abogados)",
    descripcionCorta: "Redacción de actas de asamblea, cotejo de escrituras ante Notarías y Registro Público, y revisión de cumplimiento Ley 81 de datos.",
    requisitosFormacion: [
      "Estudiante de 4to o 5to año de Licenciatura en Derecho y Ciencias Políticas",
      "Índice académico sobresaliente y redacción jurídica pulcra",
      "Compromiso de convalidación académica",
      "0 experiencia profesional requerida en firmas"
    ],
    beneficios: [
      "Estipendio de B/. 450.00 mensuales",
      "Acompañamiento en diligencias notariales y regístrales con abogados idóneos",
      "Certificado formal de horas de consultorio / práctica jurídica",
      "Acceso a biblioteca y jurisprudencia especializada"
    ],
    fechaPublicacion: "2026-10-07"
  },
  {
    id: "VAC-PAN-019",
    slug: "pasante-soporte-biomedico-hospital-nacional",
    titulo: "Pasante en Mantenimiento de Equipos Biomédicos",
    empresa: "Hospital Nacional Panamá",
    logo: "🩺",
    provincia: "Panamá",
    zona: "Bella Vista / Calidonia",
    marcoLegal: "Ley 513 de Pasantías",
    remuneracion: "B/. 450.00 / mes (Ley 513)",
    remuneracionValor: 450,
    area: "Ciencias & Salud",
    universidadAfin: ["UTP", "ULatina"],
    horasSemanales: 40,
    duracionMeses: 6,
    destacada: false,
    cuposDisponibles: 1,
    tutorAsignado: "Director del Departamento de Ingeniería Biomédica (Idóneo)",
    descripcionCorta: "Calibración preventiva de monitores de signos vitales, ventiladores y bombas de infusión bajo protocolos hospitalarios de bioseguridad.",
    requisitosFormacion: [
      "Estudiante de último año de Lic. en Ingeniería Biomédica (UTP o ULatina)",
      "Conocimientos en electrónica médica y metrología básica",
      "Vocación de servicio al sector hospitalario",
      "0 experiencia laboral requerida"
    ],
    beneficios: [
      "B/. 450.00 mensuales 100% netos",
      "Póliza de riesgos y vacunación hospitalaria cubierta",
      "Firma de bitácora y plan de práctica para graduación de 400 horas",
      "Adquisición de destrezas críticas en tecnología hospitalaria"
    ],
    fechaPublicacion: "2026-10-06"
  },
  {
    id: "VAC-PAN-020",
    slug: "practicante-diseno-ux-ui-banco-mercantil",
    titulo: "Practicante en Diseño UX/UI de Canales Digitales",
    empresa: "Mercantil Banco Panamá",
    logo: "📱",
    provincia: "Panamá",
    zona: "Torre de Las Américas, Punta Pacífica",
    marcoLegal: "Práctica Profesional Curricular",
    remuneracion: "B/. 500.00 / mes (Estipendio formativo)",
    remuneracionValor: 500,
    area: "Marketing & Creativo",
    universidadAfin: ["UTP", "USMA", "UP", "ITSE"],
    horasSemanales: 35,
    duracionMeses: 6,
    destacada: true,
    cuposDisponibles: 1,
    tutorAsignado: "Lead UX Designer & Gerente de Banca Digital",
    descripcionCorta: "Colabora en la creación de wireframes, flujos de usuario y prototipos interactivos en Figma para la banca en línea y app móvil.",
    requisitosFormacion: [
      "Estudiante de Diseño Gráfico, Comunicación Digital o Ing. de Software con foco UX",
      "Manejo de Figma y nociones de Design Systems",
      "Enlace a proyectos académicos o prototipos personales",
      "0 experiencia en banca previa requerida"
    ],
    beneficios: [
      "Estipendio de B/. 500.00 mensuales",
      "Modalidad híbrida (2 días presencial, 3 días remoto)",
      "Capacitación en metodologías Design Sprint y pruebas con usuarios reales",
      "Convalidación académica oficial"
    ],
    fechaPublicacion: "2026-10-05"
  },
  {
    id: "VAC-PAN-021",
    slug: "pasante-control-gestion-grupo-aje",
    titulo: "Pasante en Control de Gestión y Métricas de Producción",
    empresa: "Grupo AJE Panamá (Big Cola / Cifrut)",
    logo: "🥤",
    provincia: "Panamá Oeste",
    zona: "Planta La Mitra, La Chorrera",
    marcoLegal: "Ley 513 de Pasantías",
    remuneracion: "B/. 450.00 / mes (Ley 513 deducible)",
    remuneracionValor: 450,
    area: "Operaciones & Logística",
    universidadAfin: ["UTP", "UP"],
    horasSemanales: 40,
    duracionMeses: 6,
    destacada: false,
    cuposDisponibles: 2,
    tutorAsignado: "Superintendente de Planta de Envasado",
    descripcionCorta: "Levantamiento de indicadores OEE de líneas de envasado, control de mermas y auditorías de inventario de materia prima.",
    requisitosFormacion: [
      "Estudiante de Ing. Industrial, Logística o Producción (UTP Panamá Oeste)",
      "Facilidad para el análisis numérico y tablas dinámicas en Excel",
      "Residente en La Chorrera o Arraiján",
      "0 meses de experiencia en manufactura"
    ],
    beneficios: [
      "B/. 450.00 mensuales libres de deducciones de seguro social",
      "Póliza privada de riesgos cubierta",
      "Transporte de ruta desde el centro de La Chorrera",
      "Cumplimiento garantizado de las 130 jornadas de práctica UTP"
    ],
    fechaPublicacion: "2026-10-04"
  },
  {
    id: "VAC-PAN-022",
    slug: "trainee-auditoria-ey-panama",
    titulo: "Audit & Assurance Trainee (SEM)",
    empresa: "EY Panamá (Ernst & Young)",
    logo: "💼",
    provincia: "Panamá",
    zona: "Torre Davivienda, Calle 50",
    marcoLegal: "Trainee SEM / Multinacional",
    remuneracion: "B/. 950.00 / mes (Plan de carrera global)",
    remuneracionValor: 950,
    area: "Finanzas & Contabilidad",
    universidadAfin: ["UP", "UTP", "USMA"],
    horasSemanales: 40,
    duracionMeses: 12,
    destacada: true,
    cuposDisponibles: 4,
    tutorAsignado: "Senior Manager de Auditoría Externa",
    descripcionCorta: "Participa en auditorías financieras de corporaciones internacionales, pruebas de cumplimiento y verificación de inventarios físicos.",
    requisitosFormacion: [
      "Graduando o estudiante de último año de Licenciatura en Contabilidad / CPA o Finanzas",
      "Inglés intermedio o avanzado (EF SET B1+ verificable)",
      "Capacidad para trabajar en equipos multidisciplinarios",
      "0 experiencia laboral previa (formación completa impartida por EY)"
    ],
    beneficios: [
      "B/. 950.00 mensuales bajo programa formal de Trainees",
      "Seguro médico privado y seguro de vida",
      "Horas convalidadas para la idoneidad de Contador Público Autorizado (CPA)",
      "Acceso a cursos certificados de EY Badges"
    ],
    fechaPublicacion: "2026-10-03"
  },
  {
    id: "VAC-PAN-023",
    slug: "pasante-atencion-reclutamiento-junior-tova",
    titulo: "Pasante en Selección y Gestión del Talento Humano",
    empresa: "Grupo Tova (Tiendas por Departamento)",
    logo: "🛍️",
    provincia: "Panamá",
    zona: "Vía España / Los Pueblos",
    marcoLegal: "Ley 513 de Pasantías",
    remuneracion: "B/. 450.00 / mes (100% deducible)",
    remuneracionValor: 450,
    area: "Legal & RRHH",
    universidadAfin: ["UP", "UMECIT", "ULatina", "UIP"],
    horasSemanales: 40,
    duracionMeses: 6,
    destacada: false,
    cuposDisponibles: 2,
    tutorAsignado: "Gerente de Gestión Humana y Desarrollo",
    descripcionCorta: "Filtrado inicial de postulaciones, coordinación de citaciones para entrevistas masivas y archivo digital de expedientes.",
    requisitosFormacion: [
      "Estudiante de Lic. en Recursos Humanos, Psicología o Administración",
      "Habilidades organizativas y empatía para el trato con postulantes",
      "0 experiencia laboral requerida",
      "Disponibilidad de 40 horas semanales según Ley 513"
    ],
    beneficios: [
      "B/. 450.00 netos mensuales sin descuento de seguro social",
      "Póliza privada contra accidentes",
      "Descuento en compras corporativas de tienda",
      "Certificación formal emitida al concluir la pasantía"
    ],
    fechaPublicacion: "2026-10-02"
  },
  {
    id: "VAC-PAN-024",
    slug: "practicante-ciberseguridad-analisis-itse",
    titulo: "Practicante en Monitoreo de Redes y Helpdesk TI",
    empresa: "Servicios Tecnológicos de Panamá",
    logo: "💻",
    provincia: "Panamá",
    zona: "Parque Industrial Costa del Este",
    marcoLegal: "Práctica Profesional Curricular",
    remuneracion: "B/. 450.00 / mes (Estipendio formativo)",
    remuneracionValor: 450,
    area: "Ingeniería & Software",
    universidadAfin: ["ITSE", "UTP"],
    horasSemanales: 35,
    duracionMeses: 3,
    destacada: false,
    cuposDisponibles: 2,
    tutorAsignado: "Coordinador de Infraestructura y Helpdesk",
    descripcionCorta: "Configuración de terminales de trabajo, mantenimiento de impresoras de red y atención a tickets de usuarios internos.",
    requisitosFormacion: [
      "Estudiante técnico de ITSE o UTP en Soporte TI, Redes o Sistemas",
      "Conocimientos en formateo e instalación de Windows y suites ofimáticas",
      "0 experiencia laboral formal",
      "Requisito académico de práctica técnica para graduación"
    ],
    beneficios: [
      "Estipendio de B/. 450.00 mensuales",
      "Entorno guiado con tickets reales de servicio",
      "Convalidación directa de requisitos de graduación técnica",
      "Horarios flexibles convenidos"
    ],
    fechaPublicacion: "2026-10-01"
  },
  {
    id: "VAC-PAN-025",
    slug: "pasante-comercio-exterior-apm-terminals",
    titulo: "Pasante en Operaciones Portuarias y Despacho Marítimo",
    empresa: "APM Terminals Panamá",
    logo: "🚢",
    provincia: "Colón",
    zona: "Zona Portuaria de Colón",
    marcoLegal: "Ley 513 de Pasantías",
    remuneracion: "B/. 450.00 / mes (Ley 513)",
    remuneracionValor: 450,
    area: "Operaciones & Logística",
    universidadAfin: ["UMIP", "UTP", "UP"],
    horasSemanales: 40,
    duracionMeses: 6,
    destacada: true,
    cuposDisponibles: 2,
    tutorAsignado: "Superintendente de Operaciones de Patio Portuario",
    descripcionCorta: "Control y asignación de contenedores refrigerados, verificación de listas de carga y comunicación con prácticos de atraque.",
    requisitosFormacion: [
      "Estudiante de Transporte Marítimo, Administración Portuaria o Logística en Colón",
      "Inglés básico-intermedio (EF SET B1)",
      "Ganas de desarrollarse en el sector logístico portuario panameño",
      "0 experiencia previa requerida"
    ],
    beneficios: [
      "Asignación de B/. 450.00 libres de cargos sociales",
      "Póliza de riesgos y EPP completo para zona portuaria",
      "Transporte local en terminal de Colón",
      "Capacitación en normativas internacionales ISPS y seguridad de patio"
    ],
    fechaPublicacion: "2026-09-30"
  },
  {
    id: "VAC-PAN-026",
    slug: "practicante-asistente-editorial-universidad-panama",
    titulo: "Practicante en Gestión Editorial y Redacción Científica",
    empresa: "Editorial Universitaria de Panamá",
    logo: "📚",
    provincia: "Panamá",
    zona: "Campus Central Octavio Méndez Pereira",
    marcoLegal: "Práctica Profesional Curricular",
    remuneracion: "B/. 350.00 / mes (Beca de práctica institucional)",
    remuneracionValor: 350,
    area: "Marketing & Creativo",
    universidadAfin: ["UP"],
    horasSemanales: 30,
    duracionMeses: 4,
    destacada: false,
    cuposDisponibles: 1,
    tutorAsignado: "Director de Publicaciones Académicas (UP)",
    descripcionCorta: "Corrección de estilo, diagramación de textos académicos y catalogación de publicaciones indexadas en Latindex y Scielo.",
    requisitosFormacion: [
      "Estudiante de Lic. en Humanidades, Letras, Periodismo o Bibliotecología de la UP",
      "Dominio estricto de las normas ortográficas y formato APA",
      "0 experiencia laboral previa",
      "Requisito de convalidación de horas prácticas"
    ],
    beneficios: [
      "Estipendio institucional de B/. 350.00 mensuales",
      "Crédito académico convalidado por la Facultad",
      "Mención de agradecimiento en publicaciones editadas",
      "Horario adaptado a las materias de clase"
    ],
    fechaPublicacion: "2026-09-29"
  },
  {
    id: "VAC-PAN-027",
    slug: "pasante-laboratorio-quimico-inadeh",
    titulo: "Pasante en Control de Calidad de Aguas y Suelos",
    empresa: "Laboratorio Ambiental & Aguas de Panamá",
    logo: "🧪",
    provincia: "Panamá Oeste",
    zona: "Arraiján / Loma Cová",
    marcoLegal: "Ley 513 de Pasantías",
    remuneracion: "B/. 450.00 / mes (Ley 513)",
    remuneracionValor: 450,
    area: "Ciencias & Salud",
    universidadAfin: ["UP", "UTP"],
    horasSemanales: 40,
    duracionMeses: 6,
    destacada: false,
    cuposDisponibles: 2,
    tutorAsignado: "Director Técnico de Ensayos Fisicoquímicos",
    descripcionCorta: "Preparación de reactivos, titulación volumétrica y calibración de peachímetros para análisis de muestras ambientales.",
    requisitosFormacion: [
      "Estudiante de Licenciatura en Química, Biología o Ing. Ambiental",
      "Residente en Arraiján o Panamá Oeste",
      "Rigurosidad en el seguimiento de normas de seguridad de laboratorio",
      "0 experiencia profesional requerida"
    ],
    beneficios: [
      "Asignación mensual neta de B/. 450.00",
      "Póliza privada de riesgos cubierta al 100%",
      "Certificación de horas de laboratorio para trabajo de graduación",
      "Tutoría por químicos idóneos colegiados"
    ],
    fechaPublicacion: "2026-09-28"
  },
  {
    id: "VAC-PAN-028",
    slug: "trainee-marketing-haleon-sem",
    titulo: "Brand Management Trainee (Consumer Health SEM)",
    empresa: "Haleon Panamá (Sede Regional SEM)",
    logo: "🌿",
    provincia: "Panamá",
    zona: "Costa del Este",
    marcoLegal: "Trainee SEM / Multinacional",
    remuneracion: "B/. 1,100.00 / mes (Beneficios SEM)",
    remuneracionValor: 1100,
    area: "Marketing & Creativo",
    universidadAfin: ["USMA", "UTP", "UP", "ULatina"],
    horasSemanales: 40,
    duracionMeses: 12,
    destacada: true,
    cuposDisponibles: 2,
    tutorAsignado: "Brand Manager Regional de Salud Bucal & Analgésicos",
    descripcionCorta: "Análisis de participación de mercado en retail farmacéutico de Centroamérica, soporte en lanzamientos y auditoría de punto de venta.",
    requisitosFormacion: [
      "Estudiante de último año de Mercadeo, Administración o Ing. Industrial",
      "Inglés conversacional fluido (EF SET B2 o superior verificable)",
      "Pasión por marcas de salud y consumo masivo",
      "0 experiencia previa requerida (entrenamiento integral SEM)"
    ],
    beneficios: [
      "Asignación de B/. 1,100.00 mensuales",
      "Seguro médico privado y seguro de vida",
      "Viernes de jornada corta a la 1:00 PM y trabajo híbrido",
      "Acceso a mentorías con líderes de marketing en Latinoamérica"
    ],
    fechaPublicacion: "2026-09-27"
  },
  {
    id: "VAC-PAN-029",
    slug: "practicante-soporte-operativo-cooperativa-chiriqui",
    titulo: "Practicante en Atención al Asociado y Gestión de Ahorros",
    empresa: "Cooperativa de Servicios Múltiples de Chiriquí",
    logo: "🌱",
    provincia: "Chiriquí",
    zona: "Boquete / David",
    marcoLegal: "Práctica Profesional Curricular",
    remuneracion: "B/. 400.00 / mes (Estipendio formativo)",
    remuneracionValor: 400,
    area: "Finanzas & Contabilidad",
    universidadAfin: ["UNACHI", "UTP"],
    horasSemanales: 35,
    duracionMeses: 4,
    destacada: false,
    cuposDisponibles: 1,
    tutorAsignado: "Jefa de Operaciones y Crédito Agropecuario",
    descripcionCorta: "Apoyo en apertura de cuentas de ahorro, registro de aportaciones y orientación de servicios a cooperativistas de tierras altas.",
    requisitosFormacion: [
      "Estudiante de Finanzas, Contabilidad o Cooperativismo de UNACHI",
      "Trato amable, paciencia y vocación de servicio comunitario",
      "0 experiencia laboral requerida",
      "Carta de convalidación académica universitaria"
    ],
    beneficios: [
      "Estipendio de B/. 400.00 mensuales",
      "Certificado formal de cumplimiento de práctica",
      "Ambiente de trabajo cálido y formativo",
      "Facilidad para coordinar exámenes finales"
    ],
    fechaPublicacion: "2026-09-26"
  },
  {
    id: "VAC-PAN-030",
    slug: "pasante-programacion-ia-cloud-cloudscale",
    titulo: "Pasante en Desarrollo Cloud y Automatización con IA",
    empresa: "CloudScale Technologies Panamá",
    logo: "☁️",
    provincia: "Remoto/Híbrido",
    zona: "Ciudad de Panamá / Remoto",
    marcoLegal: "Ley 513 de Pasantías",
    remuneracion: "B/. 450.00 / mes (Ley 513 100% libre)",
    remuneracionValor: 450,
    area: "Ingeniería & Software",
    universidadAfin: ["UTP", "UP", "ITSE"],
    horasSemanales: 40,
    duracionMeses: 6,
    destacada: true,
    cuposDisponibles: 3,
    tutorAsignado: "Arquitecto Cloud Certificado AWS & GCP",
    descripcionCorta: "Implementación de flujos de automatización, integración de APIs de modelos fundacionales y pruebas de despliegue en contenedores.",
    requisitosFormacion: [
      "Estudiante de Ing. de Software, Redes o Sistemas Informáticos (UTP/ITSE/UP)",
      "Conocimientos en Python o JavaScript y curiosidad por herramientas de IA",
      "0 meses de experiencia en empresas",
      "Compromiso de cumplimiento de la Ley 513 de Pasantías"
    ],
    beneficios: [
      "B/. 450.00 mensuales sin descuentos de seguridad social",
      "Vouchers para certificaciones oficiales en la nube (AWS / GCP)",
      "Póliza de seguro privado cubierta",
      "Posibilidad de contrato formal con salario de desarrollador junior al concluir"
    ],
    fechaPublicacion: "2026-09-25"
  }
];
