@getDeliveryById

Feature: Get delivery by ID
  Validate GET /api/v1/delivery/orders/{id} endpoint

  Scenario: GET Get delivery by ID returns successful response
    When I send a GET request to endpoint "getDeliveryById" with id "test-id"
    Then the response status should be 200
    # And the response should have field "data"
