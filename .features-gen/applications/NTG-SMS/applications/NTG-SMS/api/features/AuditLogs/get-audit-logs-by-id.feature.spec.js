/** Generated from: applications\NTG-SMS\api\features\AuditLogs\get-audit-logs-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Audit Log By Id", () => {

  test("GET Get Audit Log By Id returns successful response", { tag: ["@getAuditLogById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAuditLogById\" with id \"{STORED_AUDITLOG_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AuditLogs\\get-audit-logs-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Audit Log By Id returns successful response": {"pickleLocation":"6:3","tags":["@getAuditLogById"]},
};