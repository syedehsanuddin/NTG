/** Generated from: applications\NTG-SMS\api\features\StudentSelfService\get-student-me.feature */
import { test } from "playwright-bdd";

test.describe("Get Me Student", () => {

  test("GET Get Me Student returns successful response", { tag: ["@getMeStudent"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getMeStudent\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\StudentSelfService\\get-student-me.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Me Student returns successful response": {"pickleLocation":"6:3","tags":["@getMeStudent"]},
};