import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

const envConfig = (path) => dotenv.parse(fs.readFileSync(path));

const env = envConfig(path.resolve(__dirname, '../', '.env'));

const dynamicENV = envConfig(
  path.resolve(__dirname, '../', `${process.env.NODE_ENV}.env`),
);

export default {
  ...env,
  ...dynamicENV,
};
