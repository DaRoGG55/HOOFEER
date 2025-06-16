services: 
  mysqlservice:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_DATABASE: ws24
      MYSQL_USER: test
      MYSQL_PASSWORD: abcdef
      MYSQL_ROOT_PASSWORD: abcdef
    ports:
      - 3306:3306
    volumes:
    # Mounts the init.sql file to docker entrypoint - runs the query on startup
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
  orderservice:
    build: ./orderservice
    ports:
      - 6010:6010
    depends_on:
      - mysqlservice
А вот подключение в моем приложении:

const mysql = require("mysql2/promise");
const pool = mysql.createPool({
    host: "mysqlservice:3306",
    user: "test",
    password: "abcdef",
    database: "ws24",
  });
  module.exports = pool;