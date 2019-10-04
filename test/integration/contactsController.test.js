// set environement to test, to use test configuration
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

const app = require('../../app');

describe('Check Authintication of /contacts', function checkAuth() {
  describe('must forbidden when no Authorisation header', function forbidden() {
    const methods = ['get', 'post'];
    methods.forEach(method => {
      it(`${method} /contacts`, async function() {
        await chai
          .request(app)
          [method]('/contacts')
          .then(req => {
            expect(req).to.have.status(403);
          });
      });
    }); // end of for each methods
  }); // end of forbidden function

  describe('must not authorize when invalid token provided', function notAuthorize() {
    const methods = ['get', 'post'];
    methods.forEach(method => {
      it(`${method} /contacts`);
    }); // end of for each methods
  }); // end of notAuthorize function
}); // end of checkAuth function
