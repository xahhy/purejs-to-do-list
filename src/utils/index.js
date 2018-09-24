export const STATUS = {TODO: 'To do', IN_PROGRESS: 'In progress', BLOCKED: 'Blocked'};

export const DUE_DATE_GROUPS = {OUT_OF_DATE:'Out of date', IN_ONE_DAY: 'In 1 day', IN_THREE_DAYS: 'In 3 days'};

export const isValidDate = function (d) {
    return d instanceof Date && !isNaN(d);
};

export const groupBy = (list, prop) => {
    const result = list.reduce((groups, item) => {
        groups[item[prop]] = groups[item[prop]] || [];
        groups[item[prop]].push(item);
        return groups;
    }, {});
    return result;

};

export const groupByDueDate = (todos) => {
    let result = todos.reduce((groups, todo)=>{
        groups[DUE_DATE_GROUPS.OUT_OF_DATE] = groups[DUE_DATE_GROUPS.OUT_OF_DATE] || [];
        groups[DUE_DATE_GROUPS.IN_ONE_DAY] = groups[DUE_DATE_GROUPS.IN_ONE_DAY] || [];
        groups[DUE_DATE_GROUPS.IN_THREE_DAYS] = groups[DUE_DATE_GROUPS.IN_THREE_DAYS] || [];
        const date = new Date(todo.dueDate);
        let today = new Date();
        if (isValidDate(date)) {
            const inOneDayDate = new Date();
            inOneDayDate.setDate(inOneDayDate.getDate()+1);
            const inThreeDaysDate = new Date();
            inThreeDaysDate.setDate(inThreeDaysDate.getDate()+3);

            if (date < today){
                groups[DUE_DATE_GROUPS.OUT_OF_DATE].push(todo);
            }
            else if (date <= inOneDayDate ){
                groups[DUE_DATE_GROUPS.IN_ONE_DAY].push(todo);
            }
            else if (date <= inThreeDaysDate){
                groups[DUE_DATE_GROUPS.IN_THREE_DAYS].push(todo);
            }
        }
        return groups;
    }, {});
    return result;
};

Date.prototype.toISODateString = function(){
    return isNaN(this) ? '' : this.toISOString().slice(0,10);
};

export function generateSearchQuery(filter) {
    let {keyWord, startDate, endDate, tags, order, orderBy } = filter;
    let search = {
        name: keyWord,
    };
    if (startDate) {
        search = {...search, startDate: startDate.toISODateString()};
    }
    if (endDate) {
        search = {...search, endDate: endDate.toISODateString()};
    }
    if (tags.length !== 0) {
        search = {...search, tagsId: tags}
    }
    if (order && orderBy){
        search = {...search, sort: `${orderBy},${order}`}
    }
    return search;
}
