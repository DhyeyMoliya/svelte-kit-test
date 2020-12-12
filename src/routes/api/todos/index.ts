import { getTodos } from "../db";

export async function get(req) {
    try {
        const todos = await getTodos();
        return { status: 200, body: todos || [] };
    } catch (error) {
        return { status: 500, body: {} };
    }
}