/** Generated from: applications\NTG-RMS\api\features\Delivery\TODOpost-assign-delivery.feature */
import { test } from "playwright-bdd";

test.describe("Assign delivery to personnel", () => {

  test("POST Assign delivery to personnel returns successful response", { tag: ["@postAssignDelivery"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postAssignDelivery\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Delivery\\TODOpost-assign-delivery.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Assign delivery to personnel returns successful response": {"pickleLocation":"6:3","tags":["@postAssignDelivery"]},
};