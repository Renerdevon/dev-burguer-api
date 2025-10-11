module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: '123456',
    database: 'dev-burguer-db',
    define: {
    timestamps: true,
    underscored: true,
    underscoreAll: true,
    },
};

// Usuarios -> Nome, Email, Telefone, Data criação, Data atualização
// nome, email, telefone, data_criação, DataCriação