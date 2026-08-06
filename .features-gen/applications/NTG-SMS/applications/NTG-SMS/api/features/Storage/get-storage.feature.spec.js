/** Generated from: applications\NTG-SMS\api\features\Storage\get-storage.feature */
import { test } from "playwright-bdd";

test.describe("Get Storage", () => {

  test("GET Get Storage returns successful response", { tag: ["@getStorage"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStorage\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Storage\\get-storage.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Storage returns successful response": {"pickleLocation":"6:3","tags":["@getStorage"]},
};