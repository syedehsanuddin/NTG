/** Generated from: applications\NTG-SMS\api\features\Staff\post-staff.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Staff", () => {

  test("POST Post Create Staff returns successful response", { tag: ["@postCreateStaff"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateStaff\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Staff\\post-staff.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Staff returns successful response": {"pickleLocation":"6:3","tags":["@postCreateStaff"]},
};