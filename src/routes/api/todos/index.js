import { getTodos } from "$controllers/db";

console.log('Test :', getTodos);

export async function get(req) {
    try {
        const todos = await getTodos();
        return { status: 200, body: todos || [] };
    } catch (error) {
        console.error('Er : ', error);
        return { status: 500, body: error };
    }
}