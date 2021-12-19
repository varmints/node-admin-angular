import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Permission } from "../entity/premission.entity";

export const Permissions = async (req: Request, res: Response) => {
  const repository = getManager().getRepository(Permission);

  res.send(await repository.find());
};
