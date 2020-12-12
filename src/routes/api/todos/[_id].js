import { getTodoById } from "$controllers/db";

export async function get(req) {
    try {
        if (req && req.params && req.params._id) {
            const todo = await getTodoById(req.params._id);
            if (todo) {
                return { body: todo };
            } else {
                return { status: 404, body: { errorCode: 'NOT_FOUND', error: 'TODO not found' } };
            }
        } else {
            return { status: 400, body: { errorCode: 'BAD_REQUEST', error: 'ID not passed' } };
        }
    } catch (error) {
        return { status: 500, body: { errorCode: "SERVER_ERROR" } };
    }
}