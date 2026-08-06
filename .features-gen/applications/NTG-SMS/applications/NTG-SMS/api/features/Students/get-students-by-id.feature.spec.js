/** Generated from: applications\NTG-SMS\api\features\Students\get-students-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Student By Id", () => {

  test("POST Create a new student returns successful response", { tag: ["@getStudentById"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateStudent\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as student id");
  });

  test("GET Get Student By Id returns successful response", { tag: ["@getStudentById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStudentById\" with id \"{STORED_STUDENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Students\\get-students-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new student returns successful response": {"pickleLocation":"6:3","tags":["@getStudentById"]},
  "GET Get Student By Id returns successful response": {"pickleLocation":"11:3","tags":["@getStudentById"]},
};