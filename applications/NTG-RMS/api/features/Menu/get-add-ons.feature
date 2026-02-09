@getAddOns

Feature: Get all add-ons in a group
  Validate GET /api/v1/menu/add-on-groups/{addOnGroupId}/add-ons endpoint

  Scenario: GET Get all add-ons in a group returns successful response
    When I send a GET request to endpoint "getAddOns" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
