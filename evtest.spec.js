import { test } from '@playwright/test';
import { EvtestBase } from './evtest'

test.use({ 
    viewport: { width: 1600, height: 1200 },
  });
  

test('JustTesting', async ({ page }) => {
    test.setTimeout(120000)
    const testBase = new EvtestBase(page)
    await testBase.firstPart()
    await testBase.secondPart()  
})
