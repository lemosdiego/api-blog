import { Model, Sequelize } from "sequelize";

class Blog extends Model {
  static init(sequelize) {
    super.init(
      {
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        author: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cover_image: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        summary: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        content: {
          type: Sequelize.JSONB,
          allowNull: false,
        },
      },
      { sequelize, tableName: "blog_posts" }
    );
  }
}
export default Blog;
