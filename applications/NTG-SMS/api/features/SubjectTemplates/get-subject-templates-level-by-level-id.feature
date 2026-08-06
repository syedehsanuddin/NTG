@getLevelSubjectTemplate

Feature: Get Level Subject Template
  Validate GET /api/v1/subject-templates/level/{levelId} endpoint

  Scenario: GET Get Level Subject Template returns successful response
    When I send a GET request to endpoint "getLevelSubjectTemplate" with id "{STORED_LEVEL_ID}"
    Then the response status should be 200
