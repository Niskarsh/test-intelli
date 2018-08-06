import request from 'request-promise'
import cheerio from 'cheerio'

export const getLinks = async () => {

    let link = []

    await request.get("https://10times.com/nationalfarm-machinery-show/exhibitors").then(html => {
        let $ = cheerio.load(html)
        let tableRows = $('div#block-listing.box').children("table.tb-list").children("tbody").children()
        tableRows.map((i, row) => {
            link[i] = tableRows.eq(i).children().eq(1).children().next().children().attr('href')
        })
    }).catch(e => console.log(`Server down, couldn't ping. Error ${e}`))
    return (link)
}
