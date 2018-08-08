import 'babel-polyfill'
import excel from 'exceljs'
import { getLinks } from './support/links'
import { findId } from './support/findId' 

(async () => {
    // let workbook = new excel.Workbook()
    // let Links = workbook.addWorksheet('Links');
    let links = await getLinks ()
    // (await findId ("http://www.heatmor.com/"))
    let workbook = new excel.Workbook()
    links.map (async link => {
        await findId (link, workbook)
    })
    // await Links.addRow (links)
    // writeXlsx(workbook, "links").then ( msg => console.log (msg)).catch (e => console.log (e))
    

})()