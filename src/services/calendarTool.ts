export const getWeek = (date?:Date ) => {
    let week:Date[] = [];
    let tempDate = date ? new Date(date) : new Date();
    tempDate.setDate(tempDate.getDate() - tempDate.getDay());
    for (let i = 0; i < 7; i++) {
        week.push(new Date(tempDate));
        tempDate.setDate(tempDate.getDate() + 1);
    }
    return week;
};

