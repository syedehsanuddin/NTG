/** Generated from: applications\ntg-ticket\api\features\Users\getAllUsers.feature */
import { test } from "playwright-bdd";

test.describe("All Users API Validation", () => {

  test("GET All Users with limit returns exact number of records", { tag: ["@getAllUsers"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getAllUsers\" with headers \"limit=1\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should have exactly 1 items");
  });

  test("GET All Users with search filter returns matching users", { tag: ["@getAllUsers"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getAllUsers\" with headers \"search=Masri\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
    await And("all items should contain \"Masri\" in field \"name\"");
  });

  test("GET All Users with role filter returns only that role", { tag: ["@getAllUsers"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getAllUsers\" with headers \"role=ADMIN\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
    await And("all items should have field \"roles\" equal to \"ADMIN\"");
  });

  test("GET All Users with isActive true returns only active users", { tag: ["@getAllUsers"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getAllUsers\" with headers \"isActive=true\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
    await And("all items should have field \"isActive\" equal to \"true\"");
  });

  test("GET All Users with page and limit returns paged data", { tag: ["@getAllUsers"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getAllUsers\" with headers \"page=1;limit=2\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\ntg-ticket\\api\\features\\Users\\getAllUsers.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET All Users with limit returns exact number of records": {"pickleLocation":"6:3","tags":["@getAllUsers"]},
  "GET All Users with search filter returns matching users": {"pickleLocation":"13:3","tags":["@getAllUsers"]},
  "GET All Users with role filter returns only that role": {"pickleLocation":"21:3","tags":["@getAllUsers"]},
  "GET All Users with isActive true returns only active users": {"pickleLocation":"29:3","tags":["@getAllUsers"]},
  "GET All Users with page and limit returns paged data": {"pickleLocation":"37:3","tags":["@getAllUsers"]},
};