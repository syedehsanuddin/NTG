@putUpdateLibrary

Feature: Put Update Library
  Validate PUT /api/v1/library/{id} endpoint

  Scenario: POST Create a new library returns successful response
    When I send a POST request to endpoint "postCreateLibrary" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as library id

  Scenario: PUT Put Update Library returns successful response
    When I send a PUT request to endpoint "putUpdateLibrary" with id "{STORED_LIBRARY_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
