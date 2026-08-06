@postCreateSubjectTemplate

Feature: Post Create Subject Template
  Validate POST /api/v1/subject-templates endpoint

  Scenario: POST Post Create Subject Template returns successful response
    When I send a POST request to endpoint "postCreateSubjectTemplate" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
