
// import * as schema from './schema';


import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
const client = createClient({ url: 'TURSO_DATABASE_URL', authToken: 'TURSO_AUTH_TOKEN', });
export const db = drizzle(client);
