/** Generated from: applications\NTG-RMS\api\features\Menu\post-create-buffet.feature */
import { test } from "playwright-bdd";

test.describe("Create a new buffet", () => {

  test("POST Create a new buffet returns successful response", { tag: ["@postCreateBuffet"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateBuffet\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\post-create-buffet.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new buffet returns successful response": {"pickleLocation":"6:3","tags":["@postCreateBuffet"]},
};