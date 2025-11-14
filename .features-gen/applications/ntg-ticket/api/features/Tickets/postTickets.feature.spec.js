/** Generated from: applications\ntg-ticket\api\features\Tickets\postTickets.feature */
import { test } from "playwright-bdd";

test.describe("Create Ticket API Validation", () => {

  test("POST Ticket with valid payload returns successful response", { tag: ["@postTicket", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("user creates a ticket with followin payload:", {"docString":{"content":"{\n  \"title\": \"NTA - Automated Test Ticket - No Action Required\",\n  \"description\": \"<p>This is an aumtated test ticket for test cycle purpose and will deleted automaticlaly.</p>\",\n  \"category\": \"63b9e3d4-85a5-4029-a458-2209cf4476a1\",\n  \"subcategory\": \"dfa5af36-b4a1-4657-8076-5df793828222\",\n  \"priority\": \"LOW\",\n  \"impact\": \"MINOR\",\n  \"urgency\": \"LOW\",\n  \"slaLevel\": \"STANDARD\",\n  \"customFields\": {}\n}"}}, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
    await And("the response should have field \"message\"");
    await And("the response data should have field \"id\"");
    await And("the response data should have field \"title\"");
    await And("the response data should have field \"description\"");
    await And("the response data should have field \"category\"");
    await And("the response data should have field \"subcategory\"");
    await And("the response data should have field \"priority\"");
    await And("the response data should have field \"impact\"");
    await And("the response data should have field \"urgency\"");
    await And("the response data should have field \"slaLevel\"");
    await When("the user deletes the recently created ticket", null, { request });
    await Then("the response status should be 200");
  });

  test("POST Ticket response contains correct data values", { tag: ["@postTicket", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("user creates a ticket with followin payload:", {"docString":{"content":"{\n  \"title\": \"NTA - Automated Test Ticket - No Action Required\",\n  \"description\": \"<p>This is an aumtated test ticket for test cycle purpose and will deleted automaticlaly.</p>\",\n  \"category\": \"63b9e3d4-85a5-4029-a458-2209cf4476a1\",\n  \"subcategory\": \"dfa5af36-b4a1-4657-8076-5df793828222\",\n  \"priority\": \"LOW\",\n  \"impact\": \"MINOR\",\n  \"urgency\": \"LOW\",\n  \"slaLevel\": \"STANDARD\",\n  \"customFields\": {}\n}"}}, { request });
    await Then("the response status should be 201");
    await And("the response content type should be \"application/json\"");
    await And("the response data should have field \"title\" equal to \"NTA - Automated Test Ticket - No Action Required\"");
    await And("the response data should have field \"priority\" equal to \"LOW\"");
    await And("the response data should have field \"impact\" equal to \"MINOR\"");
    await And("the response data should have field \"urgency\" equal to \"LOW\"");
    await And("the response data should have field \"slaLevel\" equal to \"STANDARD\"");
    await And("the response data should have field \"category\" equal to \"63b9e3d4-85a5-4029-a458-2209cf4476a1\"");
    await And("the response data should have field \"subcategory\" equal to \"dfa5af36-b4a1-4657-8076-5df793828222\"");
    await When("the user deletes the recently created ticket", null, { request });
    await Then("the response status should be 200");
  });

  test("POST Ticket with different category, subcategory, priority, impact, and urgency values", { tag: ["@postTicket", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("user creates a ticket with followin payload:", {"docString":{"content":"{\n  \"title\": \"NTA - Automated Test Ticket - No Action Required\",\n  \"description\": \"<p>This is an aumtated test ticket for test cycle purpose and will deleted automaticlaly.</p>\",\n  \"category\": \"decd32a2-8946-4455-9fbd-24073f5dd907\",\n  \"subcategory\": \"7f45e38b-459f-43e7-bc8d-05b5e4652981\",\n  \"priority\": \"MEDIUM\",\n  \"impact\": \"MAJOR\",\n  \"urgency\": \"HIGH\",\n  \"slaLevel\": \"STANDARD\",\n  \"customFields\": {}\n}"}}, { request });
    await Then("the response status should be 201");
    await And("the response content type should be \"application/json\"");
    await And("the response data should have field \"title\" equal to \"NTA - Automated Test Ticket - No Action Required\"");
    await And("the response data should have field \"priority\" equal to \"MEDIUM\"");
    await And("the response data should have field \"impact\" equal to \"MAJOR\"");
    await And("the response data should have field \"urgency\" equal to \"HIGH\"");
    await And("the response data should have field \"slaLevel\" equal to \"STANDARD\"");
    await And("the response data should have field \"category\" equal to \"decd32a2-8946-4455-9fbd-24073f5dd907\"");
    await And("the response data should have field \"subcategory\" equal to \"7f45e38b-459f-43e7-bc8d-05b5e4652981\"");
    await When("the user deletes the recently created ticket", null, { request });
    await Then("the response status should be 200");
  });

  test("POST Ticket response has valid data types", { tag: ["@postTicket", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("user creates a ticket with followin payload:", {"docString":{"content":"{\n  \"title\": \"NTA - Automated Test Ticket - No Action Required\",\n  \"description\": \"<p>This is an aumtated test ticket for test cycle purpose and will deleted automaticlaly.</p>\",\n  \"category\": \"63b9e3d4-85a5-4029-a458-2209cf4476a1\",\n  \"subcategory\": \"dfa5af36-b4a1-4657-8076-5df793828222\",\n  \"priority\": \"LOW\",\n  \"impact\": \"MINOR\",\n  \"urgency\": \"LOW\",\n  \"slaLevel\": \"STANDARD\",\n  \"customFields\": {}\n}"}}, { request });
    await Then("the response status should be 201");
    await And("the response data should have field \"id\" of type \"string\"");
    await And("the response data should have field \"title\" of type \"string\"");
    await And("the response data should have field \"description\" of type \"string\"");
    await And("the response data should have field \"category\" of type \"object\"");
    await And("the response data should have field \"subcategory\" of type \"object\"");
    await And("the response data should have field \"priority\" of type \"string\"");
    await And("the response data should have field \"impact\" of type \"string\"");
    await And("the response data should have field \"urgency\" of type \"string\"");
    await And("the response data should have field \"slaLevel\" of type \"string\"");
    await And("the response data should have field \"customFields\" of type \"object\"");
    await When("the user deletes the recently created ticket", null, { request });
    await Then("the response status should be 200");
  });

  test("POST Ticket response has required timestamp fields", { tag: ["@postTicket", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("user creates a ticket with followin payload:", {"docString":{"content":"{\n  \"title\": \"NTA - Automated Test Ticket - No Action Required\",\n  \"description\": \"<p>This is an aumtated test ticket for test cycle purpose and will deleted automaticlaly.</p>\",\n  \"category\": \"63b9e3d4-85a5-4029-a458-2209cf4476a1\",\n  \"subcategory\": \"dfa5af36-b4a1-4657-8076-5df793828222\",\n  \"priority\": \"LOW\",\n  \"impact\": \"MINOR\",\n  \"urgency\": \"LOW\",\n  \"slaLevel\": \"STANDARD\",\n  \"customFields\": {}\n}"}}, { request });
    await Then("the response status should be 201");
    await And("the response data should have field \"createdAt\"");
    await And("the response data should have field \"updatedAt\"");
    await And("the response data field \"createdAt\" should be a valid ISO date string");
    await And("the response data field \"updatedAt\" should be a valid ISO date string");
    await When("the user deletes the recently created ticket", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\ntg-ticket\\api\\features\\Tickets\\postTickets.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Ticket with valid payload returns successful response": {"pickleLocation":"5:3","tags":["@postTicket","@regression"]},
  "POST Ticket response contains correct data values": {"pickleLocation":"37:3","tags":["@postTicket","@regression"]},
  "POST Ticket with different category, subcategory, priority, impact, and urgency values": {"pickleLocation":"64:3","tags":["@postTicket","@regression"]},
  "POST Ticket response has valid data types": {"pickleLocation":"91:3","tags":["@postTicket","@regression"]},
  "POST Ticket response has required timestamp fields": {"pickleLocation":"120:3","tags":["@postTicket","@regression"]},
};