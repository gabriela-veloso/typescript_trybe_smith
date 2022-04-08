import { Pool } from 'mysql2/promise';
import { Orders, ByOrderProducts } from '../interfaces';

export default class OrdersModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll() {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Orders ORDER BY Trybesmith.Orders.userId',
    );

    const [rows] = result;
    return rows as Orders[];
  }

  public async byOrderIdProducts(id: number) {
    const result = await this.connection.execute(
      'SELECT id FROM Trybesmith.Products WHERE orderId= ?',
      [id],
    );
    const [rows] = result;
    return rows as ByOrderProducts[];
  }
}