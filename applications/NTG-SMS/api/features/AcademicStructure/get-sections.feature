@getSections

Feature: Get Sections
  Validate GET /api/v1/sections endpoint

  Scenario: GET Get Sections returns successful response
    When I send a GET request to endpoint "getSections"
    Then the response status should be 200
