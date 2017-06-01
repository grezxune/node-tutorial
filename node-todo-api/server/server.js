var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

var newUser = new User({
    email: 'tomtrezb2003@gmail.com'
});

newUser.save().then((doc) => {
    console.log('Saved user!', doc);
}, (err) => {
    console.log('Unable to save user!', err);
});

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: ' CREATE COOL STUFF!!      ',
    completed: true,
    completedAt: 5959595959
});

newTodo.save().then((doc) => {
    console.log('Saved todo!', doc);
}, (err) => {
    console.log('Unable to save todo', err);
});
