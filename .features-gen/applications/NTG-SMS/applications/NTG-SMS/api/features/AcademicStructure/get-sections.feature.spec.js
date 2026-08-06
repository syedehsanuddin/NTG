/** Generated from: applications\NTG-SMS\api\features\AcademicStructure\get-sections.feature */
import { test } from "playwright-bdd";

test.describe("Get Sections", () => {

  test("GET Get Sections returns successful response", { tag: ["@getSections"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getSections\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicStructure\\get-sections.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Sections returns successful response": {"pickleLocation":"6:3","tags":["@getSections"]},
};