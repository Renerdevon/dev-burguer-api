import { Sequelize } from 'sequelize';
import Products from '../app/models/Products.js';
import User from '../app/models/User.js';
import databaseConfig from '../config/database.cjs';
import Category from '../app/models/category.js';

const models = [User, Products, Category];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }
}

export default new Database();
