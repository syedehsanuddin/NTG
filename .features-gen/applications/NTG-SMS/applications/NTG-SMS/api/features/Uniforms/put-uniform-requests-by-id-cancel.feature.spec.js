/** Generated from: applications\NTG-SMS\api\features\Uniforms\put-uniform-requests-by-id-cancel.feature */
import { test } from "playwright-bdd";

test.describe("Put Cancel Uniform Request", () => {

  test("PUT Put Cancel Uniform Request returns successful response", { tag: ["@putCancelUniformRequest"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putCancelUniformRequest\" with id \"{STORED_CANCEL_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Uniforms\\put-uniform-requests-by-id-cancel.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Cancel Uniform Request returns successful response": {"pickleLocation":"6:3","tags":["@putCancelUniformRequest"]},
};