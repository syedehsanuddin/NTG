/** Generated from: applications\NTG-SMS\api\features\AcademicStructure\get-sections-by-id-deletion-check.feature */
import { test } from "playwright-bdd";

test.describe("Get Deletion Check Section By Id", () => {

  test("GET Get Deletion Check Section By Id returns successful response", { tag: ["@getDeletionCheckSectionById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getDeletionCheckSectionById\" with id \"{STORED_DELETIONCHECK_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicStructure\\get-sections-by-id-deletion-check.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Deletion Check Section By Id returns successful response": {"pickleLocation":"6:3","tags":["@getDeletionCheckSectionById"]},
};