// function showNotification(message) {
//     const notification = document.getElementById('notification');
//     notification.textContent = message;
//     notification.style.display = 'block';
//     notification.style.opacity = 1;
//
//     setTimeout(() => {
//         notification.style.opacity = 0;
//         setTimeout(() => {
//             notification.style.display = 'none';
//         }, 500);
//     }, 3000);
// }
//
// document.addEventListener("DOMContentLoaded", function () {
//     const graphElement = document.getElementById("graph");
//     const formId = "mainForm";
//
//     document.querySelectorAll(`input[name="${formId}:rval"]`).forEach(input => {
//         input.addEventListener("change", () => {
//             processPoints();
//         });
//     });
//
//     graphElement.addEventListener("click", function (e) {
//         const rValue = document.querySelector(`input[name="${formId}:rval"]:checked`)?.value;
//
//         if (!rValue) {
//             showNotification("Тыкни в R пж");
//             return;
//         }
//
//         const boundingRect = graphElement.getBoundingClientRect();
//         const calculatedX = ((e.clientX - boundingRect.left - graphElement.clientWidth / 2) / 135) * rValue;
//         const calculatedY = ((graphElement.clientHeight / 2 - (e.clientY - boundingRect.top)) / 135) * rValue;
//
//         const validationResult = checkData(calculatedX, calculatedY, rValue);
//         if (!validationResult.isValid) {
//             showNotification(validationResult.reason);
//             return;
//         }
//
//         document.getElementById(`${formId}:hiddenX`).value = calculatedX.toFixed(2);
//         document.getElementById(`${formId}:hiddenY`).value = calculatedY.toFixed(2);
//         document.getElementById(`${formId}:hiddenR`).value = rValue;
//
//         jsf.ajax.request(document.getElementById(`${formId}:checkButton`), null, {
//             execute: `${formId}`,
//             render: `${formId} :form:table`,
//         });
//     });
//
//     function processPoints() {
//         const r = document.querySelector(`input[name="${formId}:rval"]:checked`)?.value;
//         if (!r) return;
//
//         // Очистка текущих точек на графике
//         while (graphElement.querySelector("circle")) {
//             graphElement.querySelector("circle").remove();
//         }
//
//
//         const rows = document.querySelectorAll(`#${formId}\\:result-table tr`);
//         rows.forEach(row => {
//             const cells = row.querySelectorAll("td");
//             const x = parseFloat(cells[0].textContent);
//             const y = parseFloat(cells[1].textContent);
//             const isHit = cells[3].textContent.trim() === "true";
//
//             drawPoint(x, y, r, isHit);
//         });
//     }
//
//
//     function drawPoint(x, y, r, isHit) {
//         const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//         circle.setAttribute("cx", 150 + (y / r) * 100);
//         circle.setAttribute("cy", 150 - (y / r) * 100);
//         circle.setAttribute("r", 4);
//
//         circle.style.stroke = "black";
//         circle.style["stroke-width"] = "1px";
//         circle.style.fill = isHit ? "#9fcc9f" : "#be908d";
//
//         graphElement.appendChild(circle);
//     }
//
//     // Проверка данных
//     function checkData(x, y, r) {
//         let resp = { isValid: true, reason: "Корректные данные" };
//
//         if (isNaN(x) || isNaN(y) || isNaN(r)) {
//             resp.isValid = false;
//             resp.reason = "Kringe, протыкай все пожалуйста или исправь хз";
//         }
//
//         if (y < -2 || y > 2) {
//             resp.isValid = false;
//             resp.reason = `eblanchek ot -2 do 2 (y=${y})`;
//         }
//
//         return resp;
//     }
//
//     document.getElementById("checkForm:checkButton").click();
// });
