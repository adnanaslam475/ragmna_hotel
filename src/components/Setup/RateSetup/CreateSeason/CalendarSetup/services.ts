import { DateUtils } from 'react-day-picker'

export default class DatePickerRangeService {
    static isSelectingFirstDay = (
        from,
        to,
        day
    ) => {
        const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from)
        const isRangeSelected = from && to
        return !from || isBeforeFirstDay || isRangeSelected
    }

    static increaseSmallerRanges = (
        tempRangeNullable,
        ranges
    ) => {
        let shouldIncrease = false
        const tempRange = tempRangeNullable

        const increasedRanges = ranges.map((r) => {
            const { from, to } = r
            const isFromInTempRange = DateUtils.isDayInRange(from, tempRange)
            const isToInTempRange = DateUtils.isDayInRange(to, tempRange)

            if (isFromInTempRange && isToInTempRange) {
                shouldIncrease = true
                return tempRange
            } else if (isFromInTempRange && !isToInTempRange) {
                shouldIncrease = true
                return { from: tempRange.from, to }
            } else {
                return r
            }
        })

        return {
            shouldIncrease,
            // increasedRanges: [...new Set(increasedRanges)]
             increasedRanges: []
        }
    }
}