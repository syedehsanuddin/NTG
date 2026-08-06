@deleteLibrary

Feature: Delete Library
  Validate DELETE /api/v1/library/{id} endpoint

  Scenario: POST Create a new library returns successful response
    When I send a POST request to endpoint "postCreateLibrary" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as library id

  Scenario: DELETE Delete Library returns successful response
    When I send a DELETE request to endpoint "deleteLibrary" with id "{STORED_LIBRARY_ID}"
    Then the response status should be 200
