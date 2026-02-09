@getDeliveryOrders

Feature: Get delivery orders
  Validate GET /api/v1/delivery/orders endpoint

  Scenario: GET Get delivery orders returns successful response
    When I send a GET request to endpoint "getDeliveryOrders"
    Then the response status should be 200
    # And the response should be a valid JSON array
    # And the response array should contain at least 1 item
