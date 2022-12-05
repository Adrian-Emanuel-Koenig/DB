/* -------------------------------------------------------------------------- */
/*                                   Server                                   */
/* -------------------------------------------------------------------------- */

/* ---------------------------------- Class --------------------------------- */
const express = require('express');
const app = express();
const port = process.env.port || 8000;
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);
const { engine } = require('express-handlebars');
/* ----------------------------------- DB ----------------------------------- */
const { mysql } = require('./options/mysql');
const { sqlite } = require('./options/sqlite');
const Contenedor = require('./container.js');
const Productos = new Contenedor(mysql, 'libros');
const Chats = new Contenedor(sqlite, 'chats');
/* --------------------------------- Config --------------------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.set('views', './views');
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
  })
);
httpServer.listen(port, () => console.log('SERVER ON http://localhost:' + port));

app.get('/', async (req, res) => {
  res.render('home');
});

io.on('connection', async (socket) => {
  const products = await Productos.getAll();
  socket.emit('allProducts', products);
  socket.on('msg', async (data) => {
    await Chats.save({ hora: Date(), ...data });
    io.sockets.emit('msg-list', await Chats.getAll());
  });

  socket.on('productoEnviado', saveProduct);
});

async function saveProduct(data) {
  await Productos.save(data);
  Productos.getAll().then((element) => io.sockets.emit('allProducts', element));
}
