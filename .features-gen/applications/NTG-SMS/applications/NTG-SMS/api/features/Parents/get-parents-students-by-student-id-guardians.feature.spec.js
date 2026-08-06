/** Generated from: applications\NTG-SMS\api\features\Parents\get-parents-students-by-student-id-guardians.feature */
import { test } from "playwright-bdd";

test.describe("Get Student Guardian Parent", () => {

  test("GET Get Student Guardian Parent returns successful response", { tag: ["@getStudentGuardianParent"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStudentGuardianParent\" with id \"{STORED_GUARDIAN_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Parents\\get-parents-students-by-student-id-guardians.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Student Guardian Parent returns successful response": {"pickleLocation":"6:3","tags":["@getStudentGuardianParent"]},
};