import { Member } from "src/member/entities/member";
import { DataSource, DataSourceOptions } from "typeorm";

export const mysqlDataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'example',
  database: 'db_aprendiz',
  entities: [Member],
  synchronize: true,
}

// export const mysqlDataSouce = new DataSource(mysqlDataSourceOptions)