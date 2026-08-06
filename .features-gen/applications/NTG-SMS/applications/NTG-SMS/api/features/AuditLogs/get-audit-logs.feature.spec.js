/** Generated from: applications\NTG-SMS\api\features\AuditLogs\get-audit-logs.feature */
import { test } from "playwright-bdd";

test.describe("Get Audit Logs", () => {

  test("GET Get Audit Logs returns successful response", { tag: ["@getAuditLogs"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAuditLogs\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AuditLogs\\get-audit-logs.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Audit Logs returns successful response": {"pickleLocation":"6:3","tags":["@getAuditLogs"]},
};