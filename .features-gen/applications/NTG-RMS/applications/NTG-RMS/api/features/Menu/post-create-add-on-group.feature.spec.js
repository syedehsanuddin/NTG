/** Generated from: applications\NTG-RMS\api\features\Menu\post-create-add-on-group.feature */
import { test } from "playwright-bdd";

test.describe("Create a new add-on group", () => {

  test("POST Create a new add-on group returns successful response", { tag: ["@postCreateAddOnGroup"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateAddOnGroup\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\post-create-add-on-group.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new add-on group returns successful response": {"pickleLocation":"6:3","tags":["@postCreateAddOnGroup"]},
};