@putUpdatePublicHoliday

Feature: Put Update Public Holiday
  Validate PUT /api/v1/public-holidays/{id} endpoint

  Scenario: POST Create a new publicholiday returns successful response
    When I send a POST request to endpoint "postCreatePublicHoliday" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as publicholiday id

  Scenario: PUT Put Update Public Holiday returns successful response
    When I send a PUT request to endpoint "putUpdatePublicHoliday" with id "{STORED_PUBLICHOLIDAY_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
