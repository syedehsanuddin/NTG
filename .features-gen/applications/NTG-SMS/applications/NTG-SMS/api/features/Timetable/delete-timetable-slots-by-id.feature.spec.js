/** Generated from: applications\NTG-SMS\api\features\Timetable\delete-timetable-slots-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Slot Timetable", () => {

  test("POST Create a new slot returns successful response", { tag: ["@deleteSlotTimetable"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postSlotTimetable\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as slot id");
  });

  test("DELETE Delete Slot Timetable returns successful response", { tag: ["@deleteSlotTimetable"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteSlotTimetable\" with id \"{STORED_SLOT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Timetable\\delete-timetable-slots-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new slot returns successful response": {"pickleLocation":"6:3","tags":["@deleteSlotTimetable"]},
  "DELETE Delete Slot Timetable returns successful response": {"pickleLocation":"11:3","tags":["@deleteSlotTimetable"]},
};