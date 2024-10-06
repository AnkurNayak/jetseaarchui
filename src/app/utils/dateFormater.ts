interface DateStructure {
  date: string;
  day: string;
  month: string;
  year: number;
  time: string;
}

export function convertTimestampToDate(
  timestamp: number,
  locale: string = "en-US"
): DateStructure {
  const inputDate = new Date(timestamp);

  const optionsDate: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    year: "2-digit",
    month: "short",
    weekday: "long",
  };
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const formattedDate = inputDate.toLocaleDateString(locale, optionsDate);
  const formattedTime = inputDate.toLocaleTimeString(locale, optionsTime);

  const parts = formattedDate.split(", ");
  const dayOfWeek = parts[0];
  const [month, day] = parts[1].split(" ");
  const year = parts[2];

  return {
    date: day,
    day: dayOfWeek.toLowerCase(),
    month: month.toLowerCase(),
    year: parseInt(year),
    time: formattedTime,
  };
}
