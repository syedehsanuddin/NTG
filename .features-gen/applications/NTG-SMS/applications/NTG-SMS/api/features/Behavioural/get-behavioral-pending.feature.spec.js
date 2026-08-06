/** Generated from: applications\NTG-SMS\api\features\Behavioural\get-behavioral-pending.feature */
import { test } from "playwright-bdd";

test.describe("Get Pending Behavioral", () => {

  test("GET Get Pending Behavioral returns successful response", { tag: ["@getPendingBehavioral"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getPendingBehavioral\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Behavioural\\get-behavioral-pending.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Pending Behavioral returns successful response": {"pickleLocation":"6:3","tags":["@getPendingBehavioral"]},
};