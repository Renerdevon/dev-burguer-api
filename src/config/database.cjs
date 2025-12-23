module.exports = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
        timestamps: true,
        underscored: true,
        underscoreAll: true,
    },
};


// Usuarios -> Nome, Email, Telefone, Data criação, Data atualização
// nome, email, telefone, data_criação, DataCriação