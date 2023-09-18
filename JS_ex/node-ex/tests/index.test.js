const supertest = require('supertest');
const { app } = require('..');


async function testHomePage() {
  try {
    await supertest(app).get("/").
      expect(200).
      //.send({}) //to send something
      then((result) => {
        expect(result.body && result && typeof result.body === "object");
      });
  } catch (error) {

  }
}

test('should home page', async (done) => {

  try {
    await testHomePage();
    done();
  } catch (error) {
    done(error);
  }
  // done();
})