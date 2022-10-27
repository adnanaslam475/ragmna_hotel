import React, { useState, useEffect } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "./CalendarSetup.scss";
const CalendarSetup = ({ dateRange }: any) => {
  const [ranges, setRanges] = useState<any[]>([]);
  useEffect(() => {
    let temp: any = [];

    for (let index = 0; index < dateRange?.length; index++) {
      if (dateRange[index]?.startDate && dateRange[index]?.endDate) {
        temp.push({
          from: new Date(dateRange[index]?.startDate),
          to: new Date( dateRange[index]?.endDate),
        });
      }
    }
    setRanges(temp);
  }, [dateRange]);

  const getModifiers = () => {
    let modifier = {};
    for (let index = 0; index < dateRange?.length; index++) {
      if (dateRange[index]?.startDate && dateRange[index]?.endDate) {
        let payload = {
          from: new Date(dateRange[index]?.startDate),
          to: new Date( dateRange[index]?.endDate),
        };
        modifier["R" + index] = payload;
      }
      if (
        dateRange[index]?.startDate &&
        dateRange[index]?.endDate &&
        dateRange[index]?.days?.length < 7
      ) {
        modifier["D" + index] = (day) => {
          if (dateRange[index]?.startDate && dateRange[index]?.endDate) {
            if (
              DateUtils.isDayBetween(
                day,
                new Date(dateRange[index].startDate),
                new Date(dateRange[index].endDate)
              ) ||
              DateUtils.isSameDay(day, new Date(dateRange[index].startDate)) ||
              DateUtils.isSameDay(day, new Date(dateRange[index].endDate))
            ) {
              if (
                day.getDay() == 1 &&
                !dateRange[index]["days"].includes("Monday")
              ) {
                return true;
              }
              if (
                day.getDay() == 2 &&
                !dateRange[index]["days"].includes("Tuesday")
              ) {
                return true;
              }
              if (
                day.getDay() == 3 &&
                !dateRange[index]["days"].includes("Wednesday")
              ) {
                return true;
              }
              if (
                day.getDay() == 4 &&
                !dateRange[index]["days"].includes("Thursday")
              ) {
                return true;
              }
              if (
                day.getDay() == 5 &&
                !dateRange[index]["days"].includes("Friday")
              ) {
                return true;
              }
              if (
                day.getDay() == 6 &&
                !dateRange[index]["days"].includes("Saturday")
              ) {
                return true;
              }
              if (
                day.getDay() == 0 &&
                !dateRange[index]["days"].includes("Sunday")
              ) {
                return true;
              }
            }
          }
        };
      }
    }
    return modifier;
  };

  const getModifierStyle = () => {
    let modifierStyle = {};
    for (let index = 0; index < dateRange?.length; index++) {
      let payload = { backgroundColor: dateRange[index]?.color };

      modifierStyle["R" + index] = payload;
      modifierStyle["D" + index] = { backgroundColor: "lightGray" };
    }
    return modifierStyle;
  };
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
