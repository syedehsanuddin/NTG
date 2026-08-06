/** Generated from: applications\NTG-SMS\api\features\Parents\get-parents-associations.feature */
import { test } from "playwright-bdd";

test.describe("Get Association Parent", () => {

  test("GET Get Association Parent returns successful response", { tag: ["@getAssociationParent"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAssociationParent\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Parents\\get-parents-associations.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Association Parent returns successful response": {"pickleLocation":"6:3","tags":["@getAssociationParent"]},
};