@putUpdateStudent

Feature: Put Update Student
  Validate PUT /api/v1/students/{id} endpoint

  Scenario: POST Create a new student returns successful response
    When I send a POST request to endpoint "postCreateStudent" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as student id

  Scenario: PUT Put Update Student returns successful response
    When I send a PUT request to endpoint "putUpdateStudent" with id "{STORED_STUDENT_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
