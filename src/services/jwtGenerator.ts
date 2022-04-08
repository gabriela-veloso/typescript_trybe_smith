import jwt from 'jsonwebtoken';

import { TokenData } from '../interfaces';

const SECRET = 'seila';

export default (data: TokenData) => jwt.sign({ data }, SECRET);