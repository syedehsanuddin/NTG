@getCategoryLibrary

Feature: Get Category Library
  Validate GET /api/v1/library/categories endpoint

  Scenario: GET Get Category Library returns successful response
    When I send a GET request to endpoint "getCategoryLibrary"
    Then the response status should be 200
