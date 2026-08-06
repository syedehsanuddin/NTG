@postDeletionCancelTenant

Feature: Post Deletion Cancel Tenant
  Validate POST /api/v1/tenants/{tenantId}/deletion-cancel endpoint

  Scenario: POST Post Deletion Cancel Tenant returns successful response
    When I send a POST request to endpoint "postDeletionCancelTenant" with id "{STORED_DELETIONCANCEL_ID}" and payload '"string"'
    Then the response status should be 201
