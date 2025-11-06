
@patchUserById
Feature: Update User By ID API Validation
  Validate PATCH /api/v1/users/{id} endpoint


  
  Scenario: Update user with modified data and validate response
    When I send a PATCH request to endpoint "updateUserById" with id "50711385-db9d-4f1f-a74e-680b7d2ba4db" and payload "{\"name\":\"Ahmed Hassan al-Masri as\",\"email\":\"ahmed@company.comm\",\"roles\":[\"END_USER\",\"SUPPORT_STAFF\",\"SUPPORT_MANAGER\",\"ADMIN\"],\"isActive\":true}"
    Then the response status should be 200
    And the response should have field "data"
    And the response should have field "message"
    And the response data should have field "id" equal to "50711385-db9d-4f1f-a74e-680b7d2ba4db"
    And the response data should have field "name" equal to "Ahmed Hassan al-Masri as"
    And the response data should have field "email" equal to "ahmed@company.comm"
    And the response data should have field "isActive" equal to "true"
    And the response data field "roles" should be an array
    And the response data field "roles" should contain "END_USER"
    And the response data field "roles" should contain "SUPPORT_STAFF"
    And the response data field "roles" should contain "SUPPORT_MANAGER"
    And the response data field "roles" should contain "ADMIN"
    And the response data should have field "updatedAt"
    And the response data field "updatedAt" should be a valid ISO date string

  Scenario: Revert user to original data and validate response
    When I send a PATCH request to endpoint "updateUserById" with id "50711385-db9d-4f1f-a74e-680b7d2ba4db" and payload "{\"name\":\"Ahmed Hassan al-Masri\",\"email\":\"ahmed@company.com\",\"roles\":[\"END_USER\",\"SUPPORT_STAFF\"],\"isActive\":true}"
    Then the response status should be 200
    And the response should have field "data"
    And the response should have field "message"
    And the response data should have field "id" equal to "50711385-db9d-4f1f-a74e-680b7d2ba4db"
    And the response data should have field "name" equal to "Ahmed Hassan al-Masri"
    And the response data should have field "email" equal to "ahmed@company.com"
    And the response data should have field "isActive" equal to "true"
    And the response data field "roles" should be an array
    And the response data field "roles" should contain "END_USER"
    And the response data field "roles" should contain "SUPPORT_STAFF"
    And the response data field "roles" should not contain "SUPPORT_MANAGER"
    And the response data field "roles" should not contain "ADMIN"

