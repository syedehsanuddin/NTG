@getSettingCategory

Feature: Get a specific settings category
  Validate GET /api/v1/settings/{category} endpoint

  Scenario: GET Get a specific settings category returns successful response
    When I send a GET request to endpoint "getSettingCategory" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
