/** Generated from: applications\NTG-SMS\api\features\Library\post-library-by-id-view.feature */
import { test } from "playwright-bdd";

test.describe("Post View Library", () => {

  test("POST Post View Library returns successful response", { tag: ["@postViewLibrary"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postViewLibrary\" with id \"{STORED_VIEW_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Library\\post-library-by-id-view.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post View Library returns successful response": {"pickleLocation":"6:3","tags":["@postViewLibrary"]},
};