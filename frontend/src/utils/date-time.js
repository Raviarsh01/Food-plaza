export function extractDate(value) {
  if (!value) return "";

  const [year, month, day] = value.split("T")[0].split("-");

  const monthNames = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  return `${day} ${monthNames[month]} ${year}`;
}
