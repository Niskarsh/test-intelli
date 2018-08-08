import excel from 'exceljs'
import _ from 'lodash'
import { search } from './search'
import { writeXlsx } from './writeXls'

let pagesVisited = []
let pagesToVisit = []
let stack = []
let stackPointer=0
let email = []
let first = true
let base_url=""


export const findId = async (link, workbook) => {

    if (!first) {
        if (stackPointer == 0||stackPointer<0) {
            // console.log(`--------breaking ${stackPointer}`)
            console.log(email)
            let sheet = workbook.addWorksheet(base_url.match(/\/\/w?w?w?\.?([a-z0-9]+)\./)[1]);
            await sheet.addRow ("Home page link", base_url)
            email.map (async id => {
                await sheet.addRow (id)
            })
            await writeXlsx(workbook, "links").then ( msg => console.log (msg)).catch (e => console.log (e))
            return
            
        
        }
    }
    // if (!first) {
    //     if (pagesToVisit.length === pagesVisited.length) {
    //         console.log(`--------breaking ${pagesVisited.length}`)
    //         console.log(`eeeeeeeeeeeeeeee`, email)
    //         process.abort()
    //     }
    // }
    // console.log(`--******visit ${stackPointer}`)

    if (first) {
        base_url = link
        first = false
        stack.push(link)
        stackPointer+=1;
    }
    console.log(`--******visit ${stackPointer}`)



    if (link.charAt(0) !== 'h') {
        link = base_url.substring(base_url.length - 1) === "/" ? base_url.substring(0, base_url.length - 1) + link : base_url + link
    }

    await search(link, false).then(async data => {
        data.map(em => {
            if (_.indexOf(email, em) == -1) {
                email.push(em)

            }
        })
        console.log(`------true`)
        if (link===base_url){
            await search (link, true). then(() => {}, async data => {
                data.map(lnk => {
                    if (_.indexOf(stack, lnk) == -1 && (!(/\?/.test(lnk))) && (!(/[0-9]/.test(lnk)))) {
                        stack.splice(stackPointer,0, lnk)
                        stackPointer+=1
                        console.log(`----pages pushed----`, lnk)
                    }
                    else {
                        console.log(`--------rejected`, lnk)
                    }
    
                })
                console.log (`-++++++----------B4 pop`, stackPointer)
            var lnk = stack[stackPointer-1]
            stackPointer-=1
            console.log (`-----------Ater pop`, lnk)

            await findId(lnk, workbook)

                
            }).catch (e => console.log (e))
        }else{

        console.log (`-++++++----------B4 pop`, stackPointer)
        var lnk = stack[stackPointer-1]
        stackPointer-=1
            console.log (`-----------Ater pop`, lnk)

            await findId(lnk, workbook)}
        

    }, async data => {
        if (data !== false) {
            data.map(lnk => {
                if (_.indexOf(stack, lnk) == -1 && (!(/\?/.test(lnk))) && (!(/[0-9]/.test(lnk)))) {
                    stack.splice(stackPointer,0, lnk)
                    stackPointer+=1
                    console.log(`----pages pushed----`, lnk)
                }
                else {
                    console.log(`--------rejected`, lnk)
                }

            })
            

        } 
        console.log (`-++++++----------B4 pop`, stackPointer)
            var lnk = stack[stackPointer-1]
            stackPointer-=1
            console.log (`-----------Ater pop`, lnk)

            await findId(lnk, workbook)

    }).catch(e => console.log(e))

}

// if (_.indexOf(pagesVisited, link) == -1) {
//     pagesVisited.push(link)

//     // console.log(`-----------------pushing`, link)
//     if (_.indexOf(pagesToVisit, link) == -1) {
//         console.log(`-----------------pushing`, link)

//         pagesToVisit.push(link)
//     }
//     if (link.charAt(0) !== 'h') {
//         link = base_url.substring(base_url.length - 1) === "/" ? base_url.substring(0, base_url.length - 1) + link : base_url + link
//     }
//     await search(link).then(data => {
//         data.map(em => {
//             if (_.indexOf(email, em) == -1) {
//                 email.push(em)

//             }
//         })
//         // console.log(`eeeeeeeeeeeeeeee`, email)
//         // process.abort()

//         console.log(`------true`)
//     }, data => {
//         if (data !== false) {
//             data.map(lnk => {
//                 if (_.indexOf(pagesToVisit, lnk) == -1 && (!(/\?/.test(lnk)))) {
//                     pagesToVisit.push(lnk)
//                     console.log(`----pages to visit----`, lnk)
//                 }

//             })
//             data.map(async (lnk) => {
//                 var l1
//                 if (_.indexOf(pagesVisited, lnk) == -1 && (!(/\?/.test(lnk)))) {
//                     // if (lnk.charAt(0) !== 'h') {
//                     //     l1 = base_url.substring(base_url.length - 1) === "/" ? base_url.substring(0, base_url.length - 1)+lnk : base_url + lnk
//                     //     await findId(l1)
//                     // } else {

//                     // }
//                     await findId(lnk)

//                 } else {
//                     console.log(`--------rejected`, lnk)
//                 }
//             })
//         }
//     }).catch(e => console.log(e))
// }




// export const findId = async (link) => {
//     await fId (link)
//     return email
// }