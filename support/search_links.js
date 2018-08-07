

export const sLinks = ($) => {

    let rLinks = []
    let aLinks = []
    let links = []

    let relativeLinks = $("a[href^='/']")
    relativeLinks.each(() => {
        rLinks.push($(this).attr('href'))

    })

    let absoluteLinks = $("a[href^='http']")
    absoluteLinks.each(() => {
        aLinks.push($(this).attr('href'))
    })
    links.push(`absolute`, aLinks)
    links.push(`relative`, rLinks)
    return links
}
