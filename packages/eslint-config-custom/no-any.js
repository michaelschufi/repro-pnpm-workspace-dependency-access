/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: ["./index.js"],
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
  },
};
