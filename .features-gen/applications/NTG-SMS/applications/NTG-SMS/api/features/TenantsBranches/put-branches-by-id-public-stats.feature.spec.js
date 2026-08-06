/** Generated from: applications\NTG-SMS\api\features\TenantsBranches\put-branches-by-id-public-stats.feature */
import { test } from "playwright-bdd";

test.describe("Put Public Stat Branche", () => {

  test("PUT Put Public Stat Branche returns successful response", { tag: ["@putPublicStatBranche"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putPublicStatBranche\" with id \"{STORED_PUBLICSTAT_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TenantsBranches\\put-branches-by-id-public-stats.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Public Stat Branche returns successful response": {"pickleLocation":"6:3","tags":["@putPublicStatBranche"]},
};