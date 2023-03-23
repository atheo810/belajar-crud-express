// import Sequelize dari depedencies
import { Sequelize } from "sequelize";

// membuat variable db yang membuat instance dari Sequalize berisi tentang database ( isi nya hanya contoh )
const db = new Sequelize("latihan_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// export semua yang ada pada variable db
export default db;
