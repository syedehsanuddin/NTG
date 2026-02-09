@getVariationGroupById

Feature: Get variation group by ID
  Validate GET /api/v1/menu/variation-groups/{id} endpoint

  Scenario: GET Get variation group by ID returns successful response
    When I send a GET request to endpoint "getVariationGroupById" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
