@getClassesWithTemplateSubjectTemplate

Feature: Get Classes With Template Subject Template
  Validate GET /api/v1/subject-templates/classes-with-templates endpoint

  Scenario: GET Get Classes With Template Subject Template returns successful response
    When I send a GET request to endpoint "getClassesWithTemplateSubjectTemplate"
    Then the response status should be 200
