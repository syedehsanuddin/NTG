/** Generated from: applications\NTG-SMS\api\features\SetupWizard\post-setup-wizard-commit.feature */
import { test } from "playwright-bdd";

test.describe("Post Commit Setup Wizard", () => {

  test("POST Post Commit Setup Wizard returns successful response", { tag: ["@postCommitSetupWizard"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCommitSetupWizard\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SetupWizard\\post-setup-wizard-commit.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Commit Setup Wizard returns successful response": {"pickleLocation":"6:3","tags":["@postCommitSetupWizard"]},
};