/** Generated from: applications\NTG-SMS\api\features\AcademicYears\patch-academic-years-by-id-activate.feature */
import { test } from "playwright-bdd";

test.describe("Patch Activate Academic Year", () => {

  test("PATCH Patch Activate Academic Year returns successful response", { tag: ["@patchActivateAcademicYear"] }, async ({ When, request, Then }) => {
    await When("I send a PATCH request to endpoint \"patchActivateAcademicYear\" with id \"{STORED_ACTIVATE_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicYears\\patch-academic-years-by-id-activate.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PATCH Patch Activate Academic Year returns successful response": {"pickleLocation":"6:3","tags":["@patchActivateAcademicYear"]},
};