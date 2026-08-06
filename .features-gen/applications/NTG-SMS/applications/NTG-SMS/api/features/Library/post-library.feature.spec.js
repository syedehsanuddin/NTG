/** Generated from: applications\NTG-SMS\api\features\Library\post-library.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Library", () => {

  test("POST Post Create Library returns successful response", { tag: ["@postCreateLibrary"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateLibrary\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Library\\post-library.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Library returns successful response": {"pickleLocation":"6:3","tags":["@postCreateLibrary"]},
};