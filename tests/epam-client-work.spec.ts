import { test, expect } from '@playwright/test';

test('EPAM client work navigation', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.locator('a[href="/services"]').first().evaluate((element) => (element as HTMLElement).click());
  await expect(page).toHaveURL(/\/services$/);

  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();
  await expect(page).toHaveURL(/\/services\/client-work$/);
  await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
});
