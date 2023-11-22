import "module-alias/register";
import { addAliases } from "module-alias";

addAliases({
  "@config": `${__dirname}/src/config`,
  "@modules": `${__dirname}/src/modules`,
  "@middlewares": `${__dirname}/src/shared/infra/http/middlewares`,
  "@errors": `${__dirname}/src/shared/errors`,
  "@container": `${__dirname}/src/shared/container`,
  "@shared": `${__dirname}/src/shared`,
  "@typeorm": `${__dirname}/src/shared/infra/typeorm/`,
  "@routes": `${__dirname}/src/shared/infra/http/routes/`,
});
