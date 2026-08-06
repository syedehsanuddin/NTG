/** Generated from: applications\NTG-SMS\api\features\Uniforms\post-uniforms-by-id-stock.feature */
import { test } from "playwright-bdd";

test.describe("Post Stock Uniform", () => {

  test("POST Post Stock Uniform returns successful response", { tag: ["@postStockUniform"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postStockUniform\" with id \"{STORED_STOCK_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Uniforms\\post-uniforms-by-id-stock.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Stock Uniform returns successful response": {"pickleLocation":"6:3","tags":["@postStockUniform"]},
};