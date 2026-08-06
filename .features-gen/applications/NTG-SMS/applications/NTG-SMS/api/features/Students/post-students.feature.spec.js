/** Generated from: applications\NTG-SMS\api\features\Students\post-students.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Student", () => {

  test("POST Post Create Student returns successful response", { tag: ["@postCreateStudent"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateStudent\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Students\\post-students.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Student returns successful response": {"pickleLocation":"6:3","tags":["@postCreateStudent"]},
};