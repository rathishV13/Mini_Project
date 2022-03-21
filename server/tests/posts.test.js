const request = require("supertest");
const app = require("../index");
const {
  connect,
  close,
  clear
} = require("./config/database");

const agent = request.agent(app);

beforeAll(async () => await connect());
afterAll(async () => await close());

describe("Post Endpoints", () => {

  it('Should Add A New User', async () => {
    const res = await agent
      .post('/api/auth/register')
      .send({
        "username": "test",
        "email": "test@gmail.com",
        "password": "test"
      })
    expect(res.statusCode).toEqual(201)
  })


  it('Should Login A User', async () => {
    const res = await agent
      .post('/api/auth/login')
      .send({
        "username": "test",
        "password": "test"
      })
    expect(res.statusCode).toEqual(200)
  })

});