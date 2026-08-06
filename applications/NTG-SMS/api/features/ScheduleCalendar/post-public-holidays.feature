@postCreatePublicHoliday

Feature: Post Create Public Holiday
  Validate POST /api/v1/public-holidays endpoint

  Scenario: POST Post Create Public Holiday returns successful response
    When I send a POST request to endpoint "postCreatePublicHoliday" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
