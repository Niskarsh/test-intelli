import request from 'request-promise'
import cheerio from 'cheerio'
import _ from 'lodash'
import { search } from './search'

let pagesVisited = []
let pagesToVisit = []
let email = []
let first = true
let base_url

export const findId = async (link) => {

    if (!first) {
        if (pagesToVisit.length === pagesVisited.length) {
            console.log(`--------breaking ${pagesVisited.length}`)
            console.log(`eeeeeeeeeeeeeeee`, email)
            process.abort()
        }
    }

    if (first) {
        base_url = link
        first = false
    }


    if (_.indexOf(pagesVisited, link) == -1) {
        console.log(`-----------------pushing`, link)
        if (_.indexOf(pagesToVisit, link) == -1) {
            pagesToVisit.push(link)
        }
        if (link.charAt(0) !== 'h') {
            link = base_url.substring(base_url.length - 1) === "/" ? base_url.substring(0, base_url.length - 1) : base_url + link
        }
        await search(link).then(data => {
            pagesVisited.push(link)
            data.map ( em => {
                if (_.indexOf(email, em) == -1) {
                    email.push(em)
                }
            })
            
            console.log(`------true`)
        }, data => {
            pagesVisited.push(link)
            data.map(lnk => {
                if (_.indexOf(pagesToVisit, lnk) == -1) {
                    pagesToVisit.push(lnk)
                }

            })
            data.map(async (lnk) => {
                var l1
                if (_.indexOf(pagesVisited, lnk) == -1) {
                    if (lnk.charAt(0) !== 'h') {
                        l1 = base_url.substring(base_url.length - 1) === "/" ? base_url.substring(0, base_url.length - 1) : base_url + lnk
                    }

                    await findId(l1)
                } else {
                    console.log(`--------rejected`, lnk)
                }
            })
        }).catch(e => console.log(e))
    }

}

// export const findId = async (link) => {
//     await fId (link)
//     return email
// }