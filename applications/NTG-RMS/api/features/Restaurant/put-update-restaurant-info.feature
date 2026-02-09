@putUpdateRestaurantInfo

Feature: Update restaurant information
  Validate PUT /api/v1/restaurant/info endpoint

  Scenario: PUT Update restaurant information returns successful response
    When I send a PUT request to endpoint "putUpdateRestaurantInfo" with payload "{}"
    Then the response status should be 200
    And the response should have field "data"
