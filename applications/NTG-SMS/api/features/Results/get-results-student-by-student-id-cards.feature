@getStudentCardResult

Feature: Get Student Card Result
  Validate GET /api/v1/results/student/{studentId}/cards endpoint

  Scenario: GET Get Student Card Result returns successful response
    When I send a GET request to endpoint "getStudentCardResult" with id "{STORED_CARD_ID}"
    Then the response status should be 200
