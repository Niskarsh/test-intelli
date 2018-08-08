
import request from 'request-promise'
import cheerio from 'cheerio'
import { sLinks } from './search_links'

export const search = (link) => new Promise( async (resolve, reject) => {
    await request.get(link).then(async (html) => { 
        console.log (`---------Visiting `, link)       
        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]+/gi
        emailRegex.test(html) ? resolve(html.match (emailRegex)) : reject(await sLinks(html, link))
    }).catch(e => console.log(` Sorry for ${link}`))
})
