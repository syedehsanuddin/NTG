@getMatrixBehavioral

Feature: Get Matrix Behavioral
  Validate GET /api/v1/behavioral/matrix/{classSectionId} endpoint

  Scenario: GET Get Matrix Behavioral returns successful response
    When I send a GET request to endpoint "getMatrixBehavioral" with id "{STORED_MATRIX_ID}"
    Then the response status should be 200
