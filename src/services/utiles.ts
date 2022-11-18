export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
export const prettyDate = (date: Date) => {
    return date.getDate() + '/' + (date.getMonth() + 1) 
};
export const prettyTime = (date: Date) => {
    return date.getHours() + ':' + date.getMinutes() 
};

