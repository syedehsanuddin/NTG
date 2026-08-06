@getAuditLogById

Feature: Get Audit Log By Id
  Validate GET /api/v1/audit-logs/{id} endpoint

  Scenario: GET Get Audit Log By Id returns successful response
    When I send a GET request to endpoint "getAuditLogById" with id "{STORED_AUDITLOG_ID}"
    Then the response status should be 200
