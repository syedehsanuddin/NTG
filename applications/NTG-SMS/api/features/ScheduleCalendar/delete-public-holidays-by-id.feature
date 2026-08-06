@deletePublicHoliday

Feature: Delete Public Holiday
  Validate DELETE /api/v1/public-holidays/{id} endpoint

  Scenario: POST Create a new publicholiday returns successful response
    When I send a POST request to endpoint "postCreatePublicHoliday" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as publicholiday id

  Scenario: DELETE Delete Public Holiday returns successful response
    When I send a DELETE request to endpoint "deletePublicHoliday" with id "{STORED_PUBLICHOLIDAY_ID}"
    Then the response status should be 200
