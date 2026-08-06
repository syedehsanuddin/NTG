@putPublicStatBranche

Feature: Put Public Stat Branche
  Validate PUT /api/v1/branches/{id}/public-stats endpoint

  Scenario: PUT Put Public Stat Branche returns successful response
    When I send a PUT request to endpoint "putPublicStatBranche" with id "{STORED_PUBLICSTAT_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
