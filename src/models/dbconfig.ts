import { inicializarBanco } from "@/scripts/init_db";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
});

// Inicializa o BD com os produtos default apenas uma vez
let inicializado = false;

export async function initDB() {
    if (inicializado) return;

    try {
        await inicializarBanco();
        inicializado = true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
