/** Generated from: applications\NTG-SMS\api\features\Staff\get-staff-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Staff By Id", () => {

  test("POST Create a new staff returns successful response", { tag: ["@getStaffById"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateStaff\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as staff id");
  });

  test("GET Get Staff By Id returns successful response", { tag: ["@getStaffById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStaffById\" with id \"{STORED_STAFF_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Staff\\get-staff-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new staff returns successful response": {"pickleLocation":"6:3","tags":["@getStaffById"]},
  "GET Get Staff By Id returns successful response": {"pickleLocation":"11:3","tags":["@getStaffById"]},
};