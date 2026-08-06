@getGradeTemplates

Feature: Get Grade Templates
  Validate GET /api/v1/grade-templates endpoint

  Scenario: GET Get Grade Templates returns successful response
    When I send a GET request to endpoint "getGradeTemplates"
    Then the response status should be 200
