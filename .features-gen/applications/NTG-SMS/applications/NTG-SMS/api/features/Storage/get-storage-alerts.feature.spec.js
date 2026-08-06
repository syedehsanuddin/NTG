/** Generated from: applications\NTG-SMS\api\features\Storage\get-storage-alerts.feature */
import { test } from "playwright-bdd";

test.describe("Get Alert Storage", () => {

  test("GET Get Alert Storage returns successful response", { tag: ["@getAlertStorage"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAlertStorage\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Storage\\get-storage-alerts.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Alert Storage returns successful response": {"pickleLocation":"6:3","tags":["@getAlertStorage"]},
};