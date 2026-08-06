@putUpdateBehavioral

Feature: Put Update Behavioral
  Validate PUT /api/v1/behavioral/{id} endpoint

  Scenario: POST Create a new behavioral returns successful response
    When I send a POST request to endpoint "postCreateBehavioral" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as behavioral id

  Scenario: PUT Put Update Behavioral returns successful response
    When I send a PUT request to endpoint "putUpdateBehavioral" with id "{STORED_BEHAVIORAL_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
