
import request from 'request-promise'
import cheerio from 'cheerio'
import { sLinks } from './search_links'

export const search = (link) => new Promise( async (resolve, reject) => {
    await request.get(link).then(async (html) => {
        let $ = cheerio.load(html)
        let emailRegex = /\S+@\S+\.\S+/g
        let pbody = $('html > body').text()
        console.log (emailRegex.test(pbody))
        emailRegex.test(pbody) ? resolve(pbody.match (emailRegex)) : reject(await sLinks(pbody, link))
    }).catch(e => console.log(e))
})
