function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    notification.style.opacity = 1;

    setTimeout(() => {
        notification.style.opacity = 0;
        setTimeout(() => {
            notification.style.display = 'none';
        }, 500);
    }, 3000);
}

$(document).on("change", 'input[name="form:r"]', function() {
    processPoints();
});

function processPoints() {
    const r = $('input[name="form:r"]:checked').val();

    $("#graph circle").remove();

    const rows = document.querySelectorAll("#form\\:table tbody tr");
    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        drawPoint(+cells[0].innerText, +cells[1].innerText, r, cells[3].innerText === "Да");
    });
}

function drawPoint(x, y, r, result) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", 150 + (x / r) * 100);
    circle.setAttribute("cy", 150 - (y / r) * 100);
    circle.setAttribute("r", 4);

    circle.style.stroke = "black";
    circle.style["stroke-width"] = "1px";
    circle.style.fill = result? "#a9c2a9" : "#e1aca8";

    $("#graph").append(circle);
}

function checkData(x, y, r) {
    let resp = {
        isValid: true,
        reason: "valid данные"
    }

    if (isNaN(+x) || isNaN(+y) || isNaN(+r)) {
        resp.isValid = false;
        resp.reason = "don't valid данные"
    }

    if (+x < -3) {
        resp.isValid = false;
        resp.reason = "eblanchek ot -3 do 3 (y=" + +x + ")";
    }

    if (+x > 3) {
        resp.isValid = false;
        resp.reason = "eblanchek ot -3 do 3 (y=" + +x + ")";
    }

    return resp;
}

function validateForm() {
    let x = document.getElementById("form:x_input").value;
    let y = document.getElementById("form:y").value;
    let r = $('input[name="form:r"]:checked').val();

    let result = checkData(x, y, r)
    if (!result.isValid) {
        showNotification(result.reason);
        return false;
    }

    return true;
}

$(document).on("click", "#graph", function(e) {
    let rValue = $('input[name="form:r"]:checked').val();

    if (rValue == null) {
        showNotification("Тыкни R");
        return;
    }

    let calculatedX = (e.pageX - $(this).offset().left - $(this).width() / 2) / 100 * rValue;
    let calculatedY = ($(this).height() / 2 - (e.pageY - $(this).offset().top)) / 100 * rValue;

    let result = checkData(calculatedX, calculatedY, rValue)
    if (!result.isValid) {
        showNotification(result.reason);
        return;
    }

    document.getElementById("checkForm:hiddenX").value = calculatedX;
    document.getElementById("checkForm:hiddenY").value = calculatedY;
    document.getElementById("checkForm:hiddenR").value = rValue;

    document.getElementById("checkForm:checkButton").click();
});