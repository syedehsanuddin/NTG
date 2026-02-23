@putUpdateEmployee

Feature: Update an employee
  Validate PUT /api/v1/employees/{id} endpoint


  Scenario: POST Create a new employee returns successful response
    When I send a POST request to endpoint "postCreateEmployee" with payload '{"email":"{GENERATE_EMAIL}","name":"Automated Test User","roleIds":["70a5f79e-eb71-49c0-b958-b6f463c01fe3"],"phone":"{GENERATE_PHONE}","nationalId":"12345678","dateOfBirth":"2025-12-31","employmentType":"full_time","joiningDate":"2025-12-31","salary":20000,"isActive":true,"branchIds":["{BRANCH_ID}"],"createAuthAccount":true,"password":"12345678"}'
    Then the response status should be 201
    And I store the response id as employee id

    
  Scenario: PUT Update an employee returns successful response
    When I send a PUT request to endpoint "putUpdateEmployee" with id "{STORED_EMPLOYEE_ID}" and payload '{"name":"Automated Test User Updated"}' and headers "language=en"
    Then the response status should be 200
    # And the response should have field "data"
