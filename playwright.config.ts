import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  // Test files location
  testDir: './tests',

  // Run independent tests in parallel
  fullyParallel: true,

  // Prevent accidental use of test.only
  forbidOnly: true,

  // Number of retries
  retries: 0,

  // Run tests using one worker
  workers: 1,

  // Test results reporter
  reporter: 'html',

  // Shared settings for all tests
  use: {
    // Application base URL
    baseURL: 'https://automationexercise.com',

    // Retain trace when a test fails
    trace: 'retain-on-failure',

    // Capture screenshots only when tests fail
    screenshot: 'only-on-failure',

    // Retain video when tests fail
    video: 'retain-on-failure',
  },

  // Browser projects will be configured later
});