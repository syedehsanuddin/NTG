/** Generated from: applications\NTG-SMS\api\features\Timetable\get-timetable-validate.feature */
import { test } from "playwright-bdd";

test.describe("Get Validate Timetable", () => {

  test("GET Get Validate Timetable returns successful response", { tag: ["@getValidateTimetable"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getValidateTimetable\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Timetable\\get-timetable-validate.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Validate Timetable returns successful response": {"pickleLocation":"6:3","tags":["@getValidateTimetable"]},
};