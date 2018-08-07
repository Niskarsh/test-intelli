

export const sLinks = ($, link) => {

    let rLinks = []
    let aLinks = []
    let links = []

    let relativeLinks = $("a[href^='/']")
    relativeLinks.each(() => {
        rLinks.push(`${link}${$(this).attr('href')}`)

    })

    let absoluteLinks = $("a[href^='http']")
    absoluteLinks.each(() => {
        if (`/${link}/`.test ($(this).attr('href'))){
            aLinks.push($(this).attr('href'))
        }
    })
    links.push(aLinks)
    links.push(rLinks)
    return links
}
