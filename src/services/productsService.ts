import connection from '../models/connection';
import ProductsModel from '../models/productsModel';
import { validateProduct } from '../schema/validations';
import { Products } from '../interfaces';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public getAll() {
    return this.model.getAll();
  }

  public async createProduct(product: Products) {
    const validate = validateProduct(product);
    if (validate) return validate;
    const create = await this.model.createProduct(product);

    return { code: 201, data: create };
  }
}