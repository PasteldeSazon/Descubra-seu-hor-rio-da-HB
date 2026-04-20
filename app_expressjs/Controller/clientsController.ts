import { Request, Response } from "express";
import { IClient } from "../Model/clients";  
import clientsModel from "../Model/clientsModel"; 

async function index(req: Request, res: Response, next: any) {
  const clients = await clientsModel.findAll();
  res.render("index", { clients }); // Isso envia os dados para o seu index.pug
}

async function show(req: Request, res: Response, next: any) {
  const clients = await clientsModel.findByPk(req.params.id);
  res.json(clients);
}
function create(req: Request, res: Response, next: any) {
  res.render("create");}

  async function store(req: Request, res: Response, next: any) {
  try {
    const data = req.body;
    console.log("Dados recebidos do formulário:", data); // Isso ajuda a ver o que está chegando
    await clientsModel.create(data);
    res.redirect("/");
  } catch (error) {
    console.error("Erro ao salvar:", error);
    res.send("Erro ao salvar os dados. Verifique o terminal.");
  }
}
  
async function edit(req: Request, res: Response, next: any) {
  const clients = await clientsModel.findByPk(req.params.id);
  res.render("edit", {client: clients });
}

async function update(req: Request, res: Response, next: any) {
  await clientsModel.update(
    req.body as IClient,
    {
      where: {
        id: req.params.id
      }
    }
  );
  res.redirect("/");
}

async function del(req: Request, res: Response, next: any) {
 await clientsModel.destroy({
    where: {
      id: req.params.id}
 })
  res.redirect("/");
}

export default { index, create, store, show, edit, update, del };
