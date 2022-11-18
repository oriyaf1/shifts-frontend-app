import React, { useCallback, useEffect, useState } from 'react'
import ShiftCell from '../ShiftCell';
import { Shift } from '../../models/Shift'

import { dayPartsShift, daysNames } from '../../services/consts'
import Menu from '../Menu';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'



type ShiftSelectionPageProps = {
    startDate: Date,
    daysCount: number
}


function ShiftTable({ startDate, daysCount }: ShiftSelectionPageProps) {
    const [dates, setDates] = useState([new Date(startDate)])
    const [shifts, setShifts] = useState<Shift[][]>([])
    const [selectedShifts, setSelectedShifts] = useState<Shift[]>([])

    const cellSelected = useCallback(
        (s: Shift) => {
            console.log(selectedShifts.indexOf(s), selectedShifts)
            selectedShifts.indexOf(s) == -1 ?
                setSelectedShifts([...selectedShifts, s])
                : setSelectedShifts(selectedShifts.filter(shift => shift != s));
        },
        [selectedShifts],
    )

    useEffect(() => {
        let fromDate = new Date(startDate);
        let newDates: Date[] = []
        let newShifts: Shift[][] = [];
        for (let i = 0; i < daysCount; i++) {
            newDates.push(new Date(fromDate));
            let dayShifts: Shift[] = [];
            for (let j = 0; j < 3; j++) {
                dayShifts.push({
                    dayOfTheMonth: fromDate.getDate(),
                    month: fromDate.getMonth(),
                    dayPart: j,
                })
            }
            newShifts.push(dayShifts);
            fromDate.setDate(fromDate.getDate() + 1);
        }
        setDates(newDates);
        setShifts(newShifts);
        return () => {
            null
        }
    }, []);


    return (
        <>
            <div className='flex justify-between'>
                <button className='flex items-center gap-2 hover:opacity-70'>
                    <BsArrowLeftShort />
                    <span>week back</span>
                </button>
                <button className='flex items-center gap-2 hover:opacity-70'>
                    <span>next week</span>
                    <BsArrowRightShort className='' />
                </button>
            </div>
            <div className='flex justify-around border-2 rounded-md p-2 w-full bg-sky-50/30'>
                {shifts.map((dayshifts, index) =>
                    <div key={index} className=" flex flex-col gap-2 items-center w-full max-w-[3.5rem] ">
                        <div>
                            {daysNames[dates[index].getDay() as keyof typeof daysNames].substring(0, 3) + '(' + dates[index].getDate() + ')'}
                        </div>
                        {dayshifts.map(s =>
                            <>
                                <ShiftCell key={index + ':' + s.dayPart} shift={s} onClick={cellSelected}
                                    isSelected={selectedShifts.indexOf(s) == -1 ? false : true}
                                    label={dayPartsShift[s.dayPart as keyof typeof dayPartsShift]} />
                            </>
                        )}
                    </div>)}
            </div>
            <button className='py-1 px-4 rounded-md bg-green-400 hover:opacity-80'>sendShifts</button>
        </>
    )
}

export default ShiftTable;