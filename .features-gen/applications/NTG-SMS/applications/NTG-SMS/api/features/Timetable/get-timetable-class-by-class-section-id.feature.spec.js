/** Generated from: applications\NTG-SMS\api\features\Timetable\get-timetable-class-by-class-section-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Clas Timetable", () => {

  test("GET Get Clas Timetable returns successful response", { tag: ["@getClasTimetable"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getClasTimetable\" with id \"{STORED_CLAS_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Timetable\\get-timetable-class-by-class-section-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Clas Timetable returns successful response": {"pickleLocation":"6:3","tags":["@getClasTimetable"]},
};