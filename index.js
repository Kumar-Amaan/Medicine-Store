const table = [
  {
    name: "Benzoyl Peroxide",
    mfg: "2013",
    exp: "2020",
  },
  {
    name: "SMagnesium Sulfate",
    mfg: "2016",
    exp: "2019",
  },
  {
    name: "Macrobid",
    mfg: "2016",
    exp: "2018",
  },
  {
    name: "AAceon",
    mfg: "2019",
    exp: "2021",
  },
  {
    name: "Abacavir Sulfate",
    mfg: "2014",                                         
    exp: "2018",
  },
  {
    name: "Yellow Fever Vaccine",
    mfg: "2017",
    exp: "2020",
  },
  {
    name: "Yasmin",
    mfg: "2011",
    exp: "2015",
  },
  {
    name: "Yaz",
    mfg: "2020",
    exp: "2022",
  },
];

const tableHeader = Object.keys(table[0]);
const search = document.querySelector(".filter-input");
const output = document.querySelector(".output");

window.addEventListener("DOMContentLoaded", loadTable);
search.addEventListener("input", filter);

function loadTable() {
  let temp = `<table> <tr>`;
  tableHeader.forEach(
    (header) => (temp += `<th> ${header.toUpperCase()} </th>`)
  );
  temp += `<tr>`;
  table.forEach((row) => {
    temp += `
      <tr>
        <td>${row.name}</td>
        <td>${row.mfg}</td>
        <td>${row.exp}</td>
      </tr>
      `;
  });

  temp += `</table>`;
  output.innerHTML = temp;
}

function filter(e) {
  let results;
  let temp = "";

  results = table.filter(
    (item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      item.mfg.toLowerCase().includes(e.target.value.toLowerCase()) ||
      item.exp.toLowerCase().includes(e.target.value.toLowerCase())
  );
  console.log(results);
  if (results.length > 0) {
    temp = `<table> <tr>`;
    tableHeader.forEach(
      (header) => (temp += `<th> ${header.toUpperCase()} </th>`)
    );
    temp += `<tr>`;
    results.forEach((row) => {
      temp += `
          <tr>
            <td>${row.name}</td>
            <td>${row.mfg}</td>
            <td>${row.exp}</td>
          </tr>
          `;
    });
    temp += `</table>`;
  } else {
    temp = `<div class="no-item">Item Not Found </div>`;
  }

  output.innerHTML = temp;
}
