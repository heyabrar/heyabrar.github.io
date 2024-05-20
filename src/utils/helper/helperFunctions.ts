const defaultProfile = (firstName?: string, lastName?: string) => {
  if (firstName && lastName) {
    return `https://ui-avatars.com/api/name=${firstName}%20${lastName}?background=random`;
  }
  return `https://ui-avatars.com/api/name=${firstName}?background=random`;
};

const handleScrollTo = (ref: any) => {
  window.scrollTo({
    top: ref?.current?.offsetTop,
    behavior: "smooth",
  });
};

function handleCalculateDateDifference({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate?: string;
}) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  if (start > end) {
    throw new Error("Start date must be before end date");
  }

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  let result = "";
  if (years > 0) result += `${years} year${years > 1 ? "s" : ""} `;
  if (months > 0) result += `${months} month${months > 1 ? "s" : ""} `;

  return result.trim() || "0 months";
}

export { defaultProfile, handleScrollTo, handleCalculateDateDifference };
