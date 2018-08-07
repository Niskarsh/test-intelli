

export const sLinks = ($, link) => {
    console.log (`--------------------------slinks`)

    let rLinks = []
    let aLinks = []
    let links = []

    let relativeLinks = $("a[href^='/']")
    relativeLinks.each(() => {
        console.log (`-----------rel link ${link}${$(this).attr('href')}`)
        rLinks.push(`${link}${$(this).attr('href')}`)

    })

    let absoluteLinks = $("a[href^='http']")
    
    absoluteLinks.each(() => {
        let linkRegex = new RegExp (`/${link}/g`)
        if (linkRegex.test ($(this).attr('href'))){
            console.log (`-----------abs link ${$(this).attr('href')}`)
            aLinks.push($(this).attr('href'))
        }
    })
    links.push(aLinks)
    links.push(rLinks)
    return links
}
