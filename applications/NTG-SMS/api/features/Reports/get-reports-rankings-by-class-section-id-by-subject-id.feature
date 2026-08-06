@getRankingReport

Feature: Get Ranking Report
  Validate GET /api/v1/reports/rankings/{classSectionId}/{subjectId} endpoint

  Scenario: GET Get Ranking Report returns successful response
    When I send a GET request to endpoint "getRankingReport" with id "{STORED_RANKING_ID}"
    Then the response status should be 200
