/** Generated from: applications\NTG-RMS\api\features\Restaurant\post-upload-logo.feature */
import { test } from "playwright-bdd";

test.describe("Upload restaurant logo to Supabase Storage", () => {

  test("POST Upload restaurant logo to Supabase Storage returns successful response", { tag: ["@postUploadLogo"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postUploadLogo\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Restaurant\\post-upload-logo.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Upload restaurant logo to Supabase Storage returns successful response": {"pickleLocation":"6:3","tags":["@postUploadLogo"]},
};