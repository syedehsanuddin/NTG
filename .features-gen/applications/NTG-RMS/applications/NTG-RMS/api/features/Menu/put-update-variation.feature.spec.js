/** Generated from: applications\NTG-RMS\api\features\Menu\put-update-variation.feature */
import { test } from "playwright-bdd";

test.describe("Update variation", () => {

  test("PUT Update variation returns successful response", { tag: ["@putUpdateVariation"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpdateVariation\" with id \"test-id\" and payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\put-update-variation.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update variation returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateVariation"]},
};