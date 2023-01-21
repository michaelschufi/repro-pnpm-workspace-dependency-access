/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: ["custom/no-any"],
  /**
   * Comment the above line and uncomment the following
   * to see that the lint error comes from the eslint-config-custom package.
   */
  // extends: ["plugin:@typescript-eslint/recommended"],
  // plugins: ["@typescript-eslint"],
};
