import { DataTypes, Model } from "sequelize";
import { sequelize } from "./dbconfig";

export class Produto extends Model {}

Produto.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        preco: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "Produto",
        timestamps: false,
    }
);