interface Products {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

interface Users {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

interface TokenData {
  id: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

interface Orders {
  id: number;
  userId: number;
}

interface ByOrderProducts {
  id: number;
}

interface Order {
  id?: number;
  userId?: number;
  products?: number[];
}

export { Products, Users, TokenData, Orders, ByOrderProducts, Order };