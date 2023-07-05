let likeCount = 0;

while (likeCount < 100) {
  // Click the dislike button 6 times
  for (let i = 0; i < 6; i++) {
    await page.waitForSelector(".encounters-action--dislike .icon");
    await page.click(".encounters-action--dislike .icon");
    await page.waitForTimeout(1000); // Wait for 1 second
  }

  // Click the like button 1 time

  await page.waitForSelector(".encounters-action--like .icon");
  await page.click(".encounters-action--like .icon");
  likeCount++; // Increment the likeCount

  await page.waitForTimeout(1000);
}
