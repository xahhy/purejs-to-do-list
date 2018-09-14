
export const groupBy = (list, prop) => {
    const result = list.reduce((groups, item) => {
        groups[item[prop]] = groups[item[prop]] || [];
        groups[item[prop]].push(item);
        return groups;
    }, {});
    return result;
};

export const STATUS = {TODO: 'To do', IN_PROGRESS: 'In progress', BLOCKED: 'Blocked'};

export const isValidDate = function (d) {
    return d instanceof Date && !isNaN(d);
};

Date.prototype.toISODateString = function(){
    return this.toISOString().slice(0,10);
};