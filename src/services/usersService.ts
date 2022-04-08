import connection from '../models/connection';
import UsersModel from '../models/usersModel';
import { validateUser } from '../schema/validations';
import { Users } from '../interfaces';
import jwtGenerator from './jwtGenerator';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async createUser(user: Users) {
    const validate = validateUser(user);
    if (validate) return validate;
    const created = await this.model.createUser(user);

    const token = jwtGenerator(created);

    return { code: 201, data: { token } };
  }
}