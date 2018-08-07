
import request from 'request-promise'
import cheerio from 'cheerio'
import { sLinks } from './search_links'

export const search = link => new Promise((resolve, reject) => {
    request.get(link).then(async (html) => {
        let $ = cheerio.load(html)
        let emailRegex = /\S+@\S+\.\S+/g
        let pbody = $('html > body').text()
        emailRegex.test(pbody) ? resolve(emailRegex.match (pbody)) : reject(await sLinks($, link))
    }).catch(e => console.log(e))
})
