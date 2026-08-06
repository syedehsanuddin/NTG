@postCreateGradeTemplate

Feature: Post Create Grade Template
  Validate POST /api/v1/grade-templates endpoint

  Scenario: POST Post Create Grade Template returns successful response
    When I send a POST request to endpoint "postCreateGradeTemplate" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
