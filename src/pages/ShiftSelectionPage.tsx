import React, { useContext, useEffect, useState } from 'react'
import { BiRefresh } from 'react-icons/bi'
import { MdOutlineAddCircleOutline } from 'react-icons/md'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineArrowRight } from 'react-icons/ai'
import ShiftPeriodItem from '../components/ShiftPriodItem';
import WeekTable from '../components/WeekTable';
import { UserContext } from '../context/UserContext';
import { Period } from '../models/Period';
import { getShiftPeriods, postShiftPeriod } from '../services/dataService';
import Button from '../components/Button'
import { BsCalendarPlus } from 'react-icons/bs'
import EditPeriod from '../components/EditPeriod'


type ShiftSelectionPageProps = {
  startDate: Date,
  daysCount: number,

}
function ShiftSelectionPage() {

  const [startDate, setStartDate] = useState(new Date())
  const [loadingPeriods, setLoadingPeriods] = useState(false)
  const [loadingPostPariod, setLoadingPostPariod] = useState(false)
  const [shiftPriods, setShiftPriods] = useState<Period[]>([])
  const [addMode, setAddMode] = useState<boolean>(false)
  const userService = useContext(UserContext)

  const refreshShiftPriods = () => {
    setLoadingPeriods(true);
    getShiftPeriods().then(res => setShiftPriods(res))
      .finally(() => setLoadingPeriods(false));
  }

  const getSelectedShifts = (period: Period) => {

  }

  const addNewPeriod = (period: Period) => {
    // TODO: check if valid
    console.log(period)
    setLoadingPostPariod(true);
    postShiftPeriod(period).then((newPeriod) => {
      setShiftPriods([period, ...shiftPriods]);
      setAddMode(false);
    }).catch(err => console.log(err))
      .finally(() => setLoadingPostPariod(false))
  }

  useEffect(() => {
    refreshShiftPriods()

    return () => {
      null
    }
  }, [])

  return (
    <>
      <div className='flex justify-between items-center tracking-wide text-lg pt-2'>
        <div className=' text-gray-500 tracking-widest'>
          {userService.userInfo.role == 'manager' && 'Managing shift periods:'}
          {userService.userInfo.role == 'employee' && 'My Shifts:'}
        </div>
        <div className='flex gap-3'>
          <BiRefresh className={` cursor-pointer hover:opacity-70 ${loadingPeriods && 'animate-spin fill-orange-400'}`}
            onClick={refreshShiftPriods} />
          {userService.userInfo.role == 'manager' &&
            <MdOutlineAddCircleOutline className={` cursor-pointer hover:opacity-70 transition-all
            ${addMode ? ' rotate-[135deg] fill-red-500' : ' fill-green-600'} `}
              onClick={() => setAddMode(!addMode)} />}
        </div>
      </div>

      {addMode &&
        <div className={loadingPostPariod ? 'animate-pulse' : ''}>
          <EditPeriod period={{ id: 'new' } as Period} onSubmit={addNewPeriod} />
        </div>
      }
      <div className='flex w-full justify-center animate-pulse text-lg italic p-2 '>{loadingPeriods && 'loading...'}</div>
      {!loadingPeriods && shiftPriods.length > 0
        ? shiftPriods.map(period =>
          <>
            <ShiftPeriodItem period={period} key={period.id} onOpen={getSelectedShifts}
              editMode={(period.id == 'new' || period.id == 'edit')}>
              <WeekTable date={startDate} selectedShifts={[]} />
            </ShiftPeriodItem>
          </>
        )
        : !loadingPeriods && <div>There are no shift periods to show</div>}
      {/* <ShiftTable startDate={startDate} daysCount={7}/> */}
    </>
  )
}

export default ShiftSelectionPage