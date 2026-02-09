/** Generated from: applications\NTG-RMS\api\features\Menu\put-update-add-on.feature */
import { test } from "playwright-bdd";

test.describe("Update add-on", () => {

  test("PUT Update add-on returns successful response", { tag: ["@putUpdateAddOn"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpdateAddOn\" with id \"test-id\" and payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\put-update-add-on.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update add-on returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateAddOn"]},
};