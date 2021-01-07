import puppeteer from 'puppeteer';

export async function getVideoLink(url) {
    const videoId = url.match(/watch\/(.+)/)[1];
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://embed.mystream.to/${videoId}`);
    const videoHandle = await page.$('video source');
    const videoUrl = await page.evaluate(video => video.getAttribute('src'), videoHandle);
    await videoHandle.dispose();
    await browser.close();
    return videoUrl;
}
