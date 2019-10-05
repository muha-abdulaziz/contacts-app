// set environement to test, to use test configuration
process.env.NODE_ENV = 'test';

const chai = require('chai');

const contactModel = require('../../api/modules/contacts/contacts.model');

const { expect } = chai;

describe('Test contacts model functionality', function() {
  it('has add method', function() {
    expect(contactModel).to.have.property('add');
    expect(contactModel.add).to.be.a('function');
  });

  it('has find method', function() {
    expect(contactModel).to.have.property('find');
    expect(contactModel.add).to.be.a('function');
  });

  it('has findById method', function() {
    expect(contactModel).to.have.property('findById');
    expect(contactModel.findById).to.be.a('function');
  });

  it('has update method', function() {
    expect(contactModel).to.have.property('update');
    expect(contactModel.update).to.be.a('function');
  });

  it('has delete method', function() {
    expect(contactModel).to.have.property('delete');
    expect(contactModel.delete).to.be.a('function');
  });
});
