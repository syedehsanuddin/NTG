@postCreateAddOnGroup

Feature: Create a new add-on group
  Validate POST /api/v1/menu/add-on-groups endpoint

  Scenario: POST Create a new add-on group returns successful response
    When I send a POST request to endpoint "postCreateAddOnGroup" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
