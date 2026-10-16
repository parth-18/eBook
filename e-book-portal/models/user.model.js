import { DataTypes, Sequelize } from "sequelize";
const sequelize = new Sequelize()

const User = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    full_name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    type: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, { timestamps: true, createdAt: true, tableName: 'users' })

export const modules = Book;