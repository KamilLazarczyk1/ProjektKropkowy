const mainCanvas = document.querySelector("canvas")
const ctx = mainCanvas.getContext("2d")
ctx.fillStyle = "black"
const dotCount = prompt("ile kropek")
let dots = [];
function drawDots(ctx, dotCount)
{
    for(i = 0; i < dotCount; i++)
    {
        x = Math.floor(Math.random() * 798) + 1;
        y = Math.floor(Math.random() * 798) + 1;
        dots[i] = ctx.fillRect(x, y, 3, 3);
    }
}

drawDots(ctx, dotCount)