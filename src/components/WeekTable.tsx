import React, { useEffect, useState } from 'react'
import { Shift } from '../models/Shift';
import { getWeek } from '../services/calendarTool';
import { dayPartsShift, daysNames } from '../services/consts';
import ShiftCell from './ShiftCell';


type WeekTableProps = {
    date: Date;
    selectedShifts: Shift[];
    onShiftSelected?: (shift: Shift) => any;
    onShiftDeselected?: (shift: Shift) => any;
}
function WeekTable({ date, selectedShifts, onShiftSelected }: WeekTableProps) {
    const [week, setWeek] = useState<Date[]>([])

    useEffect(() => {
        setWeek(getWeek(date));
        return () => {
            null;
        }
    }, [date])

    return (
        <div className='w-full justify-center flex py-2'>{week.map((day, index) =>
            <div className=' border-r px-1 last:border-none'>
                <div className='text-sm text-center italic text-gray-700'>
                    {`${daysNames[day.getDay() as keyof typeof daysNames].substring(0, 3)}(${day.getDate()})`}
                </div>
                <div className='flex flex-col gap-1'>

                    {[0, 1, 2].map(shiftNumber =>
                        <ShiftCell key={index *10  + shiftNumber} shift={{ dayOfTheMonth: date.getDate(), month: date.getMonth(), dayPart: shiftNumber }} onClick={onShiftSelected}
                            isSelected={selectedShifts.indexOf({ dayOfTheMonth: date.getDate(), month: date.getMonth(), dayPart: shiftNumber }) == -1 ? false : true}
                            label={dayPartsShift[shiftNumber as keyof typeof dayPartsShift]} />)}
                </div>
            </div>)}
        </div>
    )
}

export default WeekTable