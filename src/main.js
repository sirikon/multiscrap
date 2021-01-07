import * as mystream from './sites/mystream_to.js';

async function main() {
    const link = await mystream.getVideoLink('https://mystream.to/watch/xxxxxxxx');
    console.log(`Link: ${link}`);
}

main().then(()=>{},(err)=>{console.log(err)});
