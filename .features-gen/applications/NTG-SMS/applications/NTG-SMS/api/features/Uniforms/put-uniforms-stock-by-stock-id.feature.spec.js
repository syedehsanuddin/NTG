/** Generated from: applications\NTG-SMS\api\features\Uniforms\put-uniforms-stock-by-stock-id.feature */
import { test } from "playwright-bdd";

test.describe("Put Stock Uniform", () => {

  test("PUT Put Stock Uniform returns successful response", { tag: ["@putStockUniform"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putStockUniform\" with id \"{STORED_STOCK_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Uniforms\\put-uniforms-stock-by-stock-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Stock Uniform returns successful response": {"pickleLocation":"6:3","tags":["@putStockUniform"]},
};