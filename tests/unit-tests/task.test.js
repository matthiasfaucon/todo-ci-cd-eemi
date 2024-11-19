const TaskController = require('../../controllers/TaskController');

// describe('Task controller - unit test', () => {
//     let taskController;
//     let mockTaskModel;
//     let req;
//     let res;
//     let next;

//     beforeEach(() => {
//         mockTaskModel = {
//             find: jest.fn(),
//             findOneAndUpdate: jest.fn(),
//         };
//         taskController = new TaskController(mockTaskModel);
//         req = { query: {}, params: {}, body: {} };
//         res = { json: jest.fn(), sendStatus: jest.fn() };
//         next = jest.fn();
//     });

//     afterEach(() => {
//         jest.clearAllMocks();
//     });

//     test('should get all tasks', async () => {

//         const tasks = [{ id: 1, name: 'Test Task' }];
//         mockTaskModel.find.mockResolvedValue(tasks);

//         await taskController.all(req, res, next);

//         expect(mockTaskModel.find).toHaveBeenCalledWith(req.query);
//         expect(res.json).toHaveBeenCalledWith(tasks);
//     });

//     test('should update a task', async () => {
//         const updatedTask = { id: 1, name: 'Updated Task' };
//         req.params.id = 1;
//         req.body = { name: 'Updated Task' };
//         mockTaskModel.findOneAndUpdate.mockResolvedValue(updatedTask);

//         await taskController.update(req, res, next);

//         expect(mockTaskModel.findOneAndUpdate).toHaveBeenCalledWith(
//             { _id: req.params.id },
//             req.body,
//             { new: true }
//         );
//         expect(res.json).toHaveBeenCalledWith(updatedTask);
//     });

//     test('should return 404 if task to update is not found', async () => {
//         req.params.id = 1;
//         req.body = { name: 'Updated Task' };
//         mockTaskModel.findOneAndUpdate.mockResolvedValue(null);

//         await taskController.update(req, res, next);

//         expect(mockTaskModel.findOneAndUpdate).toHaveBeenCalledWith(
//             { _id: req.params.id },
//             req.body,
//             { new: true }
//         );
//         expect(res.sendStatus).toHaveBeenCalledWith(404);
//     });
// });

describe('Task controller - unit test', () => {
    const tasks = []
    const Task = {
        find: jest.fn( () => tasks),
        findOneAndUpdate: jest.fn(),
    }

    it("should get all tasks", async () => {
        const taskController = new TaskController(Task);

        const req = { 
            query: {} 
        };
        const res = { 
            json: jest.fn()
        };
        const next = jest.fn();

        await taskController.all(req, res, next());

        expect(Task.find).toHaveBeenCalledWith(req.query);
        expect(res.json).toHaveBeenCalledWith(tasks);
    });
})