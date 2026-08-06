@postDeletionRequestTenant

Feature: Post Deletion Request Tenant
  Validate POST /api/v1/tenants/{tenantId}/deletion-request endpoint

  Scenario: POST Post Deletion Request Tenant returns successful response
    When I send a POST request to endpoint "postDeletionRequestTenant" with id "{STORED_DELETIONREQUEST_ID}" and payload '"string"'
    Then the response status should be 201
