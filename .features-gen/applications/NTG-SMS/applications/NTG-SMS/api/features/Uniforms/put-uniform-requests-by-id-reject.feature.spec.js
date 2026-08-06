/** Generated from: applications\NTG-SMS\api\features\Uniforms\put-uniform-requests-by-id-reject.feature */
import { test } from "playwright-bdd";

test.describe("Put Reject Uniform Request", () => {

  test("PUT Put Reject Uniform Request returns successful response", { tag: ["@putRejectUniformRequest"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putRejectUniformRequest\" with id \"{STORED_REJECT_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Uniforms\\put-uniform-requests-by-id-reject.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Reject Uniform Request returns successful response": {"pickleLocation":"6:3","tags":["@putRejectUniformRequest"]},
};