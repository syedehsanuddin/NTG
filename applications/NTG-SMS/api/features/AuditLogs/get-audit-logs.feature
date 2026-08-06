@getAuditLogs

Feature: Get Audit Logs
  Validate GET /api/v1/audit-logs endpoint

  Scenario: GET Get Audit Logs returns successful response
    When I send a GET request to endpoint "getAuditLogs"
    Then the response status should be 200
