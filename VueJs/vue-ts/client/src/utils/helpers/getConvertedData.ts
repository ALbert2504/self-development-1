import moment from "moment";

const giveConvertedDate = (date: string): string => {
  return moment(date).format('DD-MM-YYYY HH:mm');
};

export default giveConvertedDate;