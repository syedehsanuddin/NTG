@getClasSubjectTemplate

Feature: Get Clas Subject Template
  Validate GET /api/v1/subject-templates/class/{classId} endpoint

  Scenario: GET Get Clas Subject Template returns successful response
    When I send a GET request to endpoint "getClasSubjectTemplate" with id "{STORED_CLAS_ID}"
    Then the response status should be 200
