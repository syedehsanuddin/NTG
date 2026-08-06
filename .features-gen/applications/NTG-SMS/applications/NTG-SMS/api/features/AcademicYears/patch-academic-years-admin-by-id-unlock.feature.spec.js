/** Generated from: applications\NTG-SMS\api\features\AcademicYears\patch-academic-years-admin-by-id-unlock.feature */
import { test } from "playwright-bdd";

test.describe("Patch Admin Unlock Academic Year", () => {

  test("PATCH Patch Admin Unlock Academic Year returns successful response", { tag: ["@patchAdminUnlockAcademicYear"] }, async ({ When, request, Then }) => {
    await When("I send a PATCH request to endpoint \"patchAdminUnlockAcademicYear\" with id \"{STORED_UNLOCK_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicYears\\patch-academic-years-admin-by-id-unlock.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PATCH Patch Admin Unlock Academic Year returns successful response": {"pickleLocation":"6:3","tags":["@patchAdminUnlockAcademicYear"]},
};