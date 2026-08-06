/** Generated from: applications\NTG-SMS\api\features\Staff\get-staff-me.feature */
import { test } from "playwright-bdd";

test.describe("Get Me Staff", () => {

  test("GET Get Me Staff returns successful response", { tag: ["@getMeStaff"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getMeStaff\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Staff\\get-staff-me.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Me Staff returns successful response": {"pickleLocation":"6:3","tags":["@getMeStaff"]},
};