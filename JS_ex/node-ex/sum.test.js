const { sum, getUser, fetchData } = require("./sum");

test("Sum function Test Case", () => {
  expect(sum(2, 3)).toBe(5);
})

//not case
test("Sum function Test Not  Case", () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(2, 3)).not.toBe(4);
})

//Testing object

test('should return use with name', () => {
  expect(getUser("Sidhu")).toEqual({ name: "Sidhu" });
})


test('should not return use with name', () => {
  expect(getUser("Sidhu")).not.toEqual({ name: "Sintu" });
})


//Testing call back method

test('Should test call back', (done) => {
  function getData(param) {
    try {
      expect(param).toBe("Hello Data");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(getData);
}
)
