import './calculatorApp.css';
import {calculateThis} from './calculateThis.js';

function CalculatorApp() {
  let theme = 'blueCalc';

  const changeTheme = () => {
    const calculator = document.querySelector('.CalculatorApp');
    if(theme === 'blueCalc'){
      theme = 'whiteCalc';
      calculator.classList.remove('blueCalc')
      calculator.classList+= " " + theme; 
    } else if (theme === 'whiteCalc'){
      theme = 'purpleCalc'
      calculator.classList.remove('whiteCalc')
      calculator.classList+= " " + theme; 
    } else {
      theme = 'blueCalc';
      calculator.classList.remove('purpleCalc')
      calculator.classList+= " " + theme; 
    }
  }


  return (
    <div className="CalculatorApp blueCalc">
      <div className="calcContainer">
          <div className="top-part">
          <h3>calc</h3>
          <div className="theme-box">
            <p className="theme-number">1 2 3</p>
            <div className="theme-bottom">
              <p>THEME</p>
              <label className="switch">
                <input type="button" onClick={()=>changeTheme()}/>
                <div className="slider"></div>
              </label>
            </div>
          </div>
        </div>
        <div id="readyNew" style={{"display":"none"}} className='true'>I am the unseen</div>
        <div className="screen">
          <p className="mockery"></p>
          <h3 className="output">123,456</h3>
        </div>
        <div className="keypad">
          <button className="operational" onClick={()=>calculateThis(7)}><div>7</div></button>
          <button className="operational" onClick={()=>calculateThis(8)}><div>8</div></button>
          <button className="operational" onClick={()=>calculateThis(9)}><div>9</div></button>
          <button className="erasional" onClick={()=>calculateThis('DEL')}><div>DEL</div></button>

          <button className="operational" onClick={()=>calculateThis(4)}><div>4</div></button>
          <button className="operational" onClick={()=>calculateThis(5)}><div>5</div></button>
          <button className="operational" onClick={()=>calculateThis(6)}><div>6</div></button>
          <button className="operational" onClick={()=>calculateThis('ADD')}><div>+</div></button>

          <button className="operational" onClick={()=>calculateThis(1)}><div>1</div></button>
          <button className="operational" onClick={()=>calculateThis(2)}><div>2</div></button>
          <button className="operational" onClick={()=>calculateThis(3)}><div>3</div></button>
          <button className="operational" onClick={()=>calculateThis('SUBTRACT')}><div>-</div></button>

          <button className="operational" onClick={()=>calculateThis('DECIMAL')}><div>.</div></button>
          <button className="operational" onClick={()=>calculateThis(0)}><div>0</div></button>
          <button className="operational" onClick={()=>calculateThis('DIVIDE')}><div>/</div></button>
          <button className="operational" onClick={()=>calculateThis('MULTIPLY')}><div>x</div></button>

          <button className="erasional two-grids" onClick={()=>calculateThis('RESET')}><div>RESET</div></button>
          <button className="equals two-grids" onClick={()=>calculateThis('EQUATE')}><div>=</div></button>

        </div>
      </div>
      
    </div>
  );
}

export default CalculatorApp;
