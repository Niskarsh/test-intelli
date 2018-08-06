
export const writeXlsx = async (workbook, name) => {
    return new Promise((resolve, reject) => {
        workbook.xlsx.writeFile(`${__dirname}/../emails/${name}.xlsx`).then(() => {
            resolve(`Successful, check out ${name}.xlsx in emails directory`)
        }).catch(e => reject(`Unable to write. Error ${e}`))
    })
}
