import "./paths";

import express from "express";

import { router } from "@routes/index";
import { catchErrors } from "@middlewares/catchErrors";

const app = express();

app.use(router);
app.use(catchErrors);

export { app };
