import React, { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { BsCalendarPlus } from 'react-icons/bs';
import { Period } from '../models/Period';
import Button from './Button';

type EditPeriodProps = {
    period: Period,
    onSubmit: (p: Period) => any,
    disabled? : boolean,
}

function EditPeriod({ period, onSubmit, disabled }: EditPeriodProps) {

    const [startDate, setStartDate] = useState<Date>(period.startDate)
    const [endDate, setEndDate] = useState<Date>(period.endDate)
    const [expiredDate, setExpiredDate] = useState(period.expiredDate)

    const isValidPeriod = () => {
        return !!(startDate && endDate && expiredDate);
    }

    return (
        <>
            <div className='my-3 flex flex-col items-center'>
                <div className=' italic font-medium self-start'> add new shifts priod: </div>
                <div className='flex justify-between items-center p-2 border w-full'>
                    <div className='flex items-center gap-4'>
                        <div className='flex flex-col justify-between items-center'>
                            <label htmlFor="start-date" className=' text-sm italic'>Start date:</label>
                            <input id='start-date' type="date" className=' w-[85px] text-xs bg-none appearance-none'
                                onChange={(e) => setStartDate(new Date(e.target.value))} disabled={disabled}/>
                        </div>
                        <AiOutlineArrowRight />
                        <div className='flex flex-col justify-between items-center'>
                            <label htmlFor="end-date" className=' text-sm italic'>End date:</label>
                            <input id='end-date' type="date" className=' w-[85px] text-xs bg-none appearance-none'
                                onChange={(e) => setEndDate(new Date(e.target.value))} disabled={disabled}/>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 px-3'>
                        <label htmlFor="schedule-before">
                            <BiTimeFive />
                        </label>
                        <div className='flex flex-col justify-between items-center px-2 bg-gray-300 rounded-md'>
                            <label htmlFor="schedule-before" className=' text-sm italic'>Schedule before:</label>
                            <input id='schedule-before' type="date" className=' bg-inherit w-[85px] text-xs bg-none appearance-none'
                                onChange={(e) => setExpiredDate(new Date(e.target.value))} disabled={disabled}/>
                        </div>
                    </div>
                </div>
                <Button disabled={!isValidPeriod() && !disabled}
                    onClick={() => onSubmit({...period, startDate:startDate, endDate:endDate, expiredDate:expiredDate})}
                    className='m-1' label='Add new period!'
                    bg='bg-green-400' icon={<BsCalendarPlus />} />
            </div>
        </>
    )
}

export default EditPeriod