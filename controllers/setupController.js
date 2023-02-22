var Todos = require('../models/todoModel');

// app refers to the express app
module.exports = function(app){
    app.get('/api/setupTodos', function(request, response){
        //seed database
        var starterTodos = [
            {
                username: 'test',
                todo: 'buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'learn node',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test2',
                todo: 'learn nestjs',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(error, results){
            response.send(results);
        });
    });
}