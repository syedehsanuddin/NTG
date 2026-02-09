/** Generated from: applications\NTG-RMS\api\features\Restaurant\get-restaurant-info.feature */
import { test } from "playwright-bdd";

test.describe("Get restaurant information", () => {

  test("GET Get restaurant information returns successful response", { tag: ["@getRestaurantInfo"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getRestaurantInfo\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Restaurant\\get-restaurant-info.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get restaurant information returns successful response": {"pickleLocation":"6:3","tags":["@getRestaurantInfo"]},
};