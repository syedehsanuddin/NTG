@getRecordAuditLog

Feature: Get Record Audit Log
  Validate GET /api/v1/audit-logs/record/{tableName}/{recordId} endpoint

  Scenario: GET Get Record Audit Log returns successful response
    When I send a GET request to endpoint "getRecordAuditLog" with id "{STORED_RECORD_ID}"
    Then the response status should be 200
