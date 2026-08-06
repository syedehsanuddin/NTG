/** Generated from: applications\NTG-SMS\api\features\Staff\get-staff-by-id-assignments.feature */
import { test } from "playwright-bdd";

test.describe("Get Assignment Staff By Id", () => {

  test("GET Get Assignment Staff By Id returns successful response", { tag: ["@getAssignmentStaffById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAssignmentStaffById\" with id \"{STORED_ASSIGNMENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Staff\\get-staff-by-id-assignments.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Assignment Staff By Id returns successful response": {"pickleLocation":"6:3","tags":["@getAssignmentStaffById"]},
};