import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Products } from '../interfaces';

export default class ProductsModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll() {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );

    const [rows] = result;
    return rows as Products[];
  }

  // https://app.betrybe.com/course/back-end/typescript/express-com-typescript/5d873301-a228-40c3-85a3-621d4190cd71/conteudos/fee281d7-0e85-45cd-8092-817bd24546b0/criando-um-crud-de-livros/8d165a80-2d8c-417a-97d3-dbcb56f0e37c?use_case=side_bar
  // criando um CRUD de livros - Express com Typescript
  public async createProduct(product: Products) {
    const { name, amount } = product;
    const result = await this
      .connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [name, amount],
    );

    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { item: { id: insertId, ...product } };
  }
}