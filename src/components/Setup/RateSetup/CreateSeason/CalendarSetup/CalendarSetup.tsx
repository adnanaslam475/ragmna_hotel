import React, { useState, useEffect } from 'react'
import DayPicker, {
    DateUtils,
} from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import service from './services'
import "react-day-picker/lib/style.css";
import './CalendarSetup.scss'

const CalendarSetup = ({ onChange , dateRange}:any) => {
    const [tempRange, setTempRange] = useState<any>({ from: null, to: null })
    const [ranges, setRanges] = useState<any[]>([])
    const [lastDayMouseEnter, setLastDayMouseEnter] = useState<any>(null)

    useEffect(() => {
        onChange(ranges)
    }, [ranges, onChange])

    useEffect(() => {
        for (let index = 0; index < dateRange.length; index++) {
        setTempRange({ from: dateRange[index].from, to: dateRange[index].to })
        }
    }, [dateRange])
    

    useEffect(() => {
        if (tempRange) {

            if (!!tempRange.from && !!tempRange.to) {
              
                const { shouldIncrease, increasedRanges } = service.increaseSmallerRanges(tempRange, ranges)
                setRanges(shouldIncrease ? increasedRanges : [...ranges, tempRange])
            }
        }
    }, [tempRange])

 
    

    useEffect(() => {
        setTempRange({ from: null, to: null })
        setLastDayMouseEnter(null)
    }, [ranges])

    const handleDayClick = (day, modifiers) => {
      

        const { selected } = modifiers
        const isDayInHoverRange = DateUtils.isDayInRange(day, {
            from: tempRange.from,
            to: lastDayMouseEnter
        })
        if (!selected || isDayInHoverRange) {
            setTempRange(DateUtils.addDayToRange(day, tempRange))
        } else {
            const filteredRanges = ranges.filter((r) => !DateUtils.isDayInRange(day, r))
            setRanges(filteredRanges)
        }
    }

    const handleDayMouseEnter = (day) => {
        const { from, to } = tempRange
        if (!service.isSelectingFirstDay(from, to, day)) {
            setLastDayMouseEnter(day)
        }
    }
 
    const modifiers = {
        
        'R0': (day) =>
            ranges.some((r, i) => {
                if (i === 0) {
                    if (
                        DateUtils.isDayBetween(day, r.from, r.to) ||
                        DateUtils.isSameDay(day, r.to) ||
                        DateUtils.isSameDay(day, r.from)
                    ) {
                        return true
                    }
                }
                return false
            }),
        'R1': (day) =>
            ranges.some((r, i) => {
                if (i === 1) {
                    if (
                        DateUtils.isDayBetween(day, r.from, r.to) ||
                        DateUtils.isSameDay(day, r.to) ||
                        DateUtils.isSameDay(day, r.from)
                    ) {
                        return true
                    }
                }
                return false
            }),
        'R2': (day) =>
            ranges.some((r, i) => {
                if (i === 2) {
                    if (
                        DateUtils.isDayBetween(day, r.from, r.to) ||
                        DateUtils.isSameDay(day, r.to) ||
                        DateUtils.isSameDay(day, r.from)
                    ) {
                        return true
                    }
                }
                return false
            }),
            'R3': (day) =>
            ranges.some((r, i) => {
                if (i === 3) {
                    if (
                        DateUtils.isDayBetween(day, r.from, r.to) ||
                        DateUtils.isSameDay(day, r.to) ||
                        DateUtils.isSameDay(day, r.from)
                    ) {
                        return true
                    }
                }
                return false
            }),
            'R4': (day) =>
            ranges.some((r, i) => {
                if (i === 4) {
                    if (
                        DateUtils.isDayBetween(day, r.from, r.to) ||
                        DateUtils.isSameDay(day, r.to) ||
                        DateUtils.isSameDay(day, r.from)
                    ) {
                        return true
                    }
                }
                return false
            }),
    }

    return (
        <DayPicker
            className='DatePickerRange'
            firstDayOfWeek={1}
            numberOfMonths={12}
            disabledDays={{before: new Date()}}
            selectedDays={[{ from: tempRange ? tempRange.from : null, to: lastDayMouseEnter }, ...ranges]}
            // onDayClick={handleDayClick}
            // onDayMouseEnter={handleDayMouseEnter}
            modifiers={modifiers}
            showOutsideDays={false}
            enableOutsideDaysClick={false}
            modifiersStyles={{ R0: { backgroundColor: dateRange[0]?.color },
            R1: { backgroundColor: dateRange[1]?.color },
            R2: { backgroundColor: dateRange[2]?.color },
            R3: { backgroundColor: dateRange[3]?.color },
            R4: { backgroundColor: dateRange[4]?.color }, 
        }}

        />
    )
}

export default CalendarSetup