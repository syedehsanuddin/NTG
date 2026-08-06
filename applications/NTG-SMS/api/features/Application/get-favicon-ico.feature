@getFaviconIco

Feature: Get Favicon Ico
  Validate GET /favicon.ico endpoint

  Scenario: GET Get Favicon Ico returns successful response
    When I send a GET request to endpoint "getFaviconIco"
    Then the response status should be 204
