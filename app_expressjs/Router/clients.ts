import { Router } from "express";
import clientsController from "../Controller/clientsController";

const clientsRouter = Router();

clientsRouter.get("/", clientsController.index);

clientsRouter.get('/create', clientsController.create);
clientsRouter.post('/create', clientsController.store)

clientsRouter.get("/:id", clientsController.show);

clientsRouter.get('/edit/:id', clientsController.edit);
clientsRouter.post('/edit/:id', clientsController.update);

clientsRouter.get('/delete/:id', clientsController.del);

clientsRouter.get("/sobre", (req, res) => {
  res.send("<h1>Sobre Mim</h1>");
});

clientsRouter.get("/contato", (req, res) => {
  res.send("<h1>Contato</h1> <p>Telefone: (11) 1234-5678</p>");
});



export default clientsRouter;
