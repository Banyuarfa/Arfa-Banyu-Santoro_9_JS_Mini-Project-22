const input = document.querySelector("textarea");
const button = document.querySelector("button");
const table = document.querySelector("table");

button.addEventListener("click", () => {
  table.innerHTML = "";
  table.border = 1;

  const texts = input.value.split(",");

  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");
  const td = document.createElement("td");

  thead.align = "center";
  tbody.align = "center";

  td.textContent = "Trayek";
  table.appendChild(thead).appendChild(tr).appendChild(td);

  texts.forEach((text) => {
    const baru = text.trim().replaceAll(" ", " - ");
    const tr = document.createElement("tr");
    const td = document.createElement("td");

    td.textContent = baru;
    tbody.appendChild(tr).appendChild(td);
  });
  table.appendChild(tbody);
});
