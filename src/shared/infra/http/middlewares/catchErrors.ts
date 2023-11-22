import { Request, Response, NextFunction } from "express";

import { AppError } from "@errors/AppError";

interface IErrorObject {
  status: string;
  message: string;
  info?: object;
  code?: number;
}

export async function catchErrors(
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction
): Promise<Response> {
  // Validação de erros nativos
  if (err instanceof AppError) {
    console.log(err);

    const errorObject: IErrorObject = {
      status: "error",
      message: err.message,
    };

    if (Object.prototype.hasOwnProperty.call(err, "code"))
      errorObject.code = err.code;

    return response.status(err.statusCode).json(errorObject);
  }

  return response.status(500).json({
    status: "error",
    message: `Internal Server Error - ${err.message}`,
  });
}
