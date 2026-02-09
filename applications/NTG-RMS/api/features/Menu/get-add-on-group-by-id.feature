@getAddOnGroupById

Feature: Get add-on group by ID
  Validate GET /api/v1/menu/add-on-groups/{id} endpoint

  Scenario: GET Get add-on group by ID returns successful response
    When I send a GET request to endpoint "getAddOnGroupById" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
