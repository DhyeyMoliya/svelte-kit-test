import { getTodos } from "$controllers/db";

export async function get(req) {
    console.log('TEts : ', getTodos);
    try {
        const todos = await getTodos();
        return { status: 200, body: todos || [] };
    } catch (error) {
        console.log('Test : ', error);
        return { status: 500, body: error };
    }
}