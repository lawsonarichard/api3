// manage products (8)
// manage clients (8)
// manage orders
// manage suppliers
const server = require("./api/server");

const port = 8000;
server.listen({ port }, () => console.log(`\nAPI on ${port}\n`));
