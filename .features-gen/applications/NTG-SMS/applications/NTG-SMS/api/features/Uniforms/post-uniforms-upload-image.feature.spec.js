/** Generated from: applications\NTG-SMS\api\features\Uniforms\post-uniforms-upload-image.feature */
import { test } from "playwright-bdd";

test.describe("Post Upload Image Uniform", () => {

  test("POST Post Upload Image Uniform returns successful response", { tag: ["@postUploadImageUniform"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postUploadImageUniform\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Uniforms\\post-uniforms-upload-image.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Upload Image Uniform returns successful response": {"pickleLocation":"6:3","tags":["@postUploadImageUniform"]},
};