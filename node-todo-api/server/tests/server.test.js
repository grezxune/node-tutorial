const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
  text: 'First test todo'
  }, {
    text: 'Second test todo'
  }];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res) => {
      expect(res.body.text).toBe(text);
    })
    .end((err, res) => {
      if (err) {
        done(err);
      } else {
        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      }
    });
  });

  it('should not create a new todo with invalid body data', (done) => {
    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err, res) => {
      if (err) {
        done(err);
      } else {
        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      }
    })
  })
});

describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res) => {
      expect(res.body.todos.length).toBe(2);
    })
    .end(done);
  });

  // it('should get todo by id', (done) => {
  //   var expected = {};
  //
  //   Todo.find().then((todos) => {
  //     var todo = todos[0];
  //     expected.id = todo._id;
  //     expected.text = todo.text;
  //     console.log('\n\n\n', expected.id);
  //
  //     request(app)
  //     .get(`/todos/${expected.id}`)
  //     .expect(200)
  //     .expect((res) => {
  //       console.log(res);
  //       expect(res.body.text.length).toNotBe(0);
  //       expect(res.body).toInclude(expected);
  //     })
  //     .end(done);
  //   }).catch((e) => done(e));
  // });
});
