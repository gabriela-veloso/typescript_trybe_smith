import connection from '../models/connection';
import OrdersModel from '../models/ordersModel';
import { Order } from '../interfaces';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll() {
    const allOrders = await this.model.getAll();
    const correctArr: Order[] = [];

    const answer = allOrders.map(async (order) => {
      const { id } = order;
      
      const result = await this.model.byOrderIdProducts(id);
      
      const products = result.map((item) => item.id);
      
      correctArr.push({ ...order, products });
    });
    await Promise.all(answer);
    return correctArr;
  }
}