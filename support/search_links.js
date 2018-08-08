import _ from 'lodash'


export const sLinks = (html, link) => {
    console.log(`--------------------------slinks`)

    let rLinks = []
    let aLinks = []
    let links = []
    let dCheck = new RegExp(link.match(/\/\/w?w?w?\.?([a-z0-9]+)\./)[1], 'g')
    let relativeLinks = /href ?= ?('|")[^http][^\.][^www]\/?\S+('|")/gi
    let absoluteLinks = /href ?= ?('|")(http|https)\S+('|")/gi
    if (html.match(relativeLinks) !== null) {
        html.match(relativeLinks).map(lnk => {
            console.log (`rel found ------------`)
            if (lnk.match(/"\/?\S+"/)!==null){
            lnk = lnk.match(/"\/?\S+"/)[0].substring(1, lnk.match(/"\/?\S+"/)[0].length - 1);
            let flink = lnk.substring(0, 1) !== "/" ? `/${lnk}` : lnk
            if (!(/\.pdf$/.test(flink) ||/\.png$/.test(flink) || /\.css$/.test(flink) || /\.ico$/.test(flink) || /^\./.test(flink))) {
                if (_.indexOf(links, flink) == -1) {
                    links.push(flink)
                    console.log(`---------`, flink);

                }
            }
        }

            // console.log (`${link}${lnk}`)

        })
    }

    if (html.match(absoluteLinks)!==null) {
        html.match(absoluteLinks).map(lnk => {
            
            if (lnk.match(/"\S+"/)!=null){
                
            let flink = lnk.match(/"\S+"/)[0].substring(1, lnk.match(/"\S+"/)[0].length - 1);
            console.log (`wewewewwwwwwwwwwwwww`, flink)
            console.log (`-------`, dCheck)
            if (!(/\.pdf$/.test(flink) ||/\.png$/.test(flink) || /\.css$/.test(flink) || /\.ico$/.test(flink) ||/\.jpg/.test(flink))&& dCheck.test(flink)&&(_.indexOf(links, flink) == -1)) {
                console.log (`--ppppppp-----`, flink)
                links.push (flink)
            }}
            // console.log (`-------`, lnk)
        })

    }

    // if (html.match(absoluteLinks) !== null) {
    //     html.match(absoluteLinks).map(lnk => {
    //         lnk = lnk.match(/"\/?\S+"/)[0].substring(1, lnk.match(/"\/?\S+"/)[0].length - 1);
    //         if (!(/\.pdf$/.test(flink) ||/\.png$/.test(flink) || /^\./.test(flink))) {
    //             if (_.indexOf(links, flink) == -1) {
    //                 links.push(flink)
    //                 console.log(`---------`, flink);

    //             }
    //         }

    //         // console.log (`${link}${lnk}`)

    //     })
    // }

    

    // html.match(absoluteLinks).map(lnk => {
    //     if(dCheck.test(lnk)){
    //         lnk = lnk.match(/"\/\S+"/g)[0].substring(1,lnk.match(/"\/\S+"/g)[0].length-1)    
    //         (lnk)
    //     }
    // })
    return links
}
