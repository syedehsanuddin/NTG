/** Generated from: applications\NTG-RMS\api\features\Restaurant\post-create-table.feature */
import { test } from "playwright-bdd";

test.describe("Create a new table", () => {

  test("POST Create a new table returns successful response", { tag: ["@postCreateTable"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateTable\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Restaurant\\post-create-table.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new table returns successful response": {"pickleLocation":"6:3","tags":["@postCreateTable"]},
};