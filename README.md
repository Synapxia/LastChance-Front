# LastChance-Front
frontend/
├── src/
│   ├── app/
│   │   ├── App.jsx
│   │   │   → Componente principal de la aplicación
│   │   └── routes.jsx
│   │       → Configuración de las rutas
│   │
│   ├── modules/
│   │   ├── users/
│   │   │   ├── pages/
│   │   │   │   → Pantallas de usuarios
│   │   │   ├── components/
│   │   │   │   → Componentes específicos de usuarios
│   │   │   ├── services.js
│   │   │   │   → Llamadas a la API de usuarios
│   │   │   └── hooks.js
│   │   │       → Hooks específicos de usuarios
│   │   │
│   │   ├── products/
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   ├── services.js
│   │   │   └── hooks.js
│   │   │
│   │   ├── orders/
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   ├── services.js
│   │   │   └── hooks.js
│   │   │
│   │   └── payments/
│   │       ├── pages/
│   │       ├── components/
│   │       ├── services.js
│   │       └── hooks.js
│   │
│   ├── components/
│   │   └── common/
│   │       → Componentes reutilizables en toda la aplicación
│   │
│   ├── services/
│   │   └── api.js
│   │       → Configuración de Axios/fetch y conexión con Flask
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │       → Estado global de autenticación
│   │
│   ├── utils/
│   │   └── helpers.js
│   │       → Funciones auxiliares comunes
│   │
│   └── main.jsx
│       → Punto de entrada de React
│
├── public/
│   → Archivos públicos/estáticos
│
├── .env
│   → Variables de entorno
│
├── package.json
│   → Dependencias y scripts
│
└── vite.config.js
    → Configuración de Vite