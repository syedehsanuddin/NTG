/** Generated from: applications\NTG-SMS\api\features\TenantsBranches\post-branches.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Branche", () => {

  test("POST Post Create Branche returns successful response", { tag: ["@postCreateBranche"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateBranche\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TenantsBranches\\post-branches.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Branche returns successful response": {"pickleLocation":"6:3","tags":["@postCreateBranche"]},
};