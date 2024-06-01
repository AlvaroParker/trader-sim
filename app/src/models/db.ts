import postgres from "postgres";

const username = process.env.POSTGRES_USER
const password = process.env.POSTGRES_PASSWORD
const database = process.env.POSTGRES_DB

const sql = postgres({ ssl: false, host: "database", username, password, database })

export default sql
