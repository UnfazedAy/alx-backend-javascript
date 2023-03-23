const request = require('request');
const { expect } = require('chai');

describe('Index page', function() {
  it('should return a status code of 200', (done) => {
    request.get('http://localhost:7865/cart/3', (err, res, body) => {
      expect(res).to.exist;
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message when /cart/id is accessed', (done) => {
    request.get('http://localhost:7865/cart/3', (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 3')
      done();
    });
  });

  it('should return a 404 status code when /cart/id is accessed if id is negative', (done) => {
    request.get('http://localhost:7865/cart/-4', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return a 404 status code when /cart/id is accessed if id is string', (done) => {
    request.get('http://localhost:7865/cart/Ayomide', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});