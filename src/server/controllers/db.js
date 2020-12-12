const data = {
    "todos": [
        {
            "_id": 1,
            "title": "TODO 1",
            "description": "Description of TODO 1",
            "completed": true
        },
        {
            "_id": 2,
            "title": "TODO 2",
            "description": "Description of TODO 2",
            "completed": false
        },
        {
            "_id": 3,
            "title": "TODO 3",
            "description": "Description of TODO 3",
            "completed": true
        },
        {
            "_id": 4,
            "title": "TODO 4",
            "description": "Description of TODO 4",
            "completed": false
        }
    ]
};

export async function getTodos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data.todos));
    });
}

export async function getTodoById(_id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data.todos.find(todo => todo._id.toString() === _id.toString())), 1000);
    });
}