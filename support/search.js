
import request from 'request-promise'
import cheerio from 'cheerio'
import { sLinks } from './search_links'

export const search = (link, skip) => new Promise( async (resolve, reject) => {
    await request.get(link).then(async (html) => { 
        console.log (`---------Visiting `, link)       
        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]+/gi
        // console.log (`pppppppppppppp==========`," http://gmlsindustries.com/contactus.php".match(/\/\/w?w?w?\.?([a-z0-9]+)\./)[1])
        if (!skip)
        {emailRegex.test(html) ? (async () => {
            
            if (new RegExp(link.match(/\/\/w?w?w?\.?([a-z0-9]+)\./)[1], "i").test((html.match (emailRegex)))){
                console.log (`-----------`,new RegExp(link.match(/\/\/w?w?w?\.?([a-z0-9]+)\./)[1], "i"))
                resolve(html.match (emailRegex))
            } else {
                reject(await sLinks(html, link)) 
            }
            
        })() : reject(await sLinks(html, link))}else {
            reject (await sLinks(html, link))
        }
    }).catch(e => {
        console.log (e)
        reject(false)
    })
})



// new RegExp(link.match(/\/\/www\.([a-z0-9]+)\./), "i").test((html.match (emailRegex)))