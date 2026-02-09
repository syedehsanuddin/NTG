/** Generated from: applications\NTG-RMS\api\features\Menu\post-upload-category-image.feature */
import { test } from "playwright-bdd";

test.describe("Upload category image to Supabase Storage", () => {

  test("POST Upload category image to Supabase Storage returns successful response", { tag: ["@postUploadCategoryImage"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postUploadCategoryImage\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\post-upload-category-image.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Upload category image to Supabase Storage returns successful response": {"pickleLocation":"6:3","tags":["@postUploadCategoryImage"]},
};