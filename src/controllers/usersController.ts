import { Request, Response } from 'express';
import UsersService from '../services/usersService';

class UsersController {
  constructor(private usersService = new UsersService()) { }

  public createUser = async (req: Request, res: Response) => {
    const { code, data } = await this.usersService.createUser(req.body);

    return res.status(code).json(data);
  };
}

export default UsersController;