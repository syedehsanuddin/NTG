/** Generated from: applications\NTG-RMS\api\features\Restaurant\put-update-restaurant-info.feature */
import { test } from "playwright-bdd";

test.describe("Update restaurant information", () => {

  test("PUT Update restaurant information returns successful response", { tag: ["@putUpdateRestaurantInfo"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpdateRestaurantInfo\" with payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Restaurant\\put-update-restaurant-info.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update restaurant information returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateRestaurantInfo"]},
};