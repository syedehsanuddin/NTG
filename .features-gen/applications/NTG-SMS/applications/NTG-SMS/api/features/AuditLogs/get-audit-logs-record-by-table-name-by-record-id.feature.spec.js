/** Generated from: applications\NTG-SMS\api\features\AuditLogs\get-audit-logs-record-by-table-name-by-record-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Record Audit Log", () => {

  test("GET Get Record Audit Log returns successful response", { tag: ["@getRecordAuditLog"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getRecordAuditLog\" with id \"{STORED_RECORD_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AuditLogs\\get-audit-logs-record-by-table-name-by-record-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Record Audit Log returns successful response": {"pickleLocation":"6:3","tags":["@getRecordAuditLog"]},
};