@getSearchLibrary

Feature: Get Search Library
  Validate GET /api/v1/library/search endpoint

  Scenario: GET Get Search Library returns successful response
    When I send a GET request to endpoint "getSearchLibrary"
    Then the response status should be 200
