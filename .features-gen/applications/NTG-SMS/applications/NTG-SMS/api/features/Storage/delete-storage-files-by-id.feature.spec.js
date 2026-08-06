/** Generated from: applications\NTG-SMS\api\features\Storage\delete-storage-files-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete File Storage", () => {

  test("DELETE Delete File Storage returns successful response", { tag: ["@deleteFileStorage"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteFileStorage\" with id \"{STORED_FILE_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Storage\\delete-storage-files-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete File Storage returns successful response": {"pickleLocation":"6:3","tags":["@deleteFileStorage"]},
};