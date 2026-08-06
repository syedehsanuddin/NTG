@getClassSections

Feature: Get Class Sections
  Validate GET /api/v1/class-sections endpoint

  Scenario: GET Get Class Sections returns successful response
    When I send a GET request to endpoint "getClassSections"
    Then the response status should be 200
