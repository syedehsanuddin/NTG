/** Generated from: applications\NTG-RMS\api\features\Auth\post-signup.feature */
import { test } from "playwright-bdd";

test.describe("Register a new user", () => {

  test("POST Register a new user returns successful response", { tag: ["@postSignup"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postSignup\" with payload '{\"email\":\"{GENERATE_EMAIL}\",\"password\":\"12345678\",\"name\":\"Automated Test\",\"phone\":\"+923483985864\",\"defaultCurrency\":\"USD\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Auth\\post-signup.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Register a new user returns successful response": {"pickleLocation":"6:3","tags":["@postSignup"]},
};