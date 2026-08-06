@postAssignLevelSubjectTemplate

Feature: Post Assign Level Subject Template
  Validate POST /api/v1/subject-templates/{id}/assign-levels endpoint

  Scenario: POST Post Assign Level Subject Template returns successful response
    When I send a POST request to endpoint "postAssignLevelSubjectTemplate" with id "{STORED_ASSIGNLEVEL_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 201
