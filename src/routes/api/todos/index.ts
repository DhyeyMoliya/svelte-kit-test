import { getTodos } from "$server/controllers/todos";

export async function get(req) {
    try {
        const todos = await getTodos();
        return { status: 200, body: todos || [] };
    } catch (error) {
        return { status: 500, body: {} };
    }
}