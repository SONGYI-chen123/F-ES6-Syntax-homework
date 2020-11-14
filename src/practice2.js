const inject = (items, sections) => {
    sections.sort((a,b) => {
        return b.index - a.index;
    });
    sections.forEach(element => {
        items.splice(element.index,0,element.content);
    });
    return items;
}
export { inject };
