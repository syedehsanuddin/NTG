/** Generated from: applications\NTG-SMS\api\features\PromotionPlacement\post-promotion-placement-decisions.feature */
import { test } from "playwright-bdd";

test.describe("Post Decision Promotion Placement", () => {

  test("POST Post Decision Promotion Placement returns successful response", { tag: ["@postDecisionPromotionPlacement"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postDecisionPromotionPlacement\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\PromotionPlacement\\post-promotion-placement-decisions.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Decision Promotion Placement returns successful response": {"pickleLocation":"6:3","tags":["@postDecisionPromotionPlacement"]},
};