const parseData = (sourse) =>{
    let result = [];
    let {column,data} = sourse;

    data.forEach(element => {
        let obj = {};
        element.map((value,i) => {
            obj[column[i].name] = value;
        });
        result.push(obj);
    });
    return result;

}
export { parseData };
