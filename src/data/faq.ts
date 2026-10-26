export interface FAQItem {
  pregunta: string;
  respuesta: string;
  categoria: 'Empresas' | 'Estudiantes' | 'Legal y Tributario';
}

export const faqs: FAQItem[] = [
  {
    categoria: "Legal y Tributario",
    pregunta: "¿Por qué la Ley 513 de 2026 no genera cargas sociales de CSS ni pasivos laborales para la empresa?",
    respuesta: "El Decreto Ejecutivo No. 1 de 31 de agosto de 2026 que reglamenta la Ley 513 de 20 de marzo de 2026 establece expresamente que la pasantía formativa no constituye relación laboral bajo el Código de Trabajo. El aporte económico mensual de B/. 450.00 tiene carácter de ayuda o subvención para gastos de manutención y transporte, no salario. En consecuencia, está legalmente exento del pago de Seguro Social obligatorio (CSS cuota patronal del 12.25%), Seguro Educativo (1.50%), Décimo Tercer Mes, prima de antigüedad y cesantía. La única obligación de cobertura para la empresa es contratar una póliza privada colectiva contra accidentes y riesgos profesionales durante la vigencia de la pasantía."
  },
  {
    categoria: "Legal y Tributario",
    pregunta: "¿Cómo se deduce el 100% de la asignación mensual de B/. 450.00 en el Impuesto sobre la Renta (DGI)?",
    respuesta: "De acuerdo con el Artículo 9 de la Ley 513 de 2026, las sumas erogadas por las empresas privadas en concepto de aportes mensuales a pasantes son 100% deducibles como gasto operativo dentro de la Declaración Jurada de Rentas ante la Dirección General de Ingresos (DGI). Además, para empresas bajo el régimen de Mi Primer Empleo (Decreto Ejecutivo No. 27 de 2024), si la empresa formaliza una contratación laboral al término de la práctica y retiene al joven por 6 meses consecutivos, recibe un incentivo fiscal adicional equivalente al doble (2×) del salario mínimo devengado."
  },
  {
    categoria: "Legal y Tributario",
    pregunta: "¿Por qué Moldeo Panamá es 100% legal sin ser una Agencia Privada de Colocación?",
    respuesta: "El Artículo 22 del Código de Trabajo de Panamá y la Resolución DM-136-2023 de MITRADEL prohíben a cualquier persona física o jurídica cobrar emolumentos a los trabajadores por buscar empleo. Moldeo Panamá opera estrictamente como un medio tecnológico publicitario, de difusión de vacantes de formación y vinculación académica entre universidades y el sector productivo. No realiza intermediación laboral, no negocia contratos, no cobra comisión de colocación ni retiene porcentaje alguno del estipendio de los estudiantes. Para todos los efectos legales, la plataforma es 100% gratuita para los estudiantes y cumple con el segundo párrafo del Art. 22 del Código de Trabajo que incentiva la cooperación con universidades para el empleo juvenil."
  },
  {
    categoria: "Legal y Tributario",
    pregunta: "¿Cómo protege Moldeo Panamá los datos de los estudiantes según la Ley 81 de 2019 de la ANTAI?",
    respuesta: "Moldeo Panamá cumple de forma rigurosa con la Ley 81 de 26 de marzo de 2019 de Protección de Datos Personales y el Decreto Ejecutivo 285 de 2021. Todo registro de estudiante exige consentimiento expreso, previo, inequívoco y trazable. En la vitrina pública, los perfiles están anonimizados con identificadores de código (ej. #CAND-UTP-402) ocultando nombres, cédula, teléfonos y correos. No se solicita ningún dato sensible. Además, se ofrece un canal formal y gratuito de Derechos ARCO (Acceso, Rectificación, Cancelación, Oposición y Portabilidad) tramitado en un plazo máximo de 5 a 10 días hábiles."
  },
  {
    categoria: "Empresas",
    pregunta: "¿Cuántos pasantes puede incorporar una empresa bajo la Ley 513 de 2026?",
    respuesta: "La Ley 513 establece topes precisos en función de la planilla de colaboradores regulares: empresas de hasta 50 trabajadores pueden incorporar hasta 2 pasantes; empresas de 51 a 100 trabajadores, hasta 4 pasantes; empresas de 101 a 200 trabajadores, hasta 6 pasantes; y empresas con más de 200 trabajadores, hasta un máximo del 3% de su fuerza laboral. La ley prohíbe taxativamente sustituir trabajadores permanentes por pasantes."
  },
  {
    categoria: "Empresas",
    pregunta: "¿En qué consiste el 'Pacto de Empresa Formadora' obligatorio para publicar en la plataforma?",
    respuesta: "Para publicar en Moldeo Panamá, la empresa debe aceptar digitalmente tres condiciones: 1) Prohibición absoluta de exigir experiencia laboral previa en meses o años; 2) Designación formal de un supervisor o tutor idóneo responsable de guiar y evaluar el plan de aprendizaje del estudiante; 3) Transparencia total sobre el marco legal aplicable (Ley 513 con B/. 450/mes, Mi Primer Empleo con salario mínimo o Práctica Universitaria) y horario estipulado."
  },
  {
    categoria: "Empresas",
    pregunta: "¿Cómo funciona el desbloqueo de postulaciones y video-pitches con Yappy Comercial?",
    respuesta: "La publicación básica es gratuita ($0). Cuando una empresa desea acceder al reporte curado con el contacto directo (WhatsApp y correo) y el video-pitch de 60 segundos de los candidatos seleccionados, realiza un micro-pago de B/. 15.00 a través de Yappy Comercial (Banco General) o tarjeta corporativa mediante Tilopay/Cuanto. El desbloqueo es inmediato y sin contratos de suscripción forzosa."
  },
  {
    categoria: "Estudiantes",
    pregunta: "¿Por qué no me piden una hoja de vida (CV) tradicional en PDF?",
    respuesta: "Cuando eres estudiante universitario y nunca has tenido un trabajo formal, un CV tradicional es una hoja en blanco que los filtros de recursos humanos suelen descartar. En Moldeo Panamá sustituimos el CV por el 'Perfil de Moldeabilidad': evaluamos tu índice académico, tus proyectos universitarios reales, tu certificación de inglés gratuita en EF SET y tu perfil vocacional RIASEC con un video de presentación de 60 segundos. Así las empresas evalúan tu verdadero potencial de aprendizaje y no tu falta de experiencia previa."
  },
  {
    categoria: "Estudiantes",
    pregunta: "¿Cómo puedo convalidar mi práctica profesional para graduarme de la UTP, UP o USMA?",
    respuesta: "Todas las vacantes publicadas en la plataforma que aplican a Práctica Profesional Curricular cuentan con un tutor o supervisor idóneo en la empresa con la profesión requerida por tu facultad (ingeniero idóneo para UTP, CPA para FAECO/UP, abogado idóneo para Derecho, etc.). Al ser aceptado, la empresa te firmará la carta de aceptación, el cronograma de actividades con diagrama de Gantt y los formularios universitarios de práctica (F1, F2 y F3 en UTP; o bitácoras en UP y particulares)."
  },
  {
    categoria: "Estudiantes",
    pregunta: "¿Tengo que pagar algo para registrarme o conseguir una pasantía?",
    respuesta: "¡Absolutamente nada! El registro, el test vocacional RIASEC, la postulación a las vacantes y la asesoría de convalidación son 100% gratuitos para todos los estudiantes universitarios. De conformidad con la legislación laboral de la República de Panamá, nunca se te cobrará ningún arancel o comisión por postularte u obtener una oportunidad de formación."
  }
];
