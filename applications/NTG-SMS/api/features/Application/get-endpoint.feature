@getResource

Feature: Get Resource
  Validate GET / endpoint

  Scenario: GET Get Resource returns successful response
    When I send a GET request to endpoint "getResource"
    Then the response status should be 200
