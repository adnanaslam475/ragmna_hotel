import React, { useState, useEffect } from 'react'
import DayPicker, {
    DateUtils,
} from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import service from './services'
import "react-day-picker/lib/style.css";

const CalendarSetup = ({ onChange }:any) => {
    const [tempRange, setTempRange] = useState<any>({ from: null, to: null })
    const [ranges, setRanges] = useState<any[]>([])
    const [lastDayMouseEnter, setLastDayMouseEnter] = useState<any>(null)

    console.log(tempRange);
    useEffect(() => {
        onChange(ranges)
    }, [ranges, onChange])

    useEffect(() => {
        if (tempRange) {

            if (!!tempRange.from && !!tempRange.to) {
                const { shouldIncrease, increasedRanges } = service.increaseSmallerRanges(tempRange, ranges)
                console.log(shouldIncrease, increasedRanges, 'increasedRanges');
                setRanges(shouldIncrease ? increasedRanges : [...ranges, tempRange])
                console.log(tempRange, ranges, 'ranges');
            }
        }
    }, [tempRange])

    useEffect(() => {
        setTempRange({ from: null, to: null })
        setLastDayMouseEnter(null)
    }, [ranges])

    const handleDayClick = (day, modifiers) => {
        console.log(day, 'modifiers')
        console.log(tempRange, 'modifiers')

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
        'firstrange': (day) =>
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
        'secondrange': (day) =>
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
        'thirdrange': (day) =>
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
    }

    return (
        <DayPicker
            className='DatePickerRange'
            firstDayOfWeek={1}
            numberOfMonths={12}
            selectedDays={[{ from: tempRange ? tempRange.from : null, to: lastDayMouseEnter }, ...ranges]}
            onDayClick={handleDayClick}
            onDayMouseEnter={handleDayMouseEnter}
            modifiers={modifiers}
            modifiersStyles={{ firstrange: { backgroundColor: 'red' },
            secondrange: { backgroundColor: 'black' },
            thirdrange: { backgroundColor: 'green' }
        }}

        />
    )
}

export default CalendarSetup