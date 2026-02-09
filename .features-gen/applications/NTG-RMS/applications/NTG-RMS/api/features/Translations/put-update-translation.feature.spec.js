/** Generated from: applications\NTG-RMS\api\features\Translations\put-update-translation.feature */
import { test } from "playwright-bdd";

test.describe("Update a specific translation (manual edit)", () => {

  test("PUT Update a specific translation (manual edit) returns successful response", { tag: ["@putUpdateTranslation"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpdateTranslation\" with payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Translations\\put-update-translation.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update a specific translation (manual edit) returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateTranslation"]},
};