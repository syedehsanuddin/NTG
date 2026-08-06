/** Generated from: applications\NTG-SMS\api\features\Messaging\put-conversations-by-id-read.feature */
import { test } from "playwright-bdd";

test.describe("Put Read Conversation", () => {

  test("PUT Put Read Conversation returns successful response", { tag: ["@putReadConversation"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putReadConversation\" with id \"{STORED_READ_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Messaging\\put-conversations-by-id-read.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Read Conversation returns successful response": {"pickleLocation":"6:3","tags":["@putReadConversation"]},
};