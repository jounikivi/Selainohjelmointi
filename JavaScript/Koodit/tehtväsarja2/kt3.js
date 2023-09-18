const convertToMinutesFormat = (hoursInHundredths ) => {

  //let hoursInMinutes;

  const Hours = String(hoursInHundredths).substring(
    0, hoursInHundredths.indexof(" ,"))

    return Hours;
};