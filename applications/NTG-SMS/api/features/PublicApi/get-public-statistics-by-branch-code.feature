@getStatisticPublic

Feature: Get Statistic Public
  Validate GET /api/v1/public/statistics/{branchCode} endpoint

  Scenario: GET Get Statistic Public returns successful response
    When I send a GET request to endpoint "getStatisticPublic" with id "{STORED_STATISTIC_ID}"
    Then the response status should be 200
