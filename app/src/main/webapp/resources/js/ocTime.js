function displayCanvas() {
    const canvasHTML = document.getElementById('clock');
    const contextHTML = canvasHTML.getContext('2d');

    const radiusClock = canvasHTML.width / 2 - 5;
    const xCenterClock = canvasHTML.width / 2;
    const yCenterClock = canvasHTML.height / 2;

    contextHTML.clearRect(0, 0, canvasHTML.width, canvasHTML.height);
    contextHTML.fillStyle = "rgba(255, 255, 255, 0.2)"; // Прозрачный белый фон
    contextHTML.fillRect(0, 0, canvasHTML.width, canvasHTML.height);
    contextHTML.strokeStyle = "#000000";
    contextHTML.lineWidth = 3;
    contextHTML.beginPath();
    contextHTML.arc(xCenterClock, yCenterClock, radiusClock, 0, 2 * Math.PI, true);
    contextHTML.stroke();

    for (let tm = 0; tm < 60; tm++) {
        contextHTML.beginPath();
        let radiusPoint = tm % 5 === 0 ? 6 : 3;
        const xPointM = xCenterClock + (radiusClock - 10) * Math.cos(-6 * tm * (Math.PI / 180) + Math.PI / 2);
        const yPointM = yCenterClock - (radiusClock - 10) * Math.sin(-6 * tm * (Math.PI / 180) + Math.PI / 2);
        contextHTML.arc(xPointM, yPointM, radiusPoint, 0, 2 * Math.PI, true);
        contextHTML.fillStyle = "#000000";
        contextHTML.fill();
    }

    contextHTML.fillStyle = "#000000";
    contextHTML.font = "18px sans-serif";
    for (let th = 1; th <= 12; th++) {
        const xText = xCenterClock + (radiusClock - 30) * Math.cos(-30 * th * (Math.PI / 180) + Math.PI / 2);
        const yText = yCenterClock - (radiusClock - 30) * Math.sin(-30 * th * (Math.PI / 180) + Math.PI / 2);
        contextHTML.fillText(th.toString(), xText - (th < 10 ? 5 : 10), yText + 5);
    }

    const d = new Date();
    const lengthSeconds = radiusClock - 15;
    const lengthMinutes = radiusClock - 25;
    const lengthHour = radiusClock - 35;
    const t_sec = 6 * d.getSeconds();
    const t_min = 6 * (d.getMinutes() + (1 / 60) * d.getSeconds());
    const t_hour = 30 * (d.getHours() % 12 + (1 / 60) * d.getMinutes());

    contextHTML.beginPath();
    contextHTML.strokeStyle = "#ff0100";
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(
        xCenterClock + lengthSeconds * Math.cos(Math.PI / 2 - t_sec * (Math.PI / 180)),
        yCenterClock - lengthSeconds * Math.sin(Math.PI / 2 - t_sec * (Math.PI / 180))
    );
    contextHTML.stroke();

    contextHTML.beginPath();
    contextHTML.strokeStyle = "#000000";
    contextHTML.lineWidth = 4;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(
        xCenterClock + lengthMinutes * Math.cos(Math.PI / 2 - t_min * (Math.PI / 180)),
        yCenterClock - lengthMinutes * Math.sin(Math.PI / 2 - t_min * (Math.PI / 180))
    );
    contextHTML.stroke();

    contextHTML.beginPath();
    contextHTML.strokeStyle = "#000000";
    contextHTML.lineWidth = 6;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(
        xCenterClock + lengthHour * Math.cos(Math.PI / 2 - t_hour * (Math.PI / 180)),
        yCenterClock - lengthHour * Math.sin(Math.PI / 2 - t_hour * (Math.PI / 180))
    );
    contextHTML.stroke();

    contextHTML.beginPath();
    contextHTML.fillStyle = "#000000"; // Центр (серый)
    contextHTML.arc(xCenterClock, yCenterClock, 5, 0, 2 * Math.PI, true);
    contextHTML.fill();
}

setInterval(displayCanvas, 1000);
