/** Generated from: applications\NTG-SMS\api\features\Messaging\put-messages-by-id-read.feature */
import { test } from "playwright-bdd";

test.describe("Put Read Message", () => {

  test("PUT Put Read Message returns successful response", { tag: ["@putReadMessage"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putReadMessage\" with id \"{STORED_READ_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Messaging\\put-messages-by-id-read.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Read Message returns successful response": {"pickleLocation":"6:3","tags":["@putReadMessage"]},
};