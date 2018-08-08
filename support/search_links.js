

export const sLinks = (html, link) => {
    console.log (`--------------------------slinks`)

    let rLinks = []
    let aLinks = []
    let links = []
    let dCheck = new RegExp (link,'g')
    let relativeLinks = /href ?= ?('|")[^http][^\.][^www]\/?\S+('|")/g
    let absoluteLinks = /href ?= ?('|")http\S+('|")/g
    html.match(relativeLinks).map(lnk => {
        lnk = lnk.match(/"\/?\S+"/)[0].substring(1,lnk.match(/"\/?\S+"/)[0].length-1)
        console.log (`---------`, lnk.length)
        
         
        // links.push (`${link}${lnk}`)
        // (link.substring (link.length-1)==="/"&&lnk.substring(0,1)==="/")? links.push (`${link}${lnk.substring(1)}`): links.push (`${link}${lnk}`)
        // console.log (`${link}${lnk}`)
    
    })
    // html.match(absoluteLinks).map(lnk => {
    //     if(dCheck.test(lnk)){
    //         lnk = lnk.match(/"\/\S+"/g)[0].substring(1,lnk.match(/"\/\S+"/g)[0].length-1)    
    //         links.push(lnk)
    //     }
    // })
    return links
}
