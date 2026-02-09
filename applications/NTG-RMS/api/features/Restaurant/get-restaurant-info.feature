@getRestaurantInfo

Feature: Get restaurant information
  Validate GET /api/v1/restaurant/info endpoint

  Scenario: GET Get restaurant information returns successful response
    When I send a GET request to endpoint "getRestaurantInfo"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
