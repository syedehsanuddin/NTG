/** Generated from: applications\NTG-SMS\api\features\ScheduleCalendar\put-timing-templates-by-id-assign-classes.feature */
import { test } from "playwright-bdd";

test.describe("Put Assign Classe Timing Template", () => {

  test("PUT Put Assign Classe Timing Template returns successful response", { tag: ["@putAssignClasseTimingTemplate"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putAssignClasseTimingTemplate\" with id \"{STORED_ASSIGNCLASSE_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ScheduleCalendar\\put-timing-templates-by-id-assign-classes.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Assign Classe Timing Template returns successful response": {"pickleLocation":"6:3","tags":["@putAssignClasseTimingTemplate"]},
};