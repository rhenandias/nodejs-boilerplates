import { app } from "./app";
import environment from "@config/environment";

app
  .listen(environment.PORT, () => {
    console.log(`Servidor iniciado na porta ${environment.PORT}`);
  })
  .on("error", () => {
    console.log(
      `Falha durante a inicialização do servidor na porta ${environment.PORT}`
    );
  });
