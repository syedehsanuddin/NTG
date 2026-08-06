/** Generated from: applications\NTG-SMS\api\features\Messaging\delete-conversations-by-id-messages.feature */
import { test } from "playwright-bdd";

test.describe("Delete Message Conversation", () => {

  test("DELETE Delete Message Conversation returns successful response", { tag: ["@deleteMessageConversation"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteMessageConversation\" with id \"{STORED_MESSAGE_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Messaging\\delete-conversations-by-id-messages.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete Message Conversation returns successful response": {"pickleLocation":"6:3","tags":["@deleteMessageConversation"]},
};