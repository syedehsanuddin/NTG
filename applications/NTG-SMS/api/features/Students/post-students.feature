@postCreateStudent

Feature: Post Create Student
  Validate POST /api/v1/students endpoint

  Scenario: POST Post Create Student returns successful response
    When I send a POST request to endpoint "postCreateStudent" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
