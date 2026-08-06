/** Generated from: applications\NTG-SMS\api\features\Messaging\get-conversations-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Conversation By Id", () => {

  test("POST Create a new conversation returns successful response", { tag: ["@getConversationById"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateConversation\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as conversation id");
  });

  test("GET Get Conversation By Id returns successful response", { tag: ["@getConversationById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getConversationById\" with id \"{STORED_CONVERSATION_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Messaging\\get-conversations-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new conversation returns successful response": {"pickleLocation":"6:3","tags":["@getConversationById"]},
  "GET Get Conversation By Id returns successful response": {"pickleLocation":"11:3","tags":["@getConversationById"]},
};