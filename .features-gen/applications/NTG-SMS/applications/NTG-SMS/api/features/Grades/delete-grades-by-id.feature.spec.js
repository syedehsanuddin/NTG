/** Generated from: applications\NTG-SMS\api\features\Grades\delete-grades-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Grade", () => {

  test("POST Create a new grade returns successful response", { tag: ["@deleteGrade"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateGrade\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as grade id");
  });

  test("DELETE Delete Grade returns successful response", { tag: ["@deleteGrade"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteGrade\" with id \"{STORED_GRADE_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Grades\\delete-grades-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new grade returns successful response": {"pickleLocation":"6:3","tags":["@deleteGrade"]},
  "DELETE Delete Grade returns successful response": {"pickleLocation":"11:3","tags":["@deleteGrade"]},
};