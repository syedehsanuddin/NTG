@postCreateAddOn

Feature: Create a new add-on
  Validate POST /api/v1/menu/add-on-groups/{addOnGroupId}/add-ons endpoint

  Scenario: POST Create a new add-on returns successful response
    When I send a POST request to endpoint "postCreateAddOn" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
