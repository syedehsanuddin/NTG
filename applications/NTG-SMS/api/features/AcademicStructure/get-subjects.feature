@getSubjects

Feature: Get Subjects
  Validate GET /api/v1/subjects endpoint

  Scenario: GET Get Subjects returns successful response
    When I send a GET request to endpoint "getSubjects"
    Then the response status should be 200
