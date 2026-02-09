/** Generated from: applications\NTG-RMS\api\features\Menu\post-upload-combo-meal-image.feature */
import { test } from "playwright-bdd";

test.describe("Upload combo meal image to Supabase Storage", () => {

  test("POST Upload combo meal image to Supabase Storage returns successful response", { tag: ["@postUploadComboMealImage"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postUploadComboMealImage\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\post-upload-combo-meal-image.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Upload combo meal image to Supabase Storage returns successful response": {"pickleLocation":"6:3","tags":["@postUploadComboMealImage"]},
};