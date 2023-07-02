const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (d: any) => {
  const date = new Date(d);

  const tgl = date.getDate();
  const month = monthNames.filter(
    (data, index) => (index = date.getMonth())
  )[0];
  const year = date.getFullYear();

  return `${tgl} ${month} ${year}`;
};

export default formatDate;
