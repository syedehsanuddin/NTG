@getSwJs

Feature: Get Sw Js
  Validate GET /sw.js endpoint

  Scenario: GET Get Sw Js returns successful response
    When I send a GET request to endpoint "getSwJs"
    Then the response status should be 204
