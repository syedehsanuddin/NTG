# @postCreateStockTransaction

# Feature: Create a stock transaction (legacy)
#   Validate POST /api/v1/inventory/stock-transactions endpoint

#   Scenario: POST Create a stock transaction (legacy) returns successful response
#     When I send a POST request to endpoint "postCreateStockTransaction" with payload "{}"
#     Then the response status should be 201
#     And the response should have field "data"
