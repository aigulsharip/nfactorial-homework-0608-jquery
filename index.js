$(document).ready(function() {
    $('button').on('click', function() {
        const fname = $('#fname').val()
        const lname= $('#lname').val()
        const adverb = $('#adverb').val()
        const adjective = $('#adjective').val()

        console.log(fname);
        let textToAdd = "One day, my friend" + fname + " was visiting New York and ran into " + lname + ". " + fname + " ran " + adverb + " to meet " + lname + ". But " + fname + " turned out to be " + adjective + " and " + lname + " did not enjoy the meeting ";
        console.log(textToAdd);
                   
        $('.result').text(textToAdd);
    
    
    



        
    })        

    })
    
    
    
    
   

