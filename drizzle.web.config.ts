import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './drizzle/web',
  schema: 'drizzle/web/schema.ts',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_WEB_URL!,
  },
});
