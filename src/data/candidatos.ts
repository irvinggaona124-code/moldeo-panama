export interface CandidatoMoldeable {
  codigoAnonimo: string; // Ej: CAND-UTP-402
  carrera: string;
  universidad: string;
  sede: string;
  cuatrimestre: string;
  indiceAcademico: string; // Escala 3.00 o 100
  nivelInglesEfSet: string; // A1 a C2
  efSetScore: string; // ej. 68/100 (C1)
  efSetUrlVerificable: string;
  perfilRiasec: string; // Arquetipo
  riasecAfinidad: number; // Porcentaje 0-100%
  elegibilidadLegal: string[];
  disponibilidad: string;
  videoPitchDuracion: string;
  proyectoDestacadoTitulo: string;
  proyectoDestacadoDescripcion: string;
  proyectoEnlace: string;
  competenciasClave: string[];
  fechaRegistro: string;
}

export const candidatos: CandidatoMoldeable[] = [
  {
    codigoAnonimo: "CAND-UTP-402",
    carrera: "Lic. en Ingeniería de Software",
    universidad: "Universidad Tecnológica de Panamá (UTP)",
    sede: "Campus Central Dr. Víctor Levi Sasso",
    cuatrimestre: "8.° Cuatrimestre (Último Año)",
    indiceAcademico: "2.42 / 3.00 (Cuadro de Honor)",
    nivelInglesEfSet: "C1 Avanzado",
    efSetScore: "69/100 (C1 CEFR)",
    efSetUrlVerificable: "https://www.efset.org/cert/demo-c1-utp",
    perfilRiasec: "Investigador / Analítico",
    riasecAfinidad: 94,
    elegibilidadLegal: [
      "Ley 513 de Pasantías (B/. 450.00)",
      "Práctica Profesional de Graduación UTP (6 meses / 130 días)"
    ],
    disponibilidad: "Jornada Completa (40 horas semanales)",
    videoPitchDuracion: "58 segundos (Verificado)",
    proyectoDestacadoTitulo: "Sistema Web de Predicción de Deserción Escolar",
    proyectoDestacadoDescripcion: "Modelo predictivo desarrollado con Python, Scikit-Learn y dashboard interactivo en React.",
    proyectoEnlace: "https://github.com/demo-estudiante/predict-dropout",
    competenciasClave: ["React", "TypeScript", "Python", "SQL", "Git", "Resolución de Problemas"],
    fechaRegistro: "2026-10-24"
  },
  {
    codigoAnonimo: "CAND-UP-118",
    carrera: "Lic. en Finanzas y Negocios Internacionales",
    universidad: "Universidad de Panamá (UP)",
    sede: "Facultad de Administración de Empresas y Contabilidad (FAECO)",
    cuatrimestre: "4.° Año (Graduando)",
    indiceAcademico: "2.18 / 3.00",
    nivelInglesEfSet: "B2 Intermedio Alto",
    efSetScore: "58/100 (B2 CEFR)",
    efSetUrlVerificable: "https://www.efset.org/cert/demo-b2-up",
    perfilRiasec: "Convencional / Finanzas",
    riasecAfinidad: 91,
    elegibilidadLegal: [
      "Ley 513 de Pasantías (B/. 450.00)",
      "Mi Primer Empleo (D.E. 27)",
      "Práctica Profesional UP (16 semanas)"
    ],
    disponibilidad: "Lunes a Viernes (Diurno)",
    videoPitchDuracion: "60 segundos (Verificado)",
    proyectoDestacadoTitulo: "Modelo Financiero de Valoración para PyMEs Panameñas",
    proyectoDestacadoDescripcion: "Plantilla de flujos de caja descontados (DCF) y análisis de sensibilidad de tasa tributaria corporativa de Panamá.",
    proyectoEnlace: "https://demo-drive.google.com/dcf-panama-pymes",
    competenciasClave: ["Excel Financiero", "Modelado de Flujo de Caja", "Análisis de Ratios", "NIIF Básicas", "Organización"],
    fechaRegistro: "2026-10-23"
  },
  {
    codigoAnonimo: "CAND-UTP-509",
    carrera: "Lic. en Ingeniería Industrial",
    universidad: "Universidad Tecnológica de Panamá (UTP)",
    sede: "Centro Regional de Panamá Oeste (La Chorrera)",
    cuatrimestre: "Último Semestre (Listo para Práctica)",
    indiceAcademico: "2.25 / 3.00",
    nivelInglesEfSet: "B2 Intermedio Alto",
    efSetScore: "55/100 (B2 CEFR)",
    efSetUrlVerificable: "https://www.efset.org/cert/demo-b2-utpwest",
    perfilRiasec: "Operaciones / Procesos (Convencional-Realista)",
    riasecAfinidad: 89,
    elegibilidadLegal: [
      "Ley 513 de Pasantías (B/. 450.00)",
      "Práctica Profesional UTP (6 meses / 130 días)",
      "Mi Primer Empleo (D.E. 27)"
    ],
    disponibilidad: "Tiempo Completo (Residente en Panamá Oeste)",
    videoPitchDuracion: "54 segundos (Verificado)",
    proyectoDestacadoTitulo: "Optimización de Tiempos de Ciclo en Línea de Empaque",
    proyectoDestacadoDescripcion: "Estudio de tiempos y movimientos con diagrama bimanual y propuesta de redistribución de planta 5S.",
    proyectoEnlace: "https://demo-drive.google.com/estudio-metodos-planta",
    competenciasClave: ["Lean Manufacturing", "5S", "AutoCAD 2D", "Control de Calidad", "Diagramas de Gantt"],
    fechaRegistro: "2026-10-22"
  },
  {
    codigoAnonimo: "CAND-USMA-203",
    carrera: "Lic. en Mercadeo y Negocios Digitales",
    universidad: "Universidad Católica Santa María La Antigua (USMA)",
    sede: "Campus Central Sede Panamá",
    cuatrimestre: "Último Año (Práctica Graduación)",
    indiceAcademico: "2.35 / 3.00",
    nivelInglesEfSet: "C2 Proficiente Bilingüe",
    efSetScore: "76/100 (C2 CEFR)",
    efSetUrlVerificable: "https://www.efset.org/cert/demo-c2-usma",
    perfilRiasec: "Creativo / Marketing (Artístico-Emprendedor)",
    riasecAfinidad: 96,
    elegibilidadLegal: [
      "Trainee SEM / Multinacional",
      "Ley 513 de Pasantías (B/. 450.00)",
      "Práctica Profesional USMA (400 horas)"
    ],
    disponibilidad: "Disponibilidad Inmediata (Híbrido o Presencial)",
    videoPitchDuracion: "59 segundos (Verificado)",
    proyectoDestacadoTitulo: "Estrategia de Crecimiento Orgánico en TikTok para Startups",
    proyectoDestacadoDescripcion: "Campaña experimental que generó más de 120,000 reproducciones orgánicas y 800 leads sin pauta paga.",
    proyectoEnlace: "https://behance.net/demo-estudiante-marketing",
    competenciasClave: ["Marketing Digital", "TikTok Ads", "Figma", "Redacción Persuasiva", "Inglés Nativo/Bilingüe"],
    fechaRegistro: "2026-10-21"
  },
  {
    codigoAnonimo: "CAND-ITSE-301",
    carrera: "Técnico Superior en Ciberseguridad",
    universidad: "Instituto Técnico Superior Especializado (ITSE)",
    sede: "Campus Tocumen",
    cuatrimestre: "5.° Cuatrimestre (Fase de Práctica)",
    indiceAcademico: "92.4 / 100 (Excelente)",
    nivelInglesEfSet: "B1 Intermedio",
    efSetScore: "48/100 (B1 CEFR)",
    efSetUrlVerificable: "https://www.efset.org/cert/demo-b1-itse",
    perfilRiasec: "Realista / Técnico",
    riasecAfinidad: 93,
    elegibilidadLegal: [
      "Ley 513 de Pasantías (B/. 450.00)",
      "Práctica Técnica ITSE (Requisito de Egreso)",
      "Mi Primer Empleo (D.E. 27)"
    ],
    disponibilidad: "Jornada Mixta o Completa (Área Este / Tocumen / Metro)",
    videoPitchDuracion: "52 segundos (Verificado)",
    proyectoDestacadoTitulo: "Laboratorio Virtual de Detección de Intrusos con Snort",
    proyectoDestacadoDescripcion: "Implementación de reglas de IDS/IPS en entorno virtualizado Proxmox con análisis de logs en Splunk.",
    proyectoEnlace: "https://github.com/demo-estudiante/snort-lab-itse",
    competenciasClave: ["Linux Server", "Redes TCP/IP", "Wireshark", "Firewalls", "Atención a Incidentes"],
    fechaRegistro: "2026-10-20"
  },
  {
    codigoAnonimo: "CAND-ULAT-104",
    carrera: "Lic. en Ingeniería Biomédica",
    universidad: "Universidad Latina de Panamá",
    sede: "Sede Central Vía España",
    cuatrimestre: "Último Año",
    indiceAcademico: "88.5 / 100 (Aprobación Práctica ULatina)",
    nivelInglesEfSet: "B2 Intermedio Alto",
    efSetScore: "56/100 (B2 CEFR)",
    efSetUrlVerificable: "https://www.efset.org/cert/demo-b2-ulatina",
    perfilRiasec: "Investigador / Científico",
    riasecAfinidad: 88,
    elegibilidadLegal: [
      "Práctica Profesional ULatina (400 horas)",
      "Ley 513 de Pasantías (B/. 450.00)"
    ],
    disponibilidad: "40 horas semanales",
    videoPitchDuracion: "60 segundos (Verificado)",
    proyectoDestacadoTitulo: "Prototipo de Monitor de SpO2 de Bajo Costo con ESP32",
    proyectoDestacadoDescripcion: "Circuito electrónico impreso y firmware en C++ para monitoreo inalámbrico de telemetría médica.",
    proyectoEnlace: "https://github.com/demo-estudiante/esp32-pulse-oximeter",
    competenciasClave: ["Electrónica Médica", "Microcontroladores ESP32", "Metrología", "Calibración", "Inglés Técnico"],
    fechaRegistro: "2026-10-19"
  },
  {
    codigoAnonimo: "CAND-UP-312",
    carrera: "Lic. en Psicología Organizacional",
    universidad: "Universidad de Panamá (UP)",
    sede: "Campus Octavio Méndez Pereira",
    cuatrimestre: "4.° Año (Fase de Práctica)",
    indiceAcademico: "2.30 / 3.00",
    nivelInglesEfSet: "B1 Intermedio",
    efSetScore: "49/100 (B1 CEFR)",
    efSetUrlVerificable: "https://www.efset.org/cert/demo-b1-up-psi",
    perfilRiasec: "Social / Asistencia y Personas",
    riasecAfinidad: 95,
    elegibilidadLegal: [
      "Práctica Profesional UP (16 semanas)",
      "Ley 513 de Pasantías (B/. 450.00)",
      "Mi Primer Empleo (D.E. 27)"
    ],
    disponibilidad: "Lunes a Viernes (Diurno)",
    videoPitchDuracion: "57 segundos (Verificado)",
    proyectoDestacadoTitulo: "Diagnóstico de Clima Laboral y Estrés en Trabajadores Remotos",
    proyectoDestacadoDescripcion: "Investigación cuantitativa aplicada a 120 colaboradores con batería de pruebas psicométricas validadas.",
    proyectoEnlace: "https://demo-drive.google.com/tesis-clima-organizacional",
    competenciasClave: ["Entrevistas Estructuradas", "Pruebas Psicométricas", "Dinámicas de Grupo", "Empatía", "Escucha Activa"],
    fechaRegistro: "2026-10-18"
  },
  {
    codigoAnonimo: "CAND-UTP-615",
    carrera: "Lic. en Logística y Transporte Multimodal",
    universidad: "Universidad Tecnológica de Panamá (UTP)",
    sede: "Centro Regional de Colón",
    cuatrimestre: "Último Año",
    indiceAcademico: "2.10 / 3.00",
    nivelInglesEfSet: "B2 Intermedio Alto",
    efSetScore: "54/100 (B2 CEFR)",
    efSetUrlVerificable: "https://www.efset.org/cert/demo-b2-utpcolon",
    perfilRiasec: "Operaciones / Logística",
    riasecAfinidad: 90,
    elegibilidadLegal: [
      "Ley 513 de Pasantías (B/. 450.00)",
      "Práctica Profesional UTP (6 meses / 130 días)",
      "Mi Primer Empleo (D.E. 27)"
    ],
    disponibilidad: "Zona Libre de Colón y Puertos (Residente en Colón)",
    videoPitchDuracion: "56 segundos (Verificado)",
    proyectoDestacadoTitulo: "Optimización de Flujo de Contenedores en Muelles de Transbordo",
    proyectoDestacadoDescripcion: "Simulación de colas en terminal portuaria para reducir tiempos de espera de remolcadores y camiones.",
    proyectoEnlace: "https://demo-drive.google.com/simulacion-puerto-colon",
    competenciasClave: ["Trámites DMCE", "Gestión de Patio Portuario", "Comercio Internacional", "WMS Básico", "Inglés Operativo"],
    fechaRegistro: "2026-10-17"
  },
  {
    codigoAnonimo: "CAND-UIP-088",
    carrera: "Lic. en Diseño Gráfico Digital",
    universidad: "Universidad Interamericana de Panamá (UIP)",
    sede: "Sede Ricardo J. Alfaro",
    cuatrimestre: "Último Año",
    indiceAcademico: "90.0 / 100",
    nivelInglesEfSet: "B2 Intermedio Alto",
    efSetScore: "57/100 (B2 CEFR)",
    efSetUrlVerificable: "https://www.efset.org/cert/demo-b2-uip",
    perfilRiasec: "Artístico / Creativo",
    riasecAfinidad: 97,
    elegibilidadLegal: [
      "Práctica Profesional UIP (400 horas)",
      "Ley 513 de Pasantías (B/. 450.00)"
    ],
    disponibilidad: "Medio Tiempo o Completo (Modalidad Híbrida)",
    videoPitchDuracion: "59 segundos (Verificado)",
    proyectoDestacadoTitulo: "Manual de Identidad de Marca y Sistema UI para Fintech Local",
    proyectoDestacadoDescripcion: "Sistema integral de diseño en Figma con componentes accesibles WCAG AA y guía de estilos tipográficos.",
    proyectoEnlace: "https://figma.com/@demo-estudiante-uip",
    competenciasClave: ["Figma", "Illustrator", "Photoshop", "Motion Graphics Básico", "Diseño Responsivo"],
    fechaRegistro: "2026-10-16"
  },
  {
    codigoAnonimo: "CAND-UNACHI-211",
    carrera: "Lic. en Contabilidad y Auditoría",
    universidad: "Universidad Autónoma de Chiriquí (UNACHI)",
    sede: "Campus Central David, Chiriquí",
    cuatrimestre: "4.° Año (Egresando)",
    indiceAcademico: "2.40 / 3.00",
    nivelInglesEfSet: "B1 Intermedio",
    efSetScore: "46/100 (B1 CEFR)",
    efSetUrlVerificable: "https://www.efset.org/cert/demo-b1-unachi",
    perfilRiasec: "Convencional / Contabilidad",
    riasecAfinidad: 92,
    elegibilidadLegal: [
      "Ley 513 de Pasantías (B/. 450.00)",
      "Mi Primer Empleo (D.E. 27)",
      "Práctica Profesional UNACHI"
    ],
    disponibilidad: "David / Boquete / Tierras Altas",
    videoPitchDuracion: "53 segundos (Verificado)",
    proyectoDestacadoTitulo: "Manual de Procedimientos de Conciliación Bancaria para PyMEs",
    proyectoDestacadoDescripcion: "Guía práctica de auditoría interna con papeles de trabajo estandarizados bajo normativa contable panameña.",
    proyectoEnlace: "https://demo-drive.google.com/manual-auditoria-chiriqui",
    competenciasClave: ["Conciliaciones Bancarias", "Excel Financiero", "NIIF para PyMEs", "Integridad Ética", "Atención al Detalle"],
    fechaRegistro: "2026-10-15"
  },
  {
    codigoAnonimo: "CAND-UTP-780",
    carrera: "Lic. en Ingeniería Mecánica",
    universidad: "Universidad Tecnológica de Panamá (UTP)",
    sede: "Campus Central Dr. Víctor Levi Sasso",
    cuatrimestre: "5.° Año (Graduando)",
    indiceAcademico: "1.92 / 3.00 (Elegible Práctica)",
    nivelInglesEfSet: "B2 Intermedio Alto",
    efSetScore: "60/100 (B2 CEFR)",
    efSetUrlVerificable: "https://www.efset.org/cert/demo-b2-utpmec",
    perfilRiasec: "Realista / Mecánico (Ingeniería)",
    riasecAfinidad: 95,
    elegibilidadLegal: [
      "Práctica Profesional UTP (6 meses / 130 días)",
      "Ley 513 de Pasantías (B/. 450.00)"
    ],
    disponibilidad: "Jornada Completa Presencial (Disponibilidad para Talleres/Plantas)",
    videoPitchDuracion: "55 segundos (Verificado)",
    proyectoDestacadoTitulo: "Análisis Térmico de Intercambiador de Calor de Carcasa y Tubos",
    proyectoDestacadoDescripcion: "Simulación por elementos finitos (FEA/CFD) en SolidWorks con balance de energía térmica.",
    proyectoEnlace: "https://demo-drive.google.com/solidworks-intercambiador",
    competenciasClave: ["SolidWorks 3D", "AutoCAD Mecánico", "Mantenimiento Preventivo", "Termodinámica", "Trabajo en Equipo"],
    fechaRegistro: "2026-10-14"
  },
  {
    codigoAnonimo: "CAND-UMIP-410",
    carrera: "Lic. en Administración Marítima y Portuaria",
    universidad: "Universidad Marítima Internacional de Panamá (UMIP)",
    sede: "La Boca / Ancón",
    cuatrimestre: "Último Año",
    indiceAcademico: "2.28 / 3.00",
    nivelInglesEfSet: "C1 Avanzado Marítimo",
    efSetScore: "66/100 (C1 CEFR)",
    efSetUrlVerificable: "https://www.efset.org/cert/demo-c1-umip",
    perfilRiasec: "Emprendedor / Gestión Comercial",
    riasecAfinidad: 89,
    elegibilidadLegal: [
      "Trainee SEM / Multinacional",
      "Ley 513 de Pasantías (B/. 450.00)",
      "Práctica Marítima UMIP"
    ],
    disponibilidad: "Disponibilidad Inmediata (Panamá o Colón)",
    videoPitchDuracion: "59 segundos (Verificado)",
    proyectoDestacadoTitulo: "Estudio de Competitividad de Tarifas Portuarias en el Corredor Interoceánico",
    proyectoDestacadoDescripcion: "Análisis comparativo de costos de estadía y servicios conexos entre terminales del Atlántico y Pacífico.",
    proyectoEnlace: "https://demo-drive.google.com/estudio-puertos-umip",
    competenciasClave: ["Inglés Marítimo Avanzado", "Operaciones de Atraque", "Documentación Bill of Lading", "Negociación", "Liderazgo"],
    fechaRegistro: "2026-10-13"
  },
  {
    codigoAnonimo: "CAND-UP-550",
    carrera: "Lic. en Derecho y Ciencias Políticas",
    universidad: "Universidad de Panamá (UP)",
    sede: "Facultad de Derecho y Ciencias Políticas",
    cuatrimestre: "4.° Año",
    indiceAcademico: "2.35 / 3.00",
    nivelInglesEfSet: "B2 Intermedio Alto",
    efSetScore: "55/100 (B2 CEFR)",
    efSetUrlVerificable: "https://www.efset.org/cert/demo-b2-up-leyes",
    perfilRiasec: "Social-Convencional / Legal",
    riasecAfinidad: 91,
    elegibilidadLegal: [
      "Práctica Profesional UP (16 semanas)",
      "Ley 513 de Pasantías (B/. 450.00)"
    ],
    disponibilidad: "Jornada Matutina o Vespertina",
    videoPitchDuracion: "60 segundos (Verificado)",
    proyectoDestacadoTitulo: "Análisis Jurídico del Impacto de la Ley 81 de 2019 en Comercio Electrónico",
    proyectoDestacadoDescripcion: "Monografía sobre la responsabilidad de los custodios de datos y derechos ARCO en plataformas digitales panameñas.",
    proyectoEnlace: "https://demo-drive.google.com/monografia-datos-panama",
    competenciasClave: ["Redacción Jurídica", "Derecho Mercantil", "Protección de Datos (Ley 81)", "Diligencias Notariales", "Oratoria"],
    fechaRegistro: "2026-10-12"
  },
  {
    codigoAnonimo: "CAND-UDELAS-120",
    carrera: "Lic. en Radiología e Imágenes Diagnósticas",
    universidad: "Universidad Especializada de las Américas (UDELAS)",
    sede: "Campus Albrook",
    cuatrimestre: "Último Semestre",
    indiceAcademico: "89.2 / 100",
    nivelInglesEfSet: "B1 Intermedio",
    efSetScore: "47/100 (B1 CEFR)",
    efSetUrlVerificable: "https://www.efset.org/cert/demo-b1-udelas",
    perfilRiasec: "Realista-Social / Salud",
    riasecAfinidad: 94,
    elegibilidadLegal: [
      "Práctica Clínica UDELAS (400 horas hospitalarias)",
      "Ley 513 de Pasantías (B/. 450.00)"
    ],
    disponibilidad: "Rotación Hospitalaria Completa",
    videoPitchDuracion: "51 segundos (Verificado)",
    proyectoDestacadoTitulo: "Protocolo de Posicionamiento Seguro en Tomografía Computarizada Pediátrica",
    proyectoDestacadoDescripcion: "Guía visual de protección radiológica y reducción de dosis en pacientes pediátricos.",
    proyectoEnlace: "https://demo-drive.google.com/protocolo-radiologia-udelas",
    competenciasClave: ["Bioseguridad", "Protección Radiológica", "Trato Humanizado", "Equipos Rayos X", "Responsabilidad Ética"],
    fechaRegistro: "2026-10-11"
  },
  {
    codigoAnonimo: "CAND-UTP-902",
    carrera: "Lic. en Ciberseguridad y Redes",
    universidad: "Universidad Tecnológica de Panamá (UTP)",
    sede: "Campus Central Dr. Víctor Levi Sasso",
    cuatrimestre: "4.° Año (Graduando)",
    indiceAcademico: "2.51 / 3.00 (Primer Puesto de Honor)",
    nivelInglesEfSet: "C1 Avanzado",
    efSetScore: "71/100 (C1 CEFR)",
    efSetUrlVerificable: "https://www.efset.org/cert/demo-c1-utpcyber",
    perfilRiasec: "Investigador / Ciberdefensa",
    riasecAfinidad: 98,
    elegibilidadLegal: [
      "Trainee SEM / Multinacional",
      "Ley 513 de Pasantías (B/. 450.00)",
      "Práctica Profesional UTP (6 meses / 130 días)"
    ],
    disponibilidad: "Tiempo Completo",
    videoPitchDuracion: "58 segundos (Verificado)",
    proyectoDestacadoTitulo: "Auditoría de Vulnerabilidades Web OWASP Top 10 en Entorno de Pruebas",
    proyectoDestacadoDescripcion: "Reporte de pentesting ético con remediaciones de seguridad para aplicaciones en Node.js y bases de datos relacionales.",
    proyectoEnlace: "https://github.com/demo-estudiante/owasp-security-audit",
    competenciasClave: ["Ethical Hacking", "OWASP Top 10", "Python Scripts", "Linux Hardening", "Criptografía Aplicada"],
    fechaRegistro: "2026-10-10"
  }
];
