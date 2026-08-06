/** Generated from: applications\NTG-SMS\api\features\Uniforms\get-uniform-issuances-student-by-student-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Student Uniform Issuance", () => {

  test("GET Get Student Uniform Issuance returns successful response", { tag: ["@getStudentUniformIssuance"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStudentUniformIssuance\" with id \"{STORED_STUDENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Uniforms\\get-uniform-issuances-student-by-student-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Student Uniform Issuance returns successful response": {"pickleLocation":"6:3","tags":["@getStudentUniformIssuance"]},
};