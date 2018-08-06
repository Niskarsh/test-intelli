import 'babel-polyfill'
import excel from 'exceljs'
import { getLinks } from './support/links'
import { writeXlsx } from './support/writeXls'


(async () => {
    let workbook = new excel.Workbook()
    let Links = workbook.addWorksheet('Links');
    let links = await getLinks ()
    await Links.addRow (links)
    writeXlsx(workbook, "links").then ( msg => console.log (msg)).catch (e => console.log (e))
    

})()