export interface Period {
    id?:string;
    startDate:Date,
    endDate:Date,
    dayCount?:number,
    expiredDate:Date,
    isScheduling:boolean,
}