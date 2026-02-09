/** Generated from: applications\NTG-RMS\api\features\Menu\post-create-add-on.feature */
import { test } from "playwright-bdd";

test.describe("Create a new add-on", () => {

  test("POST Create a new add-on returns successful response", { tag: ["@postCreateAddOn"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateAddOn\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\post-create-add-on.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new add-on returns successful response": {"pickleLocation":"6:3","tags":["@postCreateAddOn"]},
};