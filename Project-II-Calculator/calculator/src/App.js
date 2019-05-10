import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const Number1 = {
	display: 1
}

const Number2 = {
	display: 2
}

const Number3 = {
	display: 3
}

const Number4 = {
	display: 4
}

const Number5 = {
	display: 5
}

const Number6 = {
	display: 6
}

const Number7 = {
	display: 7
}

const Number8 = {
	display: 8
}

const Number9 = {
	display: 9
}

const Number0 = {
	display: 0
}

const Multiply = {
	display: '*',
}

const Divide = {
	display: '/',
}

const Subtract = {
	display: '-',
}

const Add = {
	display: '+',
}

const Equal = {
	display: '='
}

const Clear = {
	display: 'Clear'
}

const Display = {
	defaultDisplay: 0
}



const App = () => {
  return (
    <div className="container">
		<div className='calculator'>
			<div>
				<CalculatorDisplay displayStyle="display" output={Display}></CalculatorDisplay>
			</div>
			<div>
				<NumberButton buttonStyle="long-white" button={Clear}/> 
				<ActionButton buttonStyle="short-red" button={Divide}/>
			</div>
			<div>
				<NumberButton buttonStyle="short-white" button={Number7}/> 
				<NumberButton buttonStyle="short-white" button={Number8}/> 
				<NumberButton buttonStyle="short-white" button={Number9}/> 
				<ActionButton buttonStyle="short-red" button={Multiply}/>
			</div>
			<div>
				<NumberButton buttonStyle="short-white" button={Number4}/> 
				<NumberButton buttonStyle="short-white" button={Number5}/> 
				<NumberButton buttonStyle="short-white" button={Number6}/> 
				<ActionButton buttonStyle="short-red" button={Subtract}/>
			</div>
			<div>
				<NumberButton buttonStyle="short-white" button={Number1}/> 
				<NumberButton buttonStyle="short-white" button={Number2}/> 
				<NumberButton buttonStyle="short-white" button={Number3}/> 
				<ActionButton buttonStyle="short-red" button={Add}/>
			</div>
			<div>
				<NumberButton buttonStyle="long-white" button={Number0}/> 
				<ActionButton buttonStyle="short-red" button={Equal}/>
			</div>
		</div>
    </div>
	)
};

export default App;
