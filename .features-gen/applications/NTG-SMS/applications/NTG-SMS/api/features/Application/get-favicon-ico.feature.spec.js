/** Generated from: applications\NTG-SMS\api\features\Application\get-favicon-ico.feature */
import { test } from "playwright-bdd";

test.describe("Get Favicon Ico", () => {

  test("GET Get Favicon Ico returns successful response", { tag: ["@getFaviconIco"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getFaviconIco\"", null, { request });
    await Then("the response status should be 204");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Application\\get-favicon-ico.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Favicon Ico returns successful response": {"pickleLocation":"6:3","tags":["@getFaviconIco"]},
};