import request from 'request-promise'
import cheerio from 'cheerio'
import _ from 'lodash'
import { search } from './search'

let pagesVisited = []
let email = []
// let first  = true

const fId = async (link) => {

    if (_.indexOf(pagesVisited, link) == -1) {
        pagesVisited.push(link)
        await search(link).then(data => {
            email.push (data)
         }, data => {
            data.map(lnk => {
                if (_.indexOf(pagesVisited, lnk) == -1) {
                    fId(lnk)
                }
            })
        }).catch(e => console.log(e))
    }
}

export const findId = async (link) => {
    await fId (link)
    return email
}