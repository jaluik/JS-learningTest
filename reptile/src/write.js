const query = require('./db')
const debug = require('debug')('movie:write')
const write = async (movies) => {
    debug('开始写入电影')

    for(let movie of movies){
        let oldMovie = await query('SELECT * FROM movies WHERE id=? LIMIT 1', [movie.id])

        if(Array.isArray(oldMovie) && oldMovie.length){
            let old = oldMovie[0]
            await query('UPDATE movies SET name=?,href=?,image=?,score=? WHERE id=?', [movie.name, movie.href, movie.image, movie.score,old.id])
        }else{
            await query('INSERT INTO movies(id,name,href,image,score) VALUES(?,?,?,?,?)', [movie.id, movie.name, movie.href, movie.image,movie.score])
        }
        debug(`正在写入电影：${movie.name}`)

    }
}
module.exports = write