/** Generated from: applications\NTG-SMS\api\features\AcademicYears\post-academic-years-by-id-rollover.feature */
import { test } from "playwright-bdd";

test.describe("Post Rollover Academic Year", () => {

  test("POST Post Rollover Academic Year returns successful response", { tag: ["@postRolloverAcademicYear"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postRolloverAcademicYear\" with id \"{STORED_ROLLOVER_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicYears\\post-academic-years-by-id-rollover.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Rollover Academic Year returns successful response": {"pickleLocation":"6:3","tags":["@postRolloverAcademicYear"]},
};