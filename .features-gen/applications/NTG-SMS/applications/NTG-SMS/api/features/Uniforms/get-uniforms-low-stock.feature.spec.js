/** Generated from: applications\NTG-SMS\api\features\Uniforms\get-uniforms-low-stock.feature */
import { test } from "playwright-bdd";

test.describe("Get Low Stock Uniform", () => {

  test("GET Get Low Stock Uniform returns successful response", { tag: ["@getLowStockUniform"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getLowStockUniform\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Uniforms\\get-uniforms-low-stock.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Low Stock Uniform returns successful response": {"pickleLocation":"6:3","tags":["@getLowStockUniform"]},
};