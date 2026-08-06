/** Generated from: applications\NTG-SMS\api\features\Grades\put-grades-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Put Update Grade", () => {

  test("POST Create a new grade returns successful response", { tag: ["@putUpdateGrade"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateGrade\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as grade id");
  });

  test("PUT Put Update Grade returns successful response", { tag: ["@putUpdateGrade"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateGrade\" with id \"{STORED_GRADE_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Grades\\put-grades-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new grade returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateGrade"]},
  "PUT Put Update Grade returns successful response": {"pickleLocation":"11:3","tags":["@putUpdateGrade"]},
};