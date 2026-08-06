@postCreateGrade

Feature: Post Create Grade
  Validate POST /api/v1/grades endpoint

  Scenario: POST Post Create Grade returns successful response
    When I send a POST request to endpoint "postCreateGrade" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
