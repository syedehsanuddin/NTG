@getAvailableDeliveryPersonnel

Feature: Get available delivery personnel
  Validate GET /api/v1/delivery/personnel endpoint

  Scenario: GET Get available delivery personnel returns successful response
    When I send a GET request to endpoint "getAvailableDeliveryPersonnel"
    Then the response status should be 200
    # And the response should be a valid JSON array
    # And the response array should contain at least 1 item
