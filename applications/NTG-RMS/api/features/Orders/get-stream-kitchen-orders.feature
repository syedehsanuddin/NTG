@getStreamKitchenOrders

Feature: Server-Sent Events stream for kitchen display order updates
  Validate GET /api/v1/orders/kitchen/stream endpoint

  Scenario: GET Server-Sent Events stream for kitchen display order updates returns successful response
    When I send a GET request to endpoint "getStreamKitchenOrders"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
