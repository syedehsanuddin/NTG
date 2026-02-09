/** Generated from: applications\NTG-RMS\api\features\Restaurant\put-update-counter.feature */
import { test } from "playwright-bdd";

test.describe("Update a counter", () => {

  test("PUT Update a counter returns successful response", { tag: ["@putUpdateCounter"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpdateCounter\" with id \"test-id\" and payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Restaurant\\put-update-counter.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update a counter returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateCounter"]},
};