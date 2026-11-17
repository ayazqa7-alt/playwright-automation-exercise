
import { test, expect } from '@playwright/test';

test('Verify Playwright baseURL configuration', async ({ baseURL }) => {
  expect(baseURL).toBe('https://automationexercise.com');
});
