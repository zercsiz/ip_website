const dayInputs = document.querySelectorAll('.days-number');


dayInputs.forEach(input => {
    input.addEventListener('input', function() {

        const item = input.closest('.car');
        const price = parseFloat(item.querySelector('.price-value').textContent);
        const days = parseInt(input.value);
        
        const total = price * days;

        if(Number.isNaN(total)){
            item.querySelector('.total').textContent = "0";
        }else{
            item.querySelector('.total').textContent = total.toFixed(2);
        }
        
        let sTotal = 0
        const totalValues = document.querySelectorAll('.total');
        for (let i = 0; i < totalValues.length; i++) {
            sTotal += parseInt(totalValues[i].textContent);
        }

        const subTotal = document.querySelector('.sub-total');
        subTotal.textContent = sTotal.toFixed(2);

        const totalVat = document.querySelector('.total-vat');
        let tVat = sTotal + (sTotal*15/100);
        totalVat.textContent = tVat.toFixed(2);

    });
});