import moment from "moment";

export const formattedTimefromNow = (inputTime: string): string => {
  const timestampMoment = moment(inputTime);

  const currentTime = moment();

  const daysAgo = currentTime.diff(timestampMoment, "days");
  console.log(daysAgo);
  let formattedTime: string;

  if (daysAgo === 0) {
    formattedTime = "today";
  } else if (
    daysAgo === 1 ||
    (daysAgo === 0 && currentTime.isBefore(timestampMoment, "day"))
  ) {
    formattedTime = "yesterday";
  } else {
    formattedTime = timestampMoment.format("DD MMM");
  }
  return formattedTime;
};
