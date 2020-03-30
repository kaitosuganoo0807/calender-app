import dayjs from "dayjs";

export const createCalendar = month => {

  const firstDay = getMonth(month);

  const firstDayIndex = firstDay.day();

  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");

      return day;
    });
};

export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};

export const getNextMonth = month => {
  const day = getMonth(month).add(1, "month");
  return formatMonth(day);
};

export const getPreviousMonth = month => {
  const day = gatMonth(month).add(-1, "month");
  return formatMonth(day);
};

export const formatMonth = day => ({
  month: day.month() + 1,
  year: day.year()
});