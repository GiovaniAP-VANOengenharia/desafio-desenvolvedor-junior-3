

export default (dateNow: Date, updateDate: Date) => {
  let word = '';

  if((dateNow.getFullYear() - updateDate.getFullYear()) >= 1) {
    if((dateNow.getFullYear() - updateDate.getFullYear()) === 1) {
      word = 'ano';
    } else { word = 'anos' }

    return `${dateNow.getFullYear() - updateDate.getFullYear()} ${word}`;
  }

  if((dateNow.getMonth() - updateDate.getMonth()) >= 1) {
    if((dateNow.getMonth() - updateDate.getMonth()) === 1) {
      word = 'mês';
    } else { word = 'meses' }

    return `${dateNow.getMonth() - updateDate.getMonth()} ${word}`;
  }

  if((dateNow.getDay() - updateDate.getDay()) >= 1) {
    if((dateNow.getDay() - updateDate.getDay()) === 1) {
      word = 'dia';
    } else { word = 'dias' }

    return `${dateNow.getDay() - updateDate.getDay()} ${word}`;
  }
};