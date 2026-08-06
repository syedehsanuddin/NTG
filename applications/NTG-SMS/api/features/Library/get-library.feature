@getLibrary

Feature: Get Library
  Validate GET /api/v1/library endpoint

  Scenario: GET Get Library returns successful response
    When I send a GET request to endpoint "getLibrary"
    Then the response status should be 200
