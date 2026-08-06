/** Generated from: applications\NTG-SMS\api\features\Library\post-library-upload.feature */
import { test } from "playwright-bdd";

test.describe("Post Upload Library", () => {

  test("POST Post Upload Library returns successful response", { tag: ["@postUploadLibrary"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postUploadLibrary\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Library\\post-library-upload.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Upload Library returns successful response": {"pickleLocation":"6:3","tags":["@postUploadLibrary"]},
};