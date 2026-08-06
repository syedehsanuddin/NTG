/** Generated from: applications\NTG-SMS\api\features\Push\get-push-vapid-public-key.feature */
import { test } from "playwright-bdd";

test.describe("Get Vapid Public Key Push", () => {

  test("GET Get Vapid Public Key Push returns successful response", { tag: ["@getVapidPublicKeyPush"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getVapidPublicKeyPush\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Push\\get-push-vapid-public-key.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Vapid Public Key Push returns successful response": {"pickleLocation":"6:3","tags":["@getVapidPublicKeyPush"]},
};