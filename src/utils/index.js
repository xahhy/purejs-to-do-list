
export const groupBy = (list, prop) => {
    const result = list.reduce((groups, item) => {
        groups[item[prop]] = groups[item[prop]] || [];
        groups[item[prop]].push(item);
        return groups;
    }, {});
    return result;
};

export const STATUS = {TODO: 'To do', IN_PROGRESS: 'In progress', BLOCKED: 'Blocked'};

