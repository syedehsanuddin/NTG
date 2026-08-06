/** Generated from: applications\NTG-SMS\api\features\Students\put-students-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Put Update Student", () => {

  test("POST Create a new student returns successful response", { tag: ["@putUpdateStudent"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateStudent\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as student id");
  });

  test("PUT Put Update Student returns successful response", { tag: ["@putUpdateStudent"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateStudent\" with id \"{STORED_STUDENT_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Students\\put-students-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new student returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateStudent"]},
  "PUT Put Update Student returns successful response": {"pickleLocation":"11:3","tags":["@putUpdateStudent"]},
};