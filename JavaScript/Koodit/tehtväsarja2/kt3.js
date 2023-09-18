const convertToMinutesFormat = (hoursInHundredths ) => {

  //let hoursInMinutes;

  const Hours = String(hoursInHundredths).substring(
    0, String(hoursInHundredths).indexOF("."))

    return Hours;
};