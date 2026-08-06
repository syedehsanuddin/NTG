@putClassTeacherClassSection

Feature: Put Class Teacher Class Section
  Validate PUT /api/v1/class-sections/{id}/class-teacher endpoint

  Scenario: PUT Put Class Teacher Class Section returns successful response
    When I send a PUT request to endpoint "putClassTeacherClassSection" with id "{STORED_CLASSTEACHER_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
