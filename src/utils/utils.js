export const processHeadings = html => {
  return html.replace(/(<h[1-6]>)(.*)(<\/h[1-6]>)/g, '$1<span>$2</span>$3')
}

export const formatList = (list = [] /*style = 'short'*/) => {
  return list.join(' ')
  // return new Intl.ListFormat('en', { style }).format(list)
}
