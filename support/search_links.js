

export const sLinks = (pbody, link) => {
    console.log (`--------------------------slinks`)

    let rLinks = []
    let aLinks = []
    let links = []
    let dCheck = new RegExp (link,'g')
    let relativeLinks = /href ?= ?('|")\/\S+('|")/g
    let absoluteLinks = /href ?= ?('|")http\S+('|")/g
    pbody.match(relativeLinks).map(lnk => {
        lnk = lnk.match(/"\/\S+"/g)[0].substring(1,lnk.match(/"\/\S+"/g)[0].length-1)    
        links.push (`${link}${lnk}`)
    
    })
    pbody.match(absoluteLinks).map(lnk => {
        if(dCheck.test(lnk)){
            lnk = lnk.match(/"\/\S+"/g)[0].substring(1,lnk.match(/"\/\S+"/g)[0].length-1)    
            links.push(lnk)
        }
    })
    return links
}
