function timeConversion(s: string): string {
  const [hr, min, secAmPm] = s.split(":");
  const sec = secAmPm.slice(0, -2);
  const amPm = secAmPm.slice(-2);
  let [h, m, _s] = [hr, min, sec].map((elem) => Number(elem));

  if (h === 12 && amPm.toLowerCase() === "pm") return `${hr}:${min}:${sec}`;
  else if (h < 12 && amPm.toLowerCase() === "am") return `${hr}:${min}:${sec}`;

  const str_h = String((h + 12) % 24).padStart(2, "0");

  return `${str_h}:${min}:${sec}`;
}

console.log(timeConversion("12:01:00PM"));

export { timeConversion };
