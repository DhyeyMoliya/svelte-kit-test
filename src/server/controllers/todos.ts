const data = {
    "todos": [
        {
            "id": 1,
            "title": "TODO 1",
            "description": "Description of TODO 1",
            "completed": true
        },
        {
            "id": 2,
            "title": "TODO 2",
            "description": "Description of TODO 2",
            "completed": false
        },
        {
            "id": 3,
            "title": "TODO 3",
            "description": "Description of TODO 3",
            "completed": true
        },
        {
            "id": 4,
            "title": "TODO 4",
            "description": "Description of TODO 4",
            "completed": false
        }
    ]
};

export const getTodos = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data.todos));
    });
}

export const getTodoById = async (_id: string | number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data.todos.find(todo => todo.id.toString() === _id.toString())), 1000);
    });
}