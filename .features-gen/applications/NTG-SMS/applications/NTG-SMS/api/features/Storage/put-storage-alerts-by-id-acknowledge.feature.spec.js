/** Generated from: applications\NTG-SMS\api\features\Storage\put-storage-alerts-by-id-acknowledge.feature */
import { test } from "playwright-bdd";

test.describe("Put Alert Acknowledge Storage", () => {

  test("PUT Put Alert Acknowledge Storage returns successful response", { tag: ["@putAlertAcknowledgeStorage"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putAlertAcknowledgeStorage\" with id \"{STORED_ACKNOWLEDGE_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Storage\\put-storage-alerts-by-id-acknowledge.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Alert Acknowledge Storage returns successful response": {"pickleLocation":"6:3","tags":["@putAlertAcknowledgeStorage"]},
};