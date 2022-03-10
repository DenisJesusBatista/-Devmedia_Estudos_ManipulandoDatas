const dtInicio = new Date("2020-12-01");
console.log(dtInicio.toString());

const data = new Date(2020, 5, 5, 10, 20, 15);
console.log(data.toTimeStamp());

const dataFim = new Date("UTC");
console.log(dataFim.toBRDate());

const hoje = new Date();
hoje.setYearFull("2020-12-01");

console.log(hoje.toString());