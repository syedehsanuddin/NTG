@deleteSection

Feature: Delete Section
  Validate DELETE /api/v1/sections/{id} endpoint

  Scenario: POST Create a new section returns successful response
    When I send a POST request to endpoint "postCreateSection" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as section id

  Scenario: DELETE Delete Section returns successful response
    When I send a DELETE request to endpoint "deleteSection" with id "{STORED_SECTION_ID}"
    Then the response status should be 200
