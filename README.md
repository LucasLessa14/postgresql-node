# postgresql-node

```
docker run -p 5432:5432 -e POSTGRES_PASSWORD=lessa -e POSTGRES_USER=lessa -d postgres:12.4-alpine

# Cria um banco de dados
npx sequelize db:create

# Cria uma migration
npx sequelize migration:create --name=create-users

# Executa uma migration 
npx sequelize db:migrate

# Desfaz a ultima migration
npx sequelize db:migrate:undo
```