import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div>
    	<div>
      		<CalculatorDisplay />
    	</div>
		<div>
			<NumberButton /> 
      		<ActionButton />
		</div>
		<div>
			<NumberButton /> 
			<NumberButton /> 
			<NumberButton /> 
			<ActionButton />
		</div>
		<div>
			<NumberButton /> 
			<NumberButton /> 
			<NumberButton /> 
			<ActionButton />
		</div>
		<div>
			<NumberButton /> 
			<NumberButton /> 
			<NumberButton /> 
			<ActionButton />
		</div>
		<div>
			<NumberButton /> 
      		<ActionButton />
		</div>
    </div>
	)
};

export default App;
