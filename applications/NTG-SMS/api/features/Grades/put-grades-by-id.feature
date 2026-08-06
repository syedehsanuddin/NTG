@putUpdateGrade

Feature: Put Update Grade
  Validate PUT /api/v1/grades/{id} endpoint

  Scenario: POST Create a new grade returns successful response
    When I send a POST request to endpoint "postCreateGrade" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as grade id

  Scenario: PUT Put Update Grade returns successful response
    When I send a PUT request to endpoint "putUpdateGrade" with id "{STORED_GRADE_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
