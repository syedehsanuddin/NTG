/** Generated from: applications\NTG-SMS\api\features\ClassSections\get-class-sections-by-id-students.feature */
import { test } from "playwright-bdd";

test.describe("Get Student Class Section By Id", () => {

  test("GET Get Student Class Section By Id returns successful response", { tag: ["@getStudentClassSectionById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStudentClassSectionById\" with id \"{STORED_STUDENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ClassSections\\get-class-sections-by-id-students.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Student Class Section By Id returns successful response": {"pickleLocation":"6:3","tags":["@getStudentClassSectionById"]},
};