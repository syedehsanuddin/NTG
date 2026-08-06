/** Generated from: applications\NTG-SMS\api\features\Parents\post-parents-by-id-children.feature */
import { test } from "playwright-bdd";

test.describe("Post Children Parent", () => {

  test("POST Post Children Parent returns successful response", { tag: ["@postChildrenParent"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postChildrenParent\" with id \"{STORED_CHILDREN_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Parents\\post-parents-by-id-children.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Children Parent returns successful response": {"pickleLocation":"6:3","tags":["@postChildrenParent"]},
};