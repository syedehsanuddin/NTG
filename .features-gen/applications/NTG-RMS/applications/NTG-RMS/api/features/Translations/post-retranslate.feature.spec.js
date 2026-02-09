/** Generated from: applications\NTG-RMS\api\features\Translations\post-retranslate.feature */
import { test } from "playwright-bdd";

test.describe("Re-translate an entity using AI (Admin only)", () => {

  test("POST Re-translate an entity using AI (Admin only) returns successful response", { tag: ["@postRetranslate"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postRetranslate\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Translations\\post-retranslate.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Re-translate an entity using AI (Admin only) returns successful response": {"pickleLocation":"6:3","tags":["@postRetranslate"]},
};