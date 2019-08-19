const read = require('./read')
const write = require('./write')
const url = 'http://movie.douban.com';

(async ()=> {
    const movies  = await read(url)
    await write(movies)
    process.exit()
})()