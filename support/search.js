
import request from 'request-promise'
import cheerio from 'cheerio'
import { sLinks } from './search_links'

export const search = link => new Promise((resolve, reject) => {
    request.get(link).then(async (html) => {
        let $ = cheerio.load(html)
        let emailRegex = /\S+@\S+\.\S+/
        let pbody = $('html > body').text()
        emailRegex.test(pbody) ? resolve(true) : reject(await sLinks($))
    }).catch(e => console.log(e))
})
