export default function calculateTimeDifference(
  startTime: string,
  endTime: string
): string {
  // Validate time format (HHH:MM)
  const isValidTime = (time: string): boolean => {
    return /^\d{3}:\d{2}$/.test(time);
  };

  // Convert time string into total minutes
  const convertToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  // Convert total minutes back to HHH:MM format
  const convertToTimeFormat = (totalMinutes: number): string => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${String(hours).padStart(3, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
  };

  // Check if start and end times are valid
  if (!isValidTime(startTime) || !isValidTime(endTime)) {
    // Return a placeholder or empty string if invalid
    return "";
  }

  const startTimeInMinutes = convertToMinutes(startTime);
  const endTimeInMinutes = convertToMinutes(endTime);

  // Calculate the difference
  const differenceInMinutes = endTimeInMinutes - startTimeInMinutes;

  return convertToTimeFormat(differenceInMinutes);
}
