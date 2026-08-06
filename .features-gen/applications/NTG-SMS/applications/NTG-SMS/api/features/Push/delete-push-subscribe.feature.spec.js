/** Generated from: applications\NTG-SMS\api\features\Push\delete-push-subscribe.feature */
import { test } from "playwright-bdd";

test.describe("Delete Subscribe Push", () => {

  test("DELETE Delete Subscribe Push returns successful response", { tag: ["@deleteSubscribePush"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteSubscribePush\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Push\\delete-push-subscribe.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete Subscribe Push returns successful response": {"pickleLocation":"6:3","tags":["@deleteSubscribePush"]},
};