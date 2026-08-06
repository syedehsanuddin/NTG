/** Generated from: applications\NTG-SMS\api\features\Staff\post-staff-by-id-deactivate.feature */
import { test } from "playwright-bdd";

test.describe("Post Deactivate Staff", () => {

  test("POST Post Deactivate Staff returns successful response", { tag: ["@postDeactivateStaff"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postDeactivateStaff\" with id \"{STORED_DEACTIVATE_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Staff\\post-staff-by-id-deactivate.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Deactivate Staff returns successful response": {"pickleLocation":"6:3","tags":["@postDeactivateStaff"]},
};