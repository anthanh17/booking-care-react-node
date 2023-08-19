const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("annt", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("connect successfully");
  } catch (error) {
    console.error("unable connect to database:", error);
  }
};

module.exports = connectDB;
