@postConsentEvent

Feature: Post Consent Event
  Validate POST /api/v1/events/{id}/consent endpoint

  Scenario: POST Post Consent Event returns successful response
    When I send a POST request to endpoint "postConsentEvent" with id "{STORED_CONSENT_ID}" and payload '"string"'
    Then the response status should be 201
