/** Generated from: applications\NTG-SMS\api\features\Results\patch-results-by-id-comment.feature */
import { test } from "playwright-bdd";

test.describe("Patch Comment Result", () => {

  test("PATCH Patch Comment Result returns successful response", { tag: ["@patchCommentResult"] }, async ({ When, request, Then }) => {
    await When("I send a PATCH request to endpoint \"patchCommentResult\" with id \"{STORED_COMMENT_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Results\\patch-results-by-id-comment.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PATCH Patch Comment Result returns successful response": {"pickleLocation":"6:3","tags":["@patchCommentResult"]},
};