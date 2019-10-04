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
      it(`${method} /contacts`, async function() {
        await chai
          .request(app)
          [method]('/contacts')
          .set('Authorisation', 'fskjvbjfdv')
          .then(req => {
            expect(req).to.have.status(401);
          });
      });
    }); // end of for each methods
  }); // end of notAuthorize function

  describe('allow access when the token is valid', function() {
    it('GET /contacts', async function() {
      await chai
        .request(app)
        .get('/contacts')
        .set('Authorisation', 'MY_SECRET_ENCRYPTED_TOKEN')
        .then(res => {
          expect(res).to.have.status(200);
        });
    });
  });
}); // end of checkAuth function

describe('test /contacts functionality', function() {
  let token;
  before(() => {
    token = 'MY_SECRET_ENCRYPTED_TOKEN';
  });

  it('retreve contacts successfuly', async function() {
    await chai
      .request(app)
      .get('/contacts')
      .set('Authorisation', token)
      .then(res => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.has.property('data');
        expect(res.body.data).to.be.an('array');
      });
  });
});
