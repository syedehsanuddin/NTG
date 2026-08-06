/** Generated from: applications\NTG-SMS\api\features\Grades\get-grades.feature */
import { test } from "playwright-bdd";

test.describe("Get Grades", () => {

  test("GET Get Grades returns successful response", { tag: ["@getGrades"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getGrades\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Grades\\get-grades.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Grades returns successful response": {"pickleLocation":"6:3","tags":["@getGrades"]},
};