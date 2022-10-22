import React, { useState, useEffect } from "react";
import DayPicker from "react-day-picker";
import "./CalendarSetup.scss";
const CalendarSetup = ({ dateRange }: any) => {
  const [ranges, setRanges] = useState<any[]>([]);
  useEffect(() => {
    let temp: any = [];

    for (let index = 0; index < dateRange.length; index++) {
      if (dateRange[index].startDate && dateRange[index].endDate) {
        temp.push({
          from: dateRange[index].startDate,
          to: dateRange[index].endDate,
        });
      }
    }
    setRanges(temp);
  }, [dateRange]);

  const getModifiers = () => {
    let modifier = {}
    for (let index = 0; index < ranges.length; index++) {
      let payload = {
        from: ranges[index].from,
        to: ranges[index].to
      }
      modifier['R' + index] = payload
    }
    return modifier
  }

  const getModifierStyle = () => {
    let modifierStyle = {}
    for (let index = 0; index < ranges.length; index++) {
      let payload =
        { backgroundColor: dateRange[index].color }

      modifierStyle['R' + index] = payload
    }
    return modifierStyle
  }
  return (
    <DayPicker
      className="DatePickerRange"
      firstDayOfWeek={1}
      numberOfMonths={12}
      disabledDays={{ before: new Date() }}
      selectedDays={ranges}
      modifiers={getModifiers()}
      showOutsideDays={false}
      enableOutsideDaysClick={false}
      modifiersStyles={getModifierStyle()}
    />
  );
};
export default CalendarSetup;
