import _ from 'lodash'


export const sLinks = (html, link) => {
    console.log(`--------------------------slinks`)

    let rLinks = []
    let aLinks = []
    let links = []
    let dCheck = new RegExp(link, 'g')
    let relativeLinks = /href ?= ?('|")[^http][^\.][^www]\/?\S+('|")/g
    let absoluteLinks = /href ?= ?('|")http\S+('|")/g
    if (html.match(relativeLinks) !== null) {
        html.match(relativeLinks).map(lnk => {
            lnk = lnk.match(/"\/?\S+"/)[0].substring(1, lnk.match(/"\/?\S+"/)[0].length - 1);
            let flink = lnk.substring(0, 1) !== "/" ? `/${lnk}` : lnk
            if (!(/\.pdf$/.test(flink) ||/\.png$/.test(flink) || /^\./.test(flink))) {
                if (_.indexOf(links, flink) == -1) {
                    links.push(flink)
                    console.log(`---------`, flink);

                }
            }

            // console.log (`${link}${lnk}`)

        })
    }

    

    // html.match(absoluteLinks).map(lnk => {
    //     if(dCheck.test(lnk)){
    //         lnk = lnk.match(/"\/\S+"/g)[0].substring(1,lnk.match(/"\/\S+"/g)[0].length-1)    
    //         (lnk)
    //     }
    // })
    return links
}
