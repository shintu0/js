const sum = (a, b) => a + b;

const getUser = (name) => ({ name });

const fetchData = (someFunction) => {
  return someFunction("Hello Data");
}

module.exports = { sum, getUser, fetchData };