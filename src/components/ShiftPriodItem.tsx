import React, { useState } from 'react'
import { Period } from '../models/Period'
import { prettyDate, prettyTime } from '../services/utiles'
import { IoIosArrowDown } from 'react-icons/io'
import { BsCalendarRange } from 'react-icons/bs'
import Button from './Button'

type ShiftPriodItemProps = {
    period: Period,
    children?: React.ReactNode,
    onOpen?: (period: Period) => any,
    editMode?: boolean,

}
function ShiftPeriodItem({ period, children, onOpen, editMode }: ShiftPriodItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => { setIsOpen(!isOpen); onOpen ? onOpen(period) : null }
    return (
        <>
            <div className={` border p-2 shadow-md ${period.id == 'new' ? 'bg-gray-200' : ''} `}>
                {!editMode &&
                    <>
                        <div className={`flex w-full justify-between items-center hover:opacity-80 py-2
                            ${!period.isScheduling && 'cursor-pointer'}`}
                            onClick={() => period.isScheduling ? null : onClick()}>
                            <div className='flex items-center gap-1'>
                                <BsCalendarRange />

                                {prettyDate(period.expiredDate)} - {prettyDate((new Date(period.startDate)))}
                                <span className='text-xs italic'>{' (' + period.dayCount + ' days)'}</span>
                            </div>
                            <div className='flex items-center'>
                                {period.isScheduling
                                    ? <div className='bg-red-300 px-2 py-1 text-xs w-fit rounded-2xl text-gray-600 italic'>close</div>
                                    : <div className='bg-green-300 px-2 py-1 text-xs w-fit rounded-2xl text-gray-600 italic'>
                                        close at: {prettyDate(period.expiredDate)} {prettyTime(period.expiredDate)}
                                    </div>
                                }
                                {!period.isScheduling &&
                                    <IoIosArrowDown className={`transition-transform ${isOpen ? ' rotate-180' : 'animate-pulse'}`} />}
                            </div>
                        </div>
                        {isOpen &&
                            <>
                                {children}
                                <Button label='Save' bg='bg-green-400' />
                            </>
                        }
                    </>
                }
                {editMode &&
                    <>
                        <div className='flex justify-between'>

                            <div className='flex flex-col justify-between items-center'>
                                <label htmlFor="start-date" className=' text-sm italic'>Start date:</label>
                                <input id='start-date' type="date" className=' w-20 text-xs bg-none appearance-none' />
                            </div>
                            <div className='flex flex-col justify-between items-center'>
                                <label htmlFor="end-date" className=' text-sm italic'>End date:</label>
                                <input id='end-date' type="date" className=' w-20 text-xs bg-none appearance-none' />
                            </div>
                            s
                        </div>

                    </>
                }
            </div>
        </>
    )
}

export default ShiftPeriodItem