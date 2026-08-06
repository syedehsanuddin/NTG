/** Generated from: applications\NTG-SMS\api\features\Parents\get-parents-by-id-children.feature */
import { test } from "playwright-bdd";

test.describe("Get Children Parent By Id", () => {

  test("GET Get Children Parent By Id returns successful response", { tag: ["@getChildrenParentById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getChildrenParentById\" with id \"{STORED_CHILDREN_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Parents\\get-parents-by-id-children.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Children Parent By Id returns successful response": {"pickleLocation":"6:3","tags":["@getChildrenParentById"]},
};