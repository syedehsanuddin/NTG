@postCreateAcademicYear

Feature: Post Create Academic Year
  Validate POST /api/v1/academic-years endpoint

  Scenario: POST Post Create Academic Year returns successful response
    When I send a POST request to endpoint "postCreateAcademicYear" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
