/** Generated from: applications\NTG-SMS\api\features\Timetable\get-timetable-class-by-class-section-id-template-info.feature */
import { test } from "playwright-bdd";

test.describe("Get Clas Template Info Timetable", () => {

  test("GET Get Clas Template Info Timetable returns successful response", { tag: ["@getClasTemplateInfoTimetable"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getClasTemplateInfoTimetable\" with id \"{STORED_TEMPLATEINFO_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Timetable\\get-timetable-class-by-class-section-id-template-info.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Clas Template Info Timetable returns successful response": {"pickleLocation":"6:3","tags":["@getClasTemplateInfoTimetable"]},
};