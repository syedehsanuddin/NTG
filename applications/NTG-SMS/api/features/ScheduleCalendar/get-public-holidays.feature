@getPublicHolidays

Feature: Get Public Holidays
  Validate GET /api/v1/public-holidays endpoint

  Scenario: GET Get Public Holidays returns successful response
    When I send a GET request to endpoint "getPublicHolidays"
    Then the response status should be 200
