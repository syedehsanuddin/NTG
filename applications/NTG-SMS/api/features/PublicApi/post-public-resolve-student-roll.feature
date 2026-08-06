@postResolveStudentRollPublic

Feature: Post Resolve Student Roll Public
  Validate POST /api/v1/public/resolve-student-roll endpoint

  Scenario: POST Post Resolve Student Roll Public returns successful response
    When I send a POST request to endpoint "postResolveStudentRollPublic" with payload '"string"'
    Then the response status should be 201
