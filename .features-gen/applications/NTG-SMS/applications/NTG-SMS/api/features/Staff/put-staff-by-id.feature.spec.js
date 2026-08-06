/** Generated from: applications\NTG-SMS\api\features\Staff\put-staff-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Put Update Staff", () => {

  test("POST Create a new staff returns successful response", { tag: ["@putUpdateStaff"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateStaff\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as staff id");
  });

  test("PUT Put Update Staff returns successful response", { tag: ["@putUpdateStaff"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateStaff\" with id \"{STORED_STAFF_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Staff\\put-staff-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new staff returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateStaff"]},
  "PUT Put Update Staff returns successful response": {"pickleLocation":"11:3","tags":["@putUpdateStaff"]},
};