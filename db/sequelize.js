const Sequelize = require("sequelize");
const StandUp = require("../models/standUp");

let sequelize
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     '5432',
    host:     'ec2-23-23-88-216.compute-1.amazonaws.com',
    logging:  true //false
  })
} else {
  sequelize = new Sequelize('standUp_DB', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
  })

}



const test = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    
}
test()



module.exports = sequelize