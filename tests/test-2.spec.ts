import { test, expect } from '@playwright/test';

test.skip('test2', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.goto('http://localhost:4200/login');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('client@gmail.com');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('client');
  await page.getByText('Employee').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Orders').click();
  await page.getByText('Requests').click();
  await page.getByRole('button', { name: 'Approve' }).nth(3).click();
  await page.getByText('Order history').click();
  await page.getByText('Requests').click();
  await page.getByText('Order history').click();
  await page.getByText('Admin panel').click();
  await page.getByText('Limits').click();
  await page.getByText('more_vert').first().click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByLabel('New limit:').fill('100');
  await page.getByRole('button', { name: 'Set new limit' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByText('Securities').click();
  await page.getByText('Orders').click();
  await page.getByText('Requests').click();
  await page.getByText('Orders').first().click();
  await page.getByRole('list').getByText('Securities').click();
  await page.getByRole('row', { name: '15234.75 1234567890 USD FOREX' }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Amount:$/ }).getByPlaceholder('value...').fill('1');
  await page.getByRole('button', { name: 'Sell' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByText('Admin panel').click();
  await page.getByRole('combobox').selectOption('Agent');
  await page.getByLabel('By name').click();
  await page.getByRole('button', { name: 'Add new User' }).click();
  await page.getByLabel('Email:').fill('test@gmail.com');
  await page.getByLabel('Phone Number:').click();
  await page.getByLabel('Phone Number:').fill('0892492739');
  await page.locator('#mat-mdc-dialog-4 #name').click();
  await page.locator('#mat-mdc-dialog-4 #name').fill('test');
  await page.getByLabel('Position:').selectOption('Supervizor');
  await page.getByLabel('LastName:').click();
  await page.getByLabel('LastName:').fill('test');
  await page.getByLabel('JMBG:').click();
  await page.getByLabel('JMBG:').fill('9283924732223');
  await page.getByRole('button', { name: 'Create' }).first().click();
  await page.getByRole('row', { name: 'test test test@gmail.com' }).locator('#options-button').hover();
  await page.getByRole('button', { name: 'Edit Profile' }).click();
  await page.locator('#mat-mdc-dialog-5 #name').fill('testasd');
  await page.getByLabel('Position:').selectOption('agent');
  await page.getByRole('button', { name: 'Update' }).click();
  await expect(page.getByRole('cell', { name: 'agent' }).nth(1)).toBeVisible();
});