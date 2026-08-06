/** Generated from: applications\NTG-SMS\api\features\ScheduleCalendar\delete-public-holidays-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Public Holiday", () => {

  test("POST Create a new publicholiday returns successful response", { tag: ["@deletePublicHoliday"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreatePublicHoliday\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as publicholiday id");
  });

  test("DELETE Delete Public Holiday returns successful response", { tag: ["@deletePublicHoliday"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deletePublicHoliday\" with id \"{STORED_PUBLICHOLIDAY_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ScheduleCalendar\\delete-public-holidays-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new publicholiday returns successful response": {"pickleLocation":"6:3","tags":["@deletePublicHoliday"]},
  "DELETE Delete Public Holiday returns successful response": {"pickleLocation":"11:3","tags":["@deletePublicHoliday"]},
};