# NTG Ticket System - Test Management

**Project:** NTG Ticket Automation (NTA)  
**Version:** 1.0  
**Last Updated:** 2024

---

## 1. Test Management Overview

This document provides a structured approach to managing test cases, test execution, and test reporting for the NTG Ticket System automation project.

---

## 2. Test Case Inventory

### 2.1 Test Case Naming Convention

**Format:** `TC-{TYPE}-{MODULE}-{NUMBER}`

- **TYPE:** API or UI
- **MODULE:** TKT (Tickets), USR (Users), CMT (Comments)
- **NUMBER:** Sequential number (001, 002, etc.)

**Examples:**
- `TC-API-TKT-001` - API test for Tickets module
- `TC-UI-CMT-001` - UI test for Comments module

### 2.2 Test Case Status

| Status | Description | Icon |
|--------|-------------|------|
| ✅ Active | Test case is implemented and active | ✅ |
| ⏸️ Pending | Test case is commented/not implemented | ⏸️ |
| 🔄 In Progress | Test case is being developed | 🔄 |
| ❌ Blocked | Test case is blocked by issues | ❌ |
| 🗑️ Deprecated | Test case is no longer valid | 🗑️ |

---

## 3. Test Organization Structure

### 3.1 By Module

```
Test Management
├── Tickets Module
│   ├── API Tests (18 test cases)
│   │   ├── Create Ticket (5)
│   │   ├── Get Tickets (5)
│   │   ├── Get Ticket By ID (1)
│   │   ├── Update Status (1)
│   │   ├── Update Assignee (1)
│   │   ├── Get My Tickets (1)
│   │   ├── Get Assigned Tickets (1)
│   │   ├── Get Overdue Tickets (1)
│   │   ├── Get SLA Approaching (1)
│   │   └── Get SLA Breached (1)
│   └── UI Tests (9 test cases)
│       ├── Create Ticket (4)
│       └── View Ticket List (5)
│
├── Users Module
│   └── API Tests (11 test cases)
│       ├── Get All Users (5)
│       ├── Get User By ID (1)
│       ├── Create User (1)
│       ├── Update User (1)
│       ├── Delete User (1)
│       ├── Get Support Staff (1)
│       └── Get Support Managers (1)
│
└── Comments Module
    ├── API Tests (3 test cases)
    │   ├── Create Comment (1)
    │   ├── Update Comment (1)
    │   └── Delete Comment (1)
    └── UI Tests (3 test cases)
        └── Add Comment (3)
```

### 3.2 By Priority

| Priority | Count | Test Cases |
|----------|-------|------------|
| **High** | 28 | Core functionality, CRUD operations |
| **Medium** | 14 | Filtering, search, edge cases |
| **Low** | 2 | UI validations, optional features |

### 3.3 By Test Type

| Test Type | Count | Coverage |
|-----------|-------|----------|
| **API Tests** | 32 | REST API endpoints |
| **UI Tests** | 12 | User interface workflows |
| **Total** | 44 | Complete system coverage |

---

## 4. Test Execution Tracking

### 4.1 Test Run Status

| Test Run ID | Date | Environment | Passed | Failed | Skipped | Status |
|-------------|------|-------------|--------|--------|---------|--------|
| TR-001 | YYYY-MM-DD | Dev | - | - | - | Pending |
| TR-002 | YYYY-MM-DD | Dev | - | - | - | Pending |

### 4.2 Test Execution History

**Location:** `playwright-report/index.html`

**How to View:**
```bash
npm run show-report
```

---

## 5. Test Case Details Matrix

### 5.1 Tickets Module - API Tests

| TC ID | Test Case Name | File | Tags | Priority | Status |
|-------|----------------|------|------|----------|--------|
| TC-API-TKT-001 | POST Ticket with valid payload | postTickets.feature | @postTicket | High | ✅ |
| TC-API-TKT-002 | POST Ticket response contains correct data | postTickets.feature | @postTicket | High | ✅ |
| TC-API-TKT-003 | POST Ticket with different values | postTickets.feature | @postTicket | Medium | ✅ |
| TC-API-TKT-004 | POST Ticket response has valid data types | postTickets.feature | @postTicket | Medium | ✅ |
| TC-API-TKT-005 | POST Ticket response has timestamp fields | postTickets.feature | @postTicket | Low | ✅ |
| TC-API-TKT-006 | GET Tickets with default parameters | getTickets.feature | @getTickets @regression | High | ✅ |
| TC-API-TKT-007 | GET Tickets with pagination | getTickets.feature | @getTickets @regression | High | ✅ |
| TC-API-TKT-008 | GET Tickets with priority filter | getTickets.feature | @getTickets @regression | Medium | ✅ |
| TC-API-TKT-009 | GET Tickets with search | getTickets.feature | @getTickets @regression | Medium | ✅ |
| TC-API-TKT-010 | GET Tickets with date range | getTickets.feature | @getTickets @regression | Medium | ✅ |
| TC-API-TKT-011 | GET Ticket by ID | getTicketById.feature | @getTicketById @regression | High | ✅ |
| TC-API-TKT-012 | PATCH Ticket status | patchUpdateStatus.feature | @patchUpdateStatus @regression | High | ✅ |
| TC-API-TKT-013 | PATCH Ticket assignee | patchUpdateAssignee.feature | @patchUpdateAssignee | High | ✅ |
| TC-API-TKT-014 | GET My Tickets | getMyTickets.feature | - | High | ✅ |
| TC-API-TKT-015 | GET Assigned Tickets | getAssignedTickets.feature | - | High | ✅ |
| TC-API-TKT-016 | GET Overdue Tickets | getOverdueTickets.feature | - | Medium | ✅ |
| TC-API-TKT-017 | GET SLA Approaching Tickets | getSlaApproaching.feature | - | Medium | ✅ |
| TC-API-TKT-018 | GET SLA Breached Tickets | getSlaBreached.feature | - | Medium | ✅ |

### 5.2 Users Module - API Tests

| TC ID | Test Case Name | File | Tags | Priority | Status |
|-------|----------------|------|------|----------|--------|
| TC-API-USR-001 | GET All Users with limit | getAllUsers.feature | @getAllUsers @regression | High | ✅ |
| TC-API-USR-002 | GET All Users with search | getAllUsers.feature | @getAllUsers @regression | Medium | ✅ |
| TC-API-USR-003 | GET All Users with role filter | getAllUsers.feature | @getAllUsers @regression | High | ✅ |
| TC-API-USR-004 | GET All Users with isActive filter | getAllUsers.feature | @getAllUsers @regression | Medium | ✅ |
| TC-API-USR-005 | GET All Users with pagination | getAllUsers.feature | @getAllUsers @regression | High | ✅ |
| TC-API-USR-006 | GET User by ID | getUserById.feature | - | High | ✅ |
| TC-API-USR-007 | POST User creates new user | postUser.feature | - | High | ✅ |
| TC-API-USR-008 | PATCH User updates user | patchUserById.feature | - | High | ✅ |
| TC-API-USR-009 | DELETE User removes user | deleteUser.feature | - | High | ✅ |
| TC-API-USR-010 | GET Support Staff | getSupportStaff.feature | - | Medium | ✅ |
| TC-API-USR-011 | GET Support Managers | getSupportManagers.feature | - | Medium | ✅ |

### 5.3 Comments Module - API Tests

| TC ID | Test Case Name | File | Tags | Priority | Status |
|-------|----------------|------|------|----------|--------|
| TC-API-CMT-001 | POST Comment for ticket | postComment.feature | @postComment @regression | High | ✅ |
| TC-API-CMT-002 | PATCH Comment updates comment | patchComment.feature | - | High | ✅ |
| TC-API-CMT-003 | DELETE Comment removes comment | deleteComment.feature | - | High | ✅ |

### 5.4 Tickets Module - UI Tests

| TC ID | Test Case Name | File | Priority | Status |
|-------|----------------|------|----------|--------|
| TC-UI-TKT-001 | Should create a ticket successfully | createTicket.spec.ts | High | ✅ |
| TC-UI-TKT-002 | Should validate required fields | createTicket.spec.ts | Medium | ⏸️ |
| TC-UI-TKT-003 | Should cancel ticket creation | createTicket.spec.ts | Low | ⏸️ |
| TC-UI-TKT-004 | Should create ticket with different priority | createTicket.spec.ts | Medium | ⏸️ |
| TC-UI-TKT-005 | Should display ticket list | viewTicketList.spec.ts | High | ✅ |
| TC-UI-TKT-006 | Should search tickets | viewTicketList.spec.ts | Medium | ✅ |
| TC-UI-TKT-007 | Should filter tickets by status | viewTicketList.spec.ts | Medium | ✅ |
| TC-UI-TKT-008 | Should filter tickets by priority | viewTicketList.spec.ts | Medium | ✅ |
| TC-UI-TKT-009 | Should navigate to ticket details | viewTicketList.spec.ts | High | ✅ |

### 5.5 Comments Module - UI Tests

| TC ID | Test Case Name | File | Priority | Status |
|-------|----------------|------|----------|--------|
| TC-UI-CMT-001 | Should add a comment to a ticket | addComment.spec.ts | High | ✅ |
| TC-UI-CMT-002 | Should add an internal comment | addComment.spec.ts | Medium | ✅ |
| TC-UI-CMT-003 | Should display multiple comments | addComment.spec.ts | Medium | ✅ |

---

## 6. Test Coverage Analysis

### 6.1 Module Coverage

| Module | API Coverage | UI Coverage | Total Coverage |
|--------|--------------|-------------|----------------|
| Tickets | ✅ 18 tests | ✅ 9 tests | ✅ 27 tests |
| Users | ✅ 11 tests | ❌ 0 tests | ⚠️ 11 tests |
| Comments | ✅ 3 tests | ✅ 3 tests | ✅ 6 tests |

### 6.2 Coverage Gaps

- **Users Module UI Tests:** No UI tests for user management
- **Ticket Update UI:** No UI tests for updating tickets
- **Ticket Delete UI:** No UI tests for deleting tickets

### 6.3 Recommendations

1. Add UI tests for user management module
2. Add UI tests for ticket update workflows
3. Add UI tests for ticket deletion
4. Add negative test cases for error handling
5. Add edge case testing for boundary conditions

---

## 7. Test Execution Workflow

### 7.1 Pre-Execution Checklist

- [ ] Test environment is up and running
- [ ] Test data is prepared
- [ ] Dependencies are installed (`npm install`)
- [ ] Environment variables are configured
- [ ] Test files are up to date

### 7.2 Execution Steps

1. **Generate BDD specs:**
   ```bash
   npm run generate
   ```

2. **Run tests:**
   ```bash
   npm test
   ```

3. **View reports:**
   ```bash
   npm run show-report
   ```

### 7.3 Post-Execution Activities

- [ ] Review test results
- [ ] Analyze failures
- [ ] Update test cases if needed
- [ ] Document issues found
- [ ] Clean up test data

---

## 8. Test Metrics Dashboard

### 8.1 Current Metrics

- **Total Test Cases:** 44
- **Active Test Cases:** 40
- **Pending Test Cases:** 4
- **Test Coverage:** ~91% (40/44 active)

### 8.2 Test Execution Metrics

| Metric | Value |
|--------|-------|
| Average Execution Time | - |
| Pass Rate | - |
| Failure Rate | - |
| Flaky Test Rate | - |

*Note: Metrics will be populated after test execution*

---

## 9. Test Maintenance Plan

### 9.1 Regular Maintenance Tasks

- **Weekly:** Review failed tests, update test data
- **Monthly:** Review and refactor test cases
- **Quarterly:** Review test coverage, add missing tests

### 9.2 Test Case Updates

When to update test cases:
- New features are added
- Requirements change
- Bugs are found and fixed
- Test data needs updating

### 9.3 Test Case Retirement

Test cases should be retired when:
- Feature is deprecated
- Test is no longer relevant
- Duplicate test exists
- Test is consistently flaky

---

## 10. Integration with GitHub

### 10.1 Linking Test Cases to GitHub Issues

**Format:** `#IssueNumber` in test case description

**Example:**
- Test case `TC-API-TKT-001` can be linked to GitHub Issue #123

### 10.2 Test Execution in CI/CD

**GitHub Actions Workflow:**
```yaml
# .github/workflows/test.yml
name: Test Execution
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm test
      - uses: actions/upload-artifact@v2
        with:
          name: test-report
          path: playwright-report/
```

### 10.3 Test Reports in GitHub

- Upload HTML reports as artifacts
- Create GitHub Issues for test failures
- Use GitHub Projects for test planning

---

## 11. Test Data Management

### 11.1 Test Data Strategy

- **Dynamic Data:** Generated at runtime
- **Test Data Cleanup:** Automatic cleanup after tests
- **Test Data Isolation:** Each test uses unique data

### 11.2 Test Data Files

- Test data is generated dynamically using helper functions
- No static test data files currently

---

## 12. Defect Management

### 12.1 Defect Tracking

| Defect ID | Test Case | Severity | Status | Assigned To |
|-----------|-----------|----------|--------|-------------|
| - | - | - | - | - |

### 12.2 Defect Lifecycle

1. **Found:** Test fails, defect identified
2. **Reported:** Defect logged in GitHub Issues
3. **Assigned:** Developer assigned
4. **Fixed:** Code fix implemented
5. **Verified:** Test passes, defect closed

---

## 13. Appendix

### 13.1 Quick Reference

**Test File Locations:**
- API Tests: `applications/ntg-ticket/api/features/`
- UI Tests: `applications/ntg-ticket/ui/tests/`
- Step Definitions: `applications/ntg-ticket/api/step-definitions/`
- Page Objects: `applications/ntg-ticket/ui/pages/`

**Test Commands:**
- Run all: `npm test`
- Run API: `npx playwright test --project=api-tests`
- Run UI: `npx playwright test --project=ui-tests`
- View report: `npm run show-report`

### 13.2 Contact Information

- **Project Owner:** Ahsan Uddin
- **Repository:** [Your GitHub Repo URL]

---

**Document Version:** 1.0  
**Last Updated:** 2024

