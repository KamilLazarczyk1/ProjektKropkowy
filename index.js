const mainCanvas = document.querySelector("canvas")
const ctx = mainCanvas.getContext("2d")
const dotCount = prompt("ile kropek")
const dotWidth = 5, dotHeight = 5
let dots = [], mainDot1, mainDot2
function drawDots(ctx, dotCount)
{
    ctx.fillStyle = "black"
    for(i = 0; i < dotCount; i++)
    {
        x = Math.floor(Math.random() * 758) + 20;
        y = Math.floor(Math.random() * 758) + 20;
        ctx.fillRect(x, y, dotWidth, dotHeight);
        dots[i] = {x: x, y: y};
    }

    //wybieranie 2 kropek
    ctx.fillStyle = "red"
    mainDot1 = dots[Math.floor(Math.random() * dotCount)]
    console.log(dots)
    do {
        mainDot2 = dots[Math.floor(Math.random() * dotCount)]
    } while(mainDot1 == mainDot2)
    ctx.fillRect(mainDot1.x, mainDot1.y, dotWidth, dotHeight);
    ctx.fillRect(mainDot2.x, mainDot2.y, dotWidth, dotHeight);
}


drawDots(ctx, dotCount)