import { DataTypes, Sequelize } from "sequelize";
const sequelize = new Sequelize()

const Book = sequelize.define('Books', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    category: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    published_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, { timestamps: true, createdAt: true, tableName: 'books' })

export const modules = Book;