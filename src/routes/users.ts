import { Request, Response, Router } from "express";

const router = Router();

router.get("/users", (req: Request, res: Response) => {
  res.send("GET /users endpoint");
});

export { router as usersRouter };
