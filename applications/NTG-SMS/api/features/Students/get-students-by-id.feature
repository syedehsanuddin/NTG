@getStudentById

Feature: Get Student By Id
  Validate GET /api/v1/students/{id} endpoint

  Scenario: POST Create a new student returns successful response
    When I send a POST request to endpoint "postCreateStudent" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as student id

  Scenario: GET Get Student By Id returns successful response
    When I send a GET request to endpoint "getStudentById" with id "{STORED_STUDENT_ID}"
    Then the response status should be 200
