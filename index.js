const mainCanvas = document.querySelector("canvas")
const ctx = mainCanvas.getContext("2d")
let dots = [], selectedDots = [], wayFound = false, dotCount, mainDot1, mainDot2
do {
    dotCount = parseInt(prompt("ile kropek"))
} while (dotCount < 2)
const dotWidth = 5, dotHeight = 5
ctx.lineWidth = 2;
function drawDots(ctx, dotCount) {
    ctx.fillStyle = "black"
    for (i = 0; i < dotCount; i++) {
        x = Math.floor(Math.random() * 758) + 20;
        y = Math.floor(Math.random() * 758) + 20;
        ctx.fillRect(x, y, dotWidth, dotHeight);
        dots[i] = { x: x, y: y };
    }

    //wybieranie 2 kropek
    mainDot1 = dots[Math.floor(Math.random() * dotCount)]
    console.log(dots)
    do {
        mainDot2 = dots[Math.floor(Math.random() * dotCount)]
    } while (mainDot1.x == mainDot2.x && mainDot1.y == mainDot2.y)
    ctx.fillStyle = "orange"
    ctx.fillRect(mainDot1.x, mainDot1.y, dotWidth, dotHeight);
    ctx.fillStyle = "red"
    ctx.fillRect(mainDot2.x, mainDot2.y, dotWidth, dotHeight);
}

function findDotsInBetween(dot1, dot2, cDots) {
    let newDots = [];
    ctx.fillStyle = "pink"
    const XS = (dot1.x + dot2.x) / 2;
    const YS = (dot1.y + dot2.y) / 2;
    const radius = Math.sqrt(Math.pow((XS - dot1.x), 2) + Math.pow((YS - dot1.y), 2))
    // ctx.beginPath();
    // ctx.arc(XS, YS, radius, 0, 2 * Math.PI, false);
    // ctx.lineWidth = 3; // This will make the circle "empty" inside
    // ctx.strokeStyle = '#003300'; // Color of the circle
    // ctx.stroke();
    cDots.forEach(el => {
        const distanceElToCenter = Math.sqrt(Math.pow((XS - el.x), 2) + Math.pow((YS - el.y), 2))
        if (distanceElToCenter < radius) {
            newDots.push({ x: el.x, y: el.y })
            ctx.fillRect(el.x, el.y, dotWidth, dotHeight);
        }
    });
    return newDots;
}
function findTheWay() {
    let firstDot = { x: mainDot1.x, y: mainDot1.y }, closestDot = { x: mainDot2.x, y: mainDot2.y }
    selectedDots = findDotsInBetween(mainDot1, mainDot2, dots)
    do {
        console.log("dowhile" + selectedDots)
        selectedDots.forEach(el => {
            const distElToFirst = Math.sqrt(Math.pow((el.x - firstDot.x), 2) + Math.pow((el.y - firstDot.y), 2))
            const distFirstToClosest = Math.sqrt(Math.pow((closestDot.x - firstDot.x), 2) + Math.pow((closestDot.y - firstDot.y), 2))
            if (distElToFirst < distFirstToClosest) {
                closestDot = { x: el.x, y: el.y }
            }
            console.log(closestDot)
        });
        ctx.fillStyle = "white"
        ctx.beginPath();
        ctx.moveTo(firstDot.x, firstDot.y);
        ctx.lineTo(closestDot.x, closestDot.y);
        ctx.stroke();
        if (closestDot.x != mainDot2.x && closestDot.y != mainDot2.y) {
            ctx.fillStyle = "green"
            ctx.fillRect(closestDot.x, closestDot.y, dotWidth, dotHeight);
        } else {
            wayFound = true;
        }
        selectedDots = findDotsInBetween(closestDot, mainDot2, selectedDots)
        firstDot = { x: closestDot.x, y: closestDot.y }, closestDot = { x: mainDot2.x, y: mainDot2.y }
    } while (wayFound == false && selectedDots.length > 0);
    ctx.fillStyle = "white"
    ctx.beginPath();
    ctx.moveTo(firstDot.x, firstDot.y);
    ctx.lineTo(mainDot2.x, mainDot2.y);
    ctx.stroke();
}

drawDots(ctx, dotCount)
findTheWay()