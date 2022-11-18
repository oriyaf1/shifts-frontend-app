import { Period } from "../models/Period"
import { sleep } from "./utiles";

let shiftPeriods: Period[] = [
    {
        id: Math.floor(Math.random() * 10000000).toString(),
        startDate: new Date(),
        endDate: new Date(),
        dayCount: 14,
        expiredDate: new Date(),
        isScheduling: false
    },
    {
        id: Math.floor(Math.random() * 10000000).toString(),
        startDate: new Date(),
        endDate: new Date(),
        dayCount: 7,
        expiredDate: new Date(),
        isScheduling: true,
    },
];
let timeout = 1500;

export const getShiftPeriods = async (id?: string) => {
    await sleep(timeout);
    return id ? shiftPeriods.filter(p => p.id == id) : shiftPeriods;
}

export const postShiftPeriod = async (shiftPeriod: Period) => {
    await sleep(timeout);
    shiftPeriod.id = Math.floor(Math.random() * 10000000).toString();
    shiftPeriods = [shiftPeriod].concat(shiftPeriod);
    return shiftPeriod
}




