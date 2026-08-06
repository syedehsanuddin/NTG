/** Generated from: applications\NTG-SMS\api\features\Library\post-library-by-id-download.feature */
import { test } from "playwright-bdd";

test.describe("Post Download Library", () => {

  test("POST Post Download Library returns successful response", { tag: ["@postDownloadLibrary"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postDownloadLibrary\" with id \"{STORED_DOWNLOAD_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Library\\post-library-by-id-download.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Download Library returns successful response": {"pickleLocation":"6:3","tags":["@postDownloadLibrary"]},
};