import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('link', { name: "Nothing's here yet! Click to visit chat page" }),
  ).toBeVisible();
});
