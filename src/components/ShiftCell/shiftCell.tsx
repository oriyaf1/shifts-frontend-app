import React from 'react'
import { Shift } from '../../models/Shift'
import { dayPartsShift } from '../../services/consts'
import { AiOutlineCheck } from 'react-icons/ai';



type shiftCellProps = {
    shift: Shift,
    onClick?: (s: Shift) => any,
    isSelected: boolean,
    label: string,
}
function shiftCell({ shift, onClick, isSelected, label }: shiftCellProps) {
    return (
        <div onClick={() => onClick ? onClick(shift): null}
            className={`p-1 cursor-pointer w-full h-16 rounded-md flex flex-col items-center gap-2
        text-center text-xs text-gray-400 hover:bg-green-100 
         ${isSelected ? ' bg-green-100 text-gray-700' : 'bg-gray-50 text-gray-400 hover:bg-green-50 '}`}>
            <div>
                {label}
            </div>
            {isSelected && <AiOutlineCheck />}
        </div >
    )
}

export default shiftCell