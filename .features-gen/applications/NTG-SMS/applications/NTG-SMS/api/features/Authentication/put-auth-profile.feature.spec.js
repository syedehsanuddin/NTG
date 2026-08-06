/** Generated from: applications\NTG-SMS\api\features\Authentication\put-auth-profile.feature */
import { test } from "playwright-bdd";

test.describe("Put Profile Auth", () => {

  test("PUT Put Profile Auth returns successful response", { tag: ["@putProfileAuth"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putProfileAuth\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Authentication\\put-auth-profile.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Profile Auth returns successful response": {"pickleLocation":"6:3","tags":["@putProfileAuth"]},
};