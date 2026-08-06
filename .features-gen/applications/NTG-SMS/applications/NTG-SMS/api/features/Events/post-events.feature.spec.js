/** Generated from: applications\NTG-SMS\api\features\Events\post-events.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Event", () => {

  test("POST Post Create Event returns successful response", { tag: ["@postCreateEvent"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateEvent\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Events\\post-events.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Event returns successful response": {"pickleLocation":"6:3","tags":["@postCreateEvent"]},
};