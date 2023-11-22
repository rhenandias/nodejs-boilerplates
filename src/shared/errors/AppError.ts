interface AppErrorProps {
  message: string;
  statusCode?: number;
  info?: object;
  code?: number;
}

class AppError {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly info?: object;
  public readonly code?: number;

  constructor({ message, statusCode, code, info }: AppErrorProps) {
    this.message = message;
    this.statusCode = statusCode || 400;
    this.info = info;
    this.code = code;
  }
}

export { AppError };
