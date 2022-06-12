$(document).ready(function (){
    $('button').on('click', function() {
        const width = $('#width').val()
        const height = $('#height').val()
        const color = $('#color').val()

        console.log(width)
        console.log(height)
        console.log(color)

        let fileSize = width * height / color / 1000

        console.log(fileSize)
        
        let textToAdd = "File is " + Math.round(fileSize) + " kb,"
        if (fileSize < 10){
            textToAdd += " which is ok"
        } else{
            textToAdd += " which is not ok. Please compress your file"
        }

        $('.result').text(textToAdd);
    
 
        
    })
})


   

