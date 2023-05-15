import pg from "pg";
const { Pool } = pg;
export const pool = new Pool({
  connectionString:
    "postgresql://postgres:eNd1HF5HRCfrU940feQq@containers-us-west-34.railway.app:6236/railway",
  ssl: {
    rejectUnauthorized: false,
  },
});
