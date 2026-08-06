@deleteClassSection

Feature: Delete Class Section
  Validate DELETE /api/v1/class-sections/{id} endpoint

  Scenario: POST Create a new classsection returns successful response
    When I send a POST request to endpoint "postCreateClassSection" with payload '"string"'
    Then the response status should be 201
    And I store the response id as classsection id

  Scenario: DELETE Delete Class Section returns successful response
    When I send a DELETE request to endpoint "deleteClassSection" with id "{STORED_CLASSSECTION_ID}"
    Then the response status should be 200
