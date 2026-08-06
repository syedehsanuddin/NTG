/** Generated from: applications\NTG-SMS\api\features\Uniforms\get-uniform-issuances-report.feature */
import { test } from "playwright-bdd";

test.describe("Get Report Uniform Issuance", () => {

  test("GET Get Report Uniform Issuance returns successful response", { tag: ["@getReportUniformIssuance"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getReportUniformIssuance\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Uniforms\\get-uniform-issuances-report.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Report Uniform Issuance returns successful response": {"pickleLocation":"6:3","tags":["@getReportUniformIssuance"]},
};