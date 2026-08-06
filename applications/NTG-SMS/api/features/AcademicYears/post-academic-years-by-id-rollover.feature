@postRolloverAcademicYear

Feature: Post Rollover Academic Year
  Validate POST /api/v1/academic-years/{id}/rollover endpoint

  Scenario: POST Post Rollover Academic Year returns successful response
    When I send a POST request to endpoint "postRolloverAcademicYear" with id "{STORED_ROLLOVER_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 201
