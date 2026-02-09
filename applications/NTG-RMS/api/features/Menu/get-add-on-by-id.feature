@getAddOnById

Feature: Get add-on by ID
  Validate GET /api/v1/menu/add-on-groups/{addOnGroupId}/add-ons/{id} endpoint

  Scenario: GET Get add-on by ID returns successful response
    When I send a GET request to endpoint "getAddOnById" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
