/** Generated from: applications\NTG-SMS\api\features\Parents\put-parents-by-id-children-by-student-id.feature */
import { test } from "playwright-bdd";

test.describe("Put Children Parent", () => {

  test("PUT Put Children Parent returns successful response", { tag: ["@putChildrenParent"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putChildrenParent\" with id \"{STORED_CHILDREN_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Parents\\put-parents-by-id-children-by-student-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Children Parent returns successful response": {"pickleLocation":"6:3","tags":["@putChildrenParent"]},
};