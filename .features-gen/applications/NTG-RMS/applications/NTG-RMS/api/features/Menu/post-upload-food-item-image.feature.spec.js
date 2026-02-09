/** Generated from: applications\NTG-RMS\api\features\Menu\post-upload-food-item-image.feature */
import { test } from "playwright-bdd";

test.describe("Upload food item image to Supabase Storage", () => {

  test("POST Upload food item image to Supabase Storage returns successful response", { tag: ["@postUploadFoodItemImage"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postUploadFoodItemImage\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\post-upload-food-item-image.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Upload food item image to Supabase Storage returns successful response": {"pickleLocation":"6:3","tags":["@postUploadFoodItemImage"]},
};