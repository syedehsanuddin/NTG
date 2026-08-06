@getAssignmentGradeTemplate

Feature: Get Assignment Grade Template
  Validate GET /api/v1/grade-templates/assignments endpoint

  Scenario: GET Get Assignment Grade Template returns successful response
    When I send a GET request to endpoint "getAssignmentGradeTemplate"
    Then the response status should be 200
