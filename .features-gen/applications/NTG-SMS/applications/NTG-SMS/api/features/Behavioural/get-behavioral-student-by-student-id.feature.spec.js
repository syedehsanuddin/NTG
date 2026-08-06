/** Generated from: applications\NTG-SMS\api\features\Behavioural\get-behavioral-student-by-student-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Student Behavioral", () => {

  test("GET Get Student Behavioral returns successful response", { tag: ["@getStudentBehavioral"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStudentBehavioral\" with id \"{STORED_STUDENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Behavioural\\get-behavioral-student-by-student-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Student Behavioral returns successful response": {"pickleLocation":"6:3","tags":["@getStudentBehavioral"]},
};