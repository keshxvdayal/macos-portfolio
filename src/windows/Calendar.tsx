import { WindowControls } from "@components/index";
import WindowWrapper from "@hoc/WindowWrapper";
import dayjs from "dayjs";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const calendarDays = useMemo(() => {
    const startOfMonth = currentDate.startOf("month");
    const startDay = startOfMonth.day();
    const daysInMonth = currentDate.daysInMonth();
    const prevMonthDays = startOfMonth.subtract(1, "month").daysInMonth();

    const cells: Array<{ day: number; currentMonth: boolean }> = [];

    for (let i = startDay - 1; i >= 0; i -= 1) {
      cells.push({ day: prevMonthDays - i, currentMonth: false });
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      cells.push({ day, currentMonth: true });
    }

    while (cells.length % 7 !== 0) {
      const nextDay = cells.length - daysInMonth - startDay + 1;
      cells.push({ day: nextDay, currentMonth: false });
    }

    return cells;
  }, [currentDate]);

  const changeMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => prev.add(direction === "next" ? 1 : -1, "month"));
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="calendar" />
        <div className="flex items-center gap-2">
          <CalendarDays className="icon" />
          <h2 className="font-semibold text-sm text-gray-700">Calendar</h2>
        </div>
        <div className="flex items-center gap-1">
          <button type="button" onClick={() => changeMonth("prev")} className="icon">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button type="button" onClick={() => changeMonth("next")} className="icon">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="calendar-body">
        <div className="calendar-header">
          <h3>{currentDate.format("MMMM YYYY")}</h3>
          <p>{currentDate.format("dddd, MMM D")}</p>
        </div>

        <div className="calendar-grid">
          {days.map((day) => (
            <div key={day} className="calendar-day-label">
              {day}
            </div>
          ))}
          {calendarDays.map((cell, index) => {
            const isToday =
              cell.currentMonth &&
              cell.day === dayjs().date() &&
              currentDate.month() === dayjs().month() &&
              currentDate.year() === dayjs().year();

            return (
              <div
                key={`${cell.day}-${index}`}
                className={`calendar-cell ${cell.currentMonth ? "current" : "muted"} ${isToday ? "today" : ""}`}
              >
                {cell.day}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const CalendarWindow = WindowWrapper(Calendar, "calendar");

export default CalendarWindow;
