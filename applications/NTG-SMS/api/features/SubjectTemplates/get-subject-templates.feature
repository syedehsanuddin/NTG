@getSubjectTemplates

Feature: Get Subject Templates
  Validate GET /api/v1/subject-templates endpoint

  Scenario: GET Get Subject Templates returns successful response
    When I send a GET request to endpoint "getSubjectTemplates"
    Then the response status should be 200
