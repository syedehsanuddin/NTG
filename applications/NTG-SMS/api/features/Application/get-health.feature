@getHealth

Feature: Get Health
  Validate GET /health endpoint

  Scenario: GET Get Health returns successful response
    When I send a GET request to endpoint "getHealth"
    Then the response status should be 200
