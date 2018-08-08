
import request from 'request-promise'
import cheerio from 'cheerio'
import { sLinks } from './search_links'

export const search = (link) => new Promise( async (resolve, reject) => {
    await request.get(link).then(async (html) => {        
        let emailRegex = /\S+@\S+\.\S+/g
        console.log (emailRegex.test(html))
        emailRegex.test(html) ? resolve(html.match (emailRegex)) : reject(await sLinks(html, link))
    }).catch(e => console.log(e))
})
