/** Generated from: applications\NTG-SMS\api\features\Messaging\get-conversations.feature */
import { test } from "playwright-bdd";

test.describe("Get Conversations", () => {

  test("GET Get Conversations returns successful response", { tag: ["@getConversations"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getConversations\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Messaging\\get-conversations.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Conversations returns successful response": {"pickleLocation":"6:3","tags":["@getConversations"]},
};