// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  bail: true, //para teste assim que encontra falha
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.test.js?(x)",
  ],
};
