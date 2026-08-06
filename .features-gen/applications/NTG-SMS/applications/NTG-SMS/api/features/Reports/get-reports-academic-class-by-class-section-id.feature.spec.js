/** Generated from: applications\NTG-SMS\api\features\Reports\get-reports-academic-class-by-class-section-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Academic Clas Report", () => {

  test("GET Get Academic Clas Report returns successful response", { tag: ["@getAcademicClasReport"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAcademicClasReport\" with id \"{STORED_CLAS_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Reports\\get-reports-academic-class-by-class-section-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Academic Clas Report returns successful response": {"pickleLocation":"6:3","tags":["@getAcademicClasReport"]},
};