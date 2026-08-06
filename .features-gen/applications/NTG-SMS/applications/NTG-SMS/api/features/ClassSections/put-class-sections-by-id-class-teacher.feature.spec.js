/** Generated from: applications\NTG-SMS\api\features\ClassSections\put-class-sections-by-id-class-teacher.feature */
import { test } from "playwright-bdd";

test.describe("Put Class Teacher Class Section", () => {

  test("PUT Put Class Teacher Class Section returns successful response", { tag: ["@putClassTeacherClassSection"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putClassTeacherClassSection\" with id \"{STORED_CLASSTEACHER_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ClassSections\\put-class-sections-by-id-class-teacher.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Class Teacher Class Section returns successful response": {"pickleLocation":"6:3","tags":["@putClassTeacherClassSection"]},
};