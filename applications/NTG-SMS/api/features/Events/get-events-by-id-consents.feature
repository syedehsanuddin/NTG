@getConsentEventById

Feature: Get Consent Event By Id
  Validate GET /api/v1/events/{id}/consents endpoint

  Scenario: GET Get Consent Event By Id returns successful response
    When I send a GET request to endpoint "getConsentEventById" with id "{STORED_CONSENT_ID}"
    Then the response status should be 200
