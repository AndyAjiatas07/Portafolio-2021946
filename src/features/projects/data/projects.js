export const projects = [
  {
    id: "kinrural",
    title: "KinRural",
    description:
      "Sistema bancario rural inteligente que conecta la gestión financiera administrativa con una experiencia digital para clientes, permitiendo administrar cuentas, préstamos, tarjetas y transacciones de forma segura y eficiente.",
    skills: [
      "React",
      "React Native",
      "Sequelize",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
    ],
    image: "/src/assets/img/projects/kinrural.png",
    repoUrl: "https://github.com/tu-usuario/kinrural",
    demoUrl: "",
    gallery: [
      "/src/assets/img/projects/kinrural1.png",
      "/src/assets/img/projects/kinrural2.png",
      "/src/assets/img/projects/kinrural3.png",
      "/src/assets/img/projects/kinrural4.png",
      "/src/assets/img/projects/kinrural5.png",
    ],
    longDescription: `KinRural es una plataforma bancaria rural desarrollada con una arquitectura basada en microservicios que integra un panel administrativo y un portal de clientes. El proyecto permite gestionar usuarios, cuentas bancarias, solicitudes, préstamos, tarjetas y transacciones mediante APIs REST construidas con Node.js, Express, Sequelize y PostgreSQL.

La aplicación implementa reglas de negocio financieras como cálculo de intereses, control de mora, límites de cuentas y restricciones de transferencias, además de mecanismos de autenticación y autorización mediante JWT. Su despliegue mediante Docker permite una arquitectura escalable, organizada y preparada para entornos de producción, aplicando buenas prácticas de desarrollo backend y gestión de bases de datos.`,
  },
  {
    id: "kafetery",
    title: "Kafetery",
    description:
      "Plataforma digital para restaurantes que optimiza la gestión de menús, pedidos, reservas y clientes mediante una solución completa de administración y experiencia de usuario.",
    skills: [
      "React",
      "React Native",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "Mongoose",
      "MongoDB",
    ],
    image: "/src/assets/img/projects/kafetery.png",
    repoUrl: "https:github.com/tu-usuario/kafetery",
    demoUrl: "",
    gallery: [
      "/src/assets/img/projects/kafetery1.png",
      "/src/assets/img/projects/kafetery2.png",
      "/src/assets/img/projects/kafetery3.png",
    ],
    longDescription: `Kafetery es un sistema de gestión gastronómica diseñado para digitalizar la operación de restaurantes mediante dos servicios principales: un panel administrativo y un portal orientado a clientes. El proyecto permite administrar restaurantes, menús, órdenes, promociones, reservaciones, mesas y usuarios utilizando Node.js, Express.js, MongoDB y Mongoose.

Cuenta con funcionalidades como control de inventario, seguimiento de ventas, aplicación automática de promociones, asignación de mesas, validación de horarios y sistema de puntos de fidelidad para clientes. Además, incorpora validaciones, manejo de archivos, seguridad HTTP, control de peticiones y una arquitectura modular que facilita su mantenimiento y crecimiento.`,
  },
  {
    id: "sekurity",
    title: "Sekurity",
    description:
      "Plataforma de seguridad ciudadana que permite reportar incidentes, gestionar información comunitaria y administrar la moderación del sistema mediante servicios escalables.",
    skills: [
      "React",
      "React Native",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "Mongoose",
      "MongoDB",
    ],
    image: "/src/assets/img/projects/sekurity.png",
    repoUrl: "https://github.com/tu-usuario/sekurity",
    demoUrl: "",
    gallery: [],
    longDescription: `Sekurity es una plataforma orientada a la gestión de seguridad y participación ciudadana desarrollada con una arquitectura de microservicios. El sistema permite a los usuarios generar reportes, agregar comentarios, calificar incidentes y consultar información relacionada con zonas y estadísticas, mientras que los administradores pueden supervisar y moderar el contenido generado.

El proyecto utiliza Node.js, Express.js, PostgreSQL, Sequelize y Docker, implementando autenticación mediante JWT, protección con Helmet, control de acceso mediante CORS, limitación de solicitudes y validaciones de actividad diaria. Su diseño modular permite separar responsabilidades entre el servicio administrativo y el servicio de usuarios, logrando una solución segura, mantenible y escalable para la gestión de incidentes.`,
  },
  {
    id: "vetnova",
    title: "VetNova",
    description:
      "Sistema de gestión veterinaria desarrollado para optimizar los procesos administrativos y médicos de una clínica mediante una aplicación de escritorio con control de clientes, mascotas, citas y operaciones internas.",
    skills: ["Java", "JavaFX", "MySQL", "JDBC"],
    image: "/src/assets/img/projects/vetnova.png",
    repoUrl: "https://github.com/AndyAjiatas07/VeterinariaFXApp2021496",
    demoUrl: "",
    gallery: [
      "/src/assets/img/projects/vetnova1.png",
      "/src/assets/img/projects/vetnova2.png",
      "/src/assets/img/projects/vetnova3.png",
      "/src/assets/img/projects/vetnova4.png",
    ],
    longDescription: `VetNova es una aplicación de escritorio desarrollada en JavaFX con arquitectura MVC y conexión a una base de datos MySQL, diseñada para mejorar la administración de una clínica veterinaria mediante una solución informática organizada y eficiente.

El sistema permite gestionar múltiples áreas del negocio, incluyendo clientes, mascotas, citas médicas, consultas, facturación, compras, proveedores, medicamentos, tratamientos, vacunas y personal veterinario. Su diseño permite trabajar en un entorno multiusuario dentro de una red local, aplicando principios de organización de software, manejo de bases de datos y separación de responsabilidades.

Además del desarrollo del sistema, el proyecto incluye un análisis financiero enfocado en la estimación de costos informáticos, considerando factores como inversión inicial, costos fijos, costos variables, impuestos y rentabilidad. Esto permitió establecer un modelo de valoración del software, demostrando la importancia de combinar conocimientos técnicos con planificación económica en la creación de soluciones digitales.`,
  },
  {
    id: "organizadoreventos",
    title: "Organizador de eventos Nexus",
    description:
      "Plataforma web para la planificación y administración de eventos que centraliza la gestión de recursos, proveedores, invitados y presupuestos en una única solución inteligente.",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "PrimeFaces",
      "JSF",
      "MySQL",
      "MapStruct",
      "Lombok",
    ],
    image: "/src/assets/img/projects/gestoreventos.png",
    repoUrl:
      "https://github.com/GianCordova/Organizador-Eventos-Nexus/tree/main",
    demoUrl: "",
    gallery: [
      "/src/assets/img/projects/gestoreventos1.png",
      "/src/assets/img/projects/gestoreventos2.png",
      "/src/assets/img/projects/gestoreventos3.png",
      "/src/assets/img/projects/gestoreventos4.png",
    ],
    longDescription: `EventHub es una plataforma diseñada para centralizar la planificación y administración de eventos, facilitando la coordinación entre organizadores, proveedores e invitados en un solo sistema. La aplicación permite gestionar eventos de principio a fin, controlando recursos, servicios contratados, listas de invitados, asistencia y costos asociados para mejorar la organización y optimizar la toma de decisiones.

Además de simplificar la logística de cada evento, el sistema proporciona un control integral sobre el presupuesto y el estado de las actividades, permitiendo una administración más eficiente de los recursos disponibles. Su enfoque está orientado a reducir la complejidad del proceso de organización y ofrecer una solución completa para la gestión de eventos de diferentes tipos y tamaños.`,
  },
  {
    id: "ahorcadojs",
    title: "AhorcadoJS",
    description:
      "Juego interactivo del clásico Ahorcado desarrollado para fortalecer la lógica de programación mediante una experiencia dinámica y accesible desde el navegador.",
    skills: ["HTML", "CSS", "JavaScript"],
    image: "/src/assets/img/projects/ahorcado1.png",
    repoUrl: "https://github.com/AndyAjiatas07/AhorcadoJs",
    demoUrl: "",
    gallery: [
      "/src/assets/img/projects/ahorcado2.png",
      "/src/assets/img/projects/ahorcado3.png",
    ],
    longDescription: `AhorcadoJS es una aplicación web inspirada en el clásico juego del Ahorcado, desarrollada para ofrecer una experiencia interactiva y entretenida directamente desde el navegador. El jugador debe descubrir una palabra secreta antes de agotar sus intentos, utilizando tanto el teclado físico como un teclado virtual integrado en la interfaz.

El juego selecciona palabras de forma aleatoria, muestra el progreso del jugador en tiempo real y representa gráficamente el avance del ahorcado mediante el elemento Canvas. Además, incorpora validación de letras repetidas, mensajes de victoria o derrota y la posibilidad de reiniciar la partida en cualquier momento, ofreciendo una experiencia fluida y sencilla enfocada en la lógica y la interacción con el usuario.`,
  },
  {
    id: "opinanet",
    title: "OpinaNet",
    description:
      "Plataforma social donde los usuarios pueden compartir publicaciones, interactuar mediante comentarios y participar en una comunidad de opiniones de forma segura.",
    skills: [
      "React",
      "Vite",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    image: "/src/assets/img/projects/opina2.png",
    repoUrl: "https://github.com/AndyAjiatas07/gestor-de-opiniones-backend",
    demoUrl: "",
    gallery: [
      "/src/assets/img/projects/opina1.png",
      "/src/assets/img/projects/opina3.png",
      "/src/assets/img/projects/opina4.png",
    ],
    longDescription: `OpinaNet es una plataforma web orientada a la creación y gestión de publicaciones, diseñada para fomentar la interacción entre usuarios mediante contenido y comentarios. Cada usuario puede registrarse, administrar su perfil, crear publicaciones, compartir opiniones y participar en conversaciones dentro de la comunidad.

La aplicación incorpora un sistema de autenticación con diferentes niveles de acceso para proteger las acciones de los usuarios, además de herramientas para editar y eliminar publicaciones y comentarios propios. Su objetivo es ofrecer un espacio dinámico donde las personas puedan expresar ideas, intercambiar opiniones e interactuar de forma organizada y segura.`,
  },
];
