# NTG-RMS API Test Automation

This directory contains API test automation for NTG-RMS (Restaurant Management System) using Playwright + TypeScript + Cucumber BDD.

## 📁 Structure

```
NTG-RMS/
└── api/
    ├── features/          # BDD feature files organized by category
    │   ├── Auth/         # Authentication endpoints
    │   ├── Roles/        # Roles & permissions
    │   ├── Subscription/ # Subscription management
    │   ├── Menu/         # Menu management (52 feature files)
    │   ├── Translations/ # Translation management
    │   ├── Inventory/    # Inventory & stock
    │   ├── Restaurant/    # Restaurant, branches, counters, tables
    │   ├── Orders/        # Order management
    │   ├── Coupons/       # Coupon management
    │   ├── Taxes/         # Tax management
    │   ├── Settings/      # Settings management
    │   ├── Delivery/       # Delivery management
    │   ├── Employees/     # Employee management
    │   ├── Customers/     # Customer management
    │   ├── Reports/       # Reports & analytics
    │   ├── Sync/          # Offline sync
    │   └── Dashboard/     # Dashboard data
    └── step-definitions/
        └── steps.ts       # Step definitions
```

## 📊 Test Coverage

- **Total Feature Files:** 181
- **Total Endpoints:** 182
- **Categories:** 17

## 🚀 Running Tests

### Run all NTG-RMS API tests:
```bash
npx playwright test --project=api-tests-rms
```

### Run specific category:
```bash
npx playwright test --project=api-tests-rms Menu
```

### Run specific feature file:
```bash
npx playwright test --project=api-tests-rms get-categories.feature
```

### Run with UI mode:
```bash
npx playwright test --project=api-tests-rms --ui
```

## 🔧 Configuration

- **Base URL:** `http://192.168.50.50:8001`
- **API Version:** `v1`
- **Project:** `ntg-rms` (for endpoint lookup)

## 📝 Notes

- All endpoints are configured in `common/repository/apiEndPoints.json` with project-level segregation
- Step definitions use project parameter `"ntg-rms"` to ensure correct endpoint resolution
- Feature files follow the same structure as ntg-ticket tests
- Tests use Playwright's request API for HTTP calls

## 🔗 Related Files

- **Endpoints Config:** `common/repository/apiEndPoints.json`
- **API Helper:** `common/utils/apiHelper.ts`
- **Playwright Config:** `playwright.config.ts`

