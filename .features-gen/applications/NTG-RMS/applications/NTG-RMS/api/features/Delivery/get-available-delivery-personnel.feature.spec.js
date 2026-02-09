/** Generated from: applications\NTG-RMS\api\features\Delivery\get-available-delivery-personnel.feature */
import { test } from "playwright-bdd";

test.describe("Get available delivery personnel", () => {

  test("GET Get available delivery personnel returns successful response", { tag: ["@getAvailableDeliveryPersonnel"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAvailableDeliveryPersonnel\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Delivery\\get-available-delivery-personnel.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get available delivery personnel returns successful response": {"pickleLocation":"6:3","tags":["@getAvailableDeliveryPersonnel"]},
};