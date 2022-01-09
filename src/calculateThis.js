const calculateThis = (task) => {
    const numberWithCommas = (x) => {
        return x.replace(/(?<!\..*)\B(?=(\d{3})+(?!\d))/g, ",");
    }    

    // Grabbing Outputs on the Screen
    let output = document.querySelector('.CalculatorApp .output');
    let mockery = document.querySelector('.CalculatorApp .mockery');

    // Grabbing screen for responsiveness
    const screen = document.querySelector('.CalculatorApp .screen');

    // Setting up the calculator variables
    let storedValue;
    let readyForNewNumber = document.querySelector('.CalculatorApp #readyNew');
    if (mockery.innerText){storedValue = parseFloat(mockery.innerText.match(/^\-(?=\d)|[\d\.]|e\+|Infinity/g).join(''));}

    // Setting up the screen output variable
    let outputArray = output.innerText.match(/^\-(?=\d)|[\d\.]|e\+|Infinity/g);
    if (!outputArray){outputArray = []}

    // Calculation
    const evaluate = () => {
        const A = storedValue;
        const B = parseFloat(outputArray.join(''));
        const operation = mockery.innerText[mockery.innerText.length -1];
        
        console.log(A,operation,B);

        if (operation === '+'){
            return A+B;
        } else if (operation === '-'){
            return A-B;
        } else if (operation === 'x'){
            return A*B;
        } else if (operation === '/'){
            return A/B;
        }
    }

    // Creating a function to tell wether a new number will replace the 
    // output on the screen
    const readyNew = (bool) => {
        if (bool){
            readyForNewNumber.className = 'true';
        } else {
            readyForNewNumber.className = 'false';
        }
    }

    
    if(task==='RESET'){
        output.innerText = "";
        return mockery.innerText = "";
    } else if (task === 'DEL'){
        if (readyForNewNumber.className === 'true'){ outputArray = []; } 
        else { outputArray.pop(); }
        output.innerText = numberWithCommas(outputArray.join(''));
    } else if (task === 'DECIMAL'){
        if(!/\./.test(outputArray.join(''))){
            outputArray.push('.');
            output.innerText = numberWithCommas(outputArray.join(''));
        }
    } else if (task === 'EQUATE'){
        readyForNewNumber.className = 'true';
        if (!output.innerText && mockery.innerText){
            mockery.innerText = '';
            output.innerText = numberWithCommas(String(storedValue));
        } else if (output.innerText && mockery.innerText){
            const answer = evaluate();
            mockery.innerText = '';
            output.innerText = numberWithCommas(String(answer));
        }
    } else if(typeof task === 'string'){
        if(task === 'ADD'){
            readyForNewNumber.className = 'true';
            if(output.innerText && !mockery.innerText){
                mockery.innerText = numberWithCommas(String(parseFloat(outputArray.join('')))) + " +";
                output.innerText = '';
            } else if(!output.innerText && mockery.innerText){
                const mockeryArray = mockery.innerText.match(/./g);
                mockeryArray[mockeryArray.length-1] = '+'
                mockery.innerText = mockeryArray.join('');
            } else if(!output.innerText && !mockery.innerText){
            } else {
                const answer = evaluate();
                mockery.innerText = numberWithCommas(String(answer)) + " +";
            }
        } else if(task === 'SUBTRACT'){
            readyForNewNumber.className = 'true';
            if(output.innerText && !mockery.innerText){
                storedValue = parseFloat(outputArray.join(''));
                mockery.innerText = numberWithCommas(String(parseFloat(outputArray.join('')))) + " -";
                output.innerText = '';
            } else if(!output.innerText && mockery.innerText){
                const mockeryArray = mockery.innerText.match(/./g);
                mockeryArray[mockeryArray.length-1] = '-'
                mockery.innerText = mockeryArray.join('');
            } else if(!output.innerText && !mockery.innerText){
            } else {
                const answer = evaluate();
                mockery.innerText = numberWithCommas(String(answer)) + " -";
            }
        } else if(task === 'MULTIPLY'){
            readyForNewNumber.className = 'true';
            if(output.innerText && !mockery.innerText){
                mockery.innerText = numberWithCommas(String(parseFloat(outputArray.join('')))) + " x";
                output.innerText = '';
            } else if(!output.innerText && mockery.innerText){
                const mockeryArray = mockery.innerText.match(/./g);
                mockeryArray[mockeryArray.length-1] = 'x'
                mockery.innerText = mockeryArray.join('');
            } else if(!output.innerText && !mockery.innerText){
            } else {
                const answer = evaluate();
                mockery.innerText = numberWithCommas(String(answer)) + " x";
            }
        } else if(task === 'DIVIDE'){
            readyForNewNumber.className = 'true';
            if(output.innerText && !mockery.innerText){
                mockery.innerText = numberWithCommas(String(parseFloat(outputArray.join('')))) + " /";
                output.innerText = '';
            } else if(!output.innerText && mockery.innerText){
                const mockeryArray = mockery.innerText.match(/./g);
                mockeryArray[mockeryArray.length-1] = '/'
                mockery.innerText = mockeryArray.join('');
            } else if(!output.innerText && !mockery.innerText){
            } else {
                const answer = evaluate();
                mockery.innerText = numberWithCommas(String(answer)) + " /";
            }
        } 
    }else {
        if (output.style.fontSize === '10px' && output.clientWidth>screen.clientWidth-50){
            return;
        }
        if (readyForNewNumber.className === 'true' || output.innerText==='0'){
            outputArray = [];
        } 
        outputArray.push(task.toString());
        output.innerText = numberWithCommas(outputArray.join(''));
        readyForNewNumber.className = 'false';
    }



    // Extra Functionality:
    // Resizing the Output if it overflows the screen

    console.log(output.clientWidth, screen.clientWidth)
    output.style.fontSize = '30px';

    while (output.clientWidth>screen.clientWidth-40){
        let getSize = output.style.fontSize.match(/\d+/);
        getSize -= 5;
        output.style.fontSize = String(getSize) + 'px';
    }

}

export {calculateThis};