require('should');

const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../app.js');

const Book = mongoose.model('Book');
const agent = request.agent(app);
describe('Book Crud Test', () => {
    it('Should allow a book to be posted and retrun read and _id', (done) => {
        const bookPost = { title : 'MyBook', author: 'Paul', genre: 'Fiction' }
        agent.post('/api/books')
            .send(bookPost);
    });
});
