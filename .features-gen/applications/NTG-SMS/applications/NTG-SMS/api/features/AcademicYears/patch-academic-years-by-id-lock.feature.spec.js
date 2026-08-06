/** Generated from: applications\NTG-SMS\api\features\AcademicYears\patch-academic-years-by-id-lock.feature */
import { test } from "playwright-bdd";

test.describe("Patch Lock Academic Year", () => {

  test("PATCH Patch Lock Academic Year returns successful response", { tag: ["@patchLockAcademicYear"] }, async ({ When, request, Then }) => {
    await When("I send a PATCH request to endpoint \"patchLockAcademicYear\" with id \"{STORED_LOCK_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicYears\\patch-academic-years-by-id-lock.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PATCH Patch Lock Academic Year returns successful response": {"pickleLocation":"6:3","tags":["@patchLockAcademicYear"]},
};