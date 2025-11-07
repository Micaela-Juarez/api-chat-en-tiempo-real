#  Chat en Tiempo Real con Node.js, Socket.IO y MongoDB

Un proyecto backend desarrollado con Node.js, Express, Socket.IO y MongoDB, que permite la comunicación bidireccional en tiempo real entre los usuarios, con persistencia de los mensajes en base de datos.

Este sistema demuestra el dominio de eventos en tiempo real, arquitectura basada en sockets, y almacenamiento de datos persistente, habilidades clave para entornos backend modernos.


#  Características Principales

 Comunicación bidireccional entre cliente y servidor (en tiempo real).

 Persistencia de datos: los mensajes se guardan en MongoDB.

 Arquitectura modular con Express + Socket.IO.

 CORS habilitado para permitir conexiones desde clientes externos.

 Eventos personalizados (newMessage, messageBroadcast).

 Conexión a MongoDB local o en la nube (Atlas) configurable desde .env.


#  Tecnologías Utilizadas

Node.js – Entorno de ejecución JavaScript.

Express.js – Framework para el servidor HTTP.

Socket.IO – Comunicación en tiempo real entre cliente y servidor.

MongoDB / Mongoose – Base de datos NoSQL para persistencia de mensajes.

dotenv – Manejo de variables de entorno.


#  Estructura del Proyecto
 api-chat-en-tiempo-real
 ┣  src
 ┃ ┣  config
 ┃ ┃  ┗  db.js
 ┃ ┣  routes
 ┃ ┃  ┗  chatRoutes.js
 ┃ ┣  controllers
 ┃ ┃  ┗  chatController.js
 ┃ ┣  models
 ┃ ┃  ┗  Message.js
 ┃ ┣  sockets
 ┃ ┃  ┗  chatSocket.js
 ┃ ┣  app.js
 ┃ ┗  server.js
 ┣  .env
 ┣  package.json
 ┗  README.md


#  Instalación y Configuración

### 1️ Clonar el repositorio:

```Bash
git clone https://github.com/Micaela-Juarez/api-chat-en-tiempo-real.git
cd chat-realtime-app
```

### 2️ Instalar dependencias
```Bash
npm install
npm install express socket.io mongoose dotenv cors
```

### 3️ Configurar las variables de entorno

Crea un archivo .env en la raíz del proyecto y define:

```Bash
PORT=4000
MONGODB_URI=mongodb://127.0.0.1:27017/chat_app
```

💡 Si deseas usar MongoDB Atlas, reemplaza el valor por tu cadena de conexión remota:

MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/chat_app

### 4️ Iniciar el servidor
```Bash
npm run dev
```


* Deberías ver en consola:

Conectado a MongoDB correctamente
 Servidor en http://localhost:4000

 Pruebas en Tiempo Real (con Socket.IO Client Tool)

* Abrí la herramienta en línea:
 https://amritb.github.io/socketio-client-tool/

* En el campo Server URL, ingresá:

http://localhost:4000


* En la pestaña Emit, configurá:

Event name: newMessage

JSON data: (activá el icono “JSON data” antes de enviar)

```Bash
{
  "username": "Maria",
  "content": "Hola a todos!"
}
```


* Presioná Emit.
En el servidor verás un log de conexión y el mensaje será almacenado en MongoDB.

Si abrís la misma URL en otra pestaña o cliente, todos los mensajes enviados se mostrarán en tiempo real gracias a Socket.IO.

#  Consultar los mensajes almacenados

Desde la terminal (con mongosh):

```Bash
mongosh
use chat_app
db.messages.find().pretty()
```


* Ejemplo de resultado:

```Bash
{
  "_id": "690e82d094b0980ba1ffca6b",
  "username": "Maria",
  "content": "Probando almacenamiento real",
  "createdAt": "2025-11-07T23:37:52.040Z",
  "updatedAt": "2025-11-07T23:37:52.040Z",
  "__v": 0
}
```

*  Endpoint REST (opcional)

Podés agregar un endpoint REST para consultar todos los mensajes:

```Bash
// app.js
import express from "express";
import { Message } from "./models/Message.js";

const app = express();
app.use(express.json());

app.get("/api/messages", async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
});

export default app;

```

#  En Postman:

GET http://localhost:4000/api/messages

#  Autora
Micaela Juarez
Desarrollador Backend con Node.js | PostgreSQL | Sequelize | REST APIs

Repositorio en GitHub: https://github.com/Micaela-Juarez/api-chat-en-tiempo-real.git