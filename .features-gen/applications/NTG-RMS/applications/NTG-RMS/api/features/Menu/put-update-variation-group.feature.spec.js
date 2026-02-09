/** Generated from: applications\NTG-RMS\api\features\Menu\put-update-variation-group.feature */
import { test } from "playwright-bdd";

test.describe("Update variation group", () => {

  test("PUT Update variation group returns successful response", { tag: ["@putUpdateVariationGroup"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpdateVariationGroup\" with id \"test-id\" and payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\put-update-variation-group.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update variation group returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateVariationGroup"]},
};