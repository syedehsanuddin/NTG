/** Generated from: applications\ntg-ticket\api\features\Users\patchUserById.feature */
import { test } from "playwright-bdd";

test.describe("Update User By ID API Validation", () => {

  test("Update user with modified data and validate response", { tag: ["@patchUserById"] }, async ({ When, request, Then, And }) => {
    await When("I send a PATCH request to endpoint \"updateUserById\" with id \"50711385-db9d-4f1f-a74e-680b7d2ba4db\" and payload \"{\\\"name\\\":\\\"Ahmed Hassan al-Masri as\\\",\\\"email\\\":\\\"ahmed@company.comm\\\",\\\"roles\\\":[\\\"END_USER\\\",\\\"SUPPORT_STAFF\\\",\\\"SUPPORT_MANAGER\\\",\\\"ADMIN\\\"],\\\"isActive\\\":true}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
    await And("the response should have field \"message\"");
    await And("the response data should have field \"id\" equal to \"50711385-db9d-4f1f-a74e-680b7d2ba4db\"");
    await And("the response data should have field \"name\" equal to \"Ahmed Hassan al-Masri as\"");
    await And("the response data should have field \"email\" equal to \"ahmed@company.comm\"");
    await And("the response data should have field \"isActive\" equal to \"true\"");
    await And("the response data field \"roles\" should be an array");
    await And("the response data field \"roles\" should contain \"END_USER\"");
    await And("the response data field \"roles\" should contain \"SUPPORT_STAFF\"");
    await And("the response data field \"roles\" should contain \"SUPPORT_MANAGER\"");
    await And("the response data field \"roles\" should contain \"ADMIN\"");
    await And("the response data should have field \"updatedAt\"");
    await And("the response data field \"updatedAt\" should be a valid ISO date string");
  });

  test("Revert user to original data and validate response", { tag: ["@patchUserById"] }, async ({ When, request, Then, And }) => {
    await When("I send a PATCH request to endpoint \"updateUserById\" with id \"50711385-db9d-4f1f-a74e-680b7d2ba4db\" and payload \"{\\\"name\\\":\\\"Ahmed Hassan al-Masri\\\",\\\"email\\\":\\\"ahmed@company.com\\\",\\\"roles\\\":[\\\"END_USER\\\",\\\"SUPPORT_STAFF\\\"],\\\"isActive\\\":true}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
    await And("the response should have field \"message\"");
    await And("the response data should have field \"id\" equal to \"50711385-db9d-4f1f-a74e-680b7d2ba4db\"");
    await And("the response data should have field \"name\" equal to \"Ahmed Hassan al-Masri\"");
    await And("the response data should have field \"email\" equal to \"ahmed@company.com\"");
    await And("the response data should have field \"isActive\" equal to \"true\"");
    await And("the response data field \"roles\" should be an array");
    await And("the response data field \"roles\" should contain \"END_USER\"");
    await And("the response data field \"roles\" should contain \"SUPPORT_STAFF\"");
    await And("the response data field \"roles\" should not contain \"SUPPORT_MANAGER\"");
    await And("the response data field \"roles\" should not contain \"ADMIN\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\ntg-ticket\\api\\features\\Users\\patchUserById.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Update user with modified data and validate response": {"pickleLocation":"8:3","tags":["@patchUserById"]},
  "Revert user to original data and validate response": {"pickleLocation":"25:3","tags":["@patchUserById"]},
};