/** Generated from: applications\NTG-SMS\api\features\PromotionPlacement\get-promotion-placement-students.feature */
import { test } from "playwright-bdd";

test.describe("Get Student Promotion Placement", () => {

  test("GET Get Student Promotion Placement returns successful response", { tag: ["@getStudentPromotionPlacement"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStudentPromotionPlacement\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\PromotionPlacement\\get-promotion-placement-students.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Student Promotion Placement returns successful response": {"pickleLocation":"6:3","tags":["@getStudentPromotionPlacement"]},
};