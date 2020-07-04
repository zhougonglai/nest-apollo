import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

export default dotenv.parse(
  fs.readFileSync(path.resolve(__dirname, '../', '.env')),
);
