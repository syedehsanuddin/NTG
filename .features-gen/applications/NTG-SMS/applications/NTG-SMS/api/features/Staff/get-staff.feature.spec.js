/** Generated from: applications\NTG-SMS\api\features\Staff\get-staff.feature */
import { test } from "playwright-bdd";

test.describe("Get Staff", () => {

  test("GET Get Staff returns successful response", { tag: ["@getStaff"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStaff\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Staff\\get-staff.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Staff returns successful response": {"pickleLocation":"6:3","tags":["@getStaff"]},
};