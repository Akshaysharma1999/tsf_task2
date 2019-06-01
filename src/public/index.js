$(() => {
    let plus = $('#plus')
    let minus = $('#minus')
    let quantity = parseInt($('#quantity').val())
    let total = $('#total')
    let credits = parseInt($('#credits').val())
   
    plus.click(() => {
        console.log("clicked")
        quantity += 1
        $('#quantity').val(quantity)

        console.log(quantity)
        console.log(credits)
        if(quantity>credits)
        {
            total.text(credits)
            quantity = credits
            $('#quantity').val(credits)    
        }
        else{
            total.text(quantity)
        }
       
       
    })

    minus.click(() => {
        console.log("clicked")
        quantity -= 1
        $('#quantity').val(quantity)
        console.log(quantity)
        if (quantity < 1) {
            total.text(1)
            quantity = 1
            $('#quantity').val(1)           
        }
        else {
            total.text(quantity)
        }
       
    })

})