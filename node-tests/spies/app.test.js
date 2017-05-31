const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Tommy', 25);

        expect(spy).toHaveBeenCalledWith('Tommy', 25);
    });

    it('should call save user with user object', () => {
        var email = 'tomtrezb2003@gmail.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email: email,
            password: password
        });
    });
});
