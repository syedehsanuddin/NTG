/** Generated from: applications\NTG-SMS\api\features\Push\post-push-subscribe.feature */
import { test } from "playwright-bdd";

test.describe("Post Subscribe Push", () => {

  test("POST Post Subscribe Push returns successful response", { tag: ["@postSubscribePush"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postSubscribePush\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Push\\post-push-subscribe.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Subscribe Push returns successful response": {"pickleLocation":"6:3","tags":["@postSubscribePush"]},
};