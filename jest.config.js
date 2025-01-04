/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts"],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};
