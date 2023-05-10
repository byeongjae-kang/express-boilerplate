import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  errors: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(400).send({ errors: [{ message: "something went wrong" }] });
};
