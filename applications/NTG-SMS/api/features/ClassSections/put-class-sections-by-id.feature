@putUpdateClassSection

Feature: Put Update Class Section
  Validate PUT /api/v1/class-sections/{id} endpoint

  Scenario: POST Create a new classsection returns successful response
    When I send a POST request to endpoint "postCreateClassSection" with payload '"string"'
    Then the response status should be 201
    And I store the response id as classsection id

  Scenario: PUT Put Update Class Section returns successful response
    When I send a PUT request to endpoint "putUpdateClassSection" with id "{STORED_CLASSSECTION_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
