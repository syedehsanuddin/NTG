@getFeatures

Feature: Get Features
  Validate GET /api/v1/features endpoint

  Scenario: GET Get Features returns successful response
    When I send a GET request to endpoint "getFeatures"
    Then the response status should be 200
