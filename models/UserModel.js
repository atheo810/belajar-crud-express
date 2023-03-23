// Import Sequalize dari depedencies
import { Sequelize } from "sequelize";

// Import db dari config/Database.js
import db from "../config/Database.js";

// membuat constrain { DataTypes } dari sequelize
const { DataTypes } = Sequelize;

// membuat const User berisi define dari tabel yang akan dibuat
// isi define ('nama tabel', 'field table', 'opsi'),
const User = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

// export constraint User
export default User;

// membuat asyncronus untuk db
(async () => {
  await db.sync();
})();
