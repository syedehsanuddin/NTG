@putAlertAcknowledgeStorage

Feature: Put Alert Acknowledge Storage
  Validate PUT /api/v1/storage/alerts/{id}/acknowledge endpoint

  Scenario: PUT Put Alert Acknowledge Storage returns successful response
    When I send a PUT request to endpoint "putAlertAcknowledgeStorage" with id "{STORED_ACKNOWLEDGE_ID}" and payload '"string"'
    Then the response status should be 200
