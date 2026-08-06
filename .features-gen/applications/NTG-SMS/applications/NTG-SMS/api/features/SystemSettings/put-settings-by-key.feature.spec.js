/** Generated from: applications\NTG-SMS\api\features\SystemSettings\put-settings-by-key.feature */
import { test } from "playwright-bdd";

test.describe("Put Update Setting", () => {

  test("PUT Put Update Setting returns successful response", { tag: ["@putUpdateSetting"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateSetting\" with id \"{STORED_SETTING_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SystemSettings\\put-settings-by-key.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Update Setting returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateSetting"]},
};