/** Generated from: applications\NTG-SMS\api\features\Parents\delete-parents-by-id-children-by-student-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Children Parent", () => {

  test("DELETE Delete Children Parent returns successful response", { tag: ["@deleteChildrenParent"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteChildrenParent\" with id \"{STORED_CHILDREN_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Parents\\delete-parents-by-id-children-by-student-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete Children Parent returns successful response": {"pickleLocation":"6:3","tags":["@deleteChildrenParent"]},
};