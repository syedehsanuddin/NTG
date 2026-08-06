/** Generated from: applications\NTG-SMS\api\features\Messaging\post-conversations-by-id-messages.feature */
import { test } from "playwright-bdd";

test.describe("Post Message Conversation", () => {

  test("POST Post Message Conversation returns successful response", { tag: ["@postMessageConversation"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postMessageConversation\" with id \"{STORED_MESSAGE_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Messaging\\post-conversations-by-id-messages.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Message Conversation returns successful response": {"pickleLocation":"6:3","tags":["@postMessageConversation"]},
};