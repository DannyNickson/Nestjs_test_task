import { Model, Column, DataType, Table } from "sequelize-typescript";

interface ArticleCreationAttrs {
  title: string;
  body: string;
}
@Table({ tableName: "articles" })
export class Article extends Model<Article, ArticleCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  body: string;
}
