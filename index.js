const mainCanvas = document.querySelector("canvas")
const ctx = mainCanvas.getContext("2d")
ctx.fillStyle = "black"
const dotCount = prompt("ile kropek")
let dots = [], mainDot1, mainDot2;
function drawDots(ctx, dotCount)
{
    for(i = 0; i < dotCount; i++)
    {
        x = Math.floor(Math.random() * 798) + 1;
        y = Math.floor(Math.random() * 798) + 1;
        dots[i] = ctx.fillRect(x, y, 3, 3);
    }

    //wybieranie 2 kropek
    mainDot1 = dots[Math.floor(Math.random() * dotCount)]
    mainDot2 = dots[Math.floor(Math.random() * dotCount)]
}


drawDots(ctx, dotCount)