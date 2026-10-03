//console.log(body.document)

/*  let colorsArray = ['red','yello','blue','pink','green','gray']
let randomColorIndex

setInterval(function(){
    randomColorIndex = Math.floor(Math.random() * colorsArray.length)
    document.body.style.background = colorsArray[randomColorIndex]
},2000) */

//////////////////////Second WAY//////////////////////////

let redValue , greenValue , blueValue 

setInterval(function (){
    redValue = Math.floor(Math.random() * 255)
    greenValue = Math.floor(Math.random() * 255)
    blueValue = Math.floor(Math.random() * 255)

    console.log('rgb('+ redValue + '.' + greenValue + '.' + blueValue + ')')

    document.body.style.backgroundColor = 'rgb('+ redValue + ',' + greenValue + ',' + blueValue + ')'
},2000)

