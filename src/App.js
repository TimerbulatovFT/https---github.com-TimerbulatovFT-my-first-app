import Test from "./Test"
import Header from "./Header/Header"
import Goods from "./Goods"

const myValue = 'Калькулятор';


function App() {
var num1="", num2="", result="", resValue="", value="";
var oper=false;

const headerData = {
  siteName : "my test site name",
  secondName : "best of the best",
  nav : [
    {"link" : "nav1", "text" : "my link 1"},
    {"link" : "nav2", "text" : "my link 2"},
    {"link" : "nav3", "text" : "my link 3"}
  ]
}

const goods = [
  {"title" : "apple", "cost" : 330, "image" : "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_maca-128.png"},
  {"title" : "pear", "cost" : 530, "image" : "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_pera-128.png"},
  {"title" : "orange", "cost" : 730, "image" : "https://cdn4.iconfinder.com/data/icons/fruit-and-vegetable-83/500/Fruit_and_vegetable-05-128.png"},
]



function assignNum (value) {
  console.log(value);  
  if (oper==false){
  if (num1==""){
  num1 = value;
  } else {
  num1 = num1 + value;
  }
  num1 = parseInt(num1);
  resValue = num1;
  } else {
  if (num2==""){
  num2 = value;
  } else {
  num2 = num2 + value;
  }
  num2 = parseInt(num2);
  resValue = num2;
  }
  console.log(resValue);
  }


return (
<div>
  <Header data={headerData} />
  <h1>{myValue}</h1>
  <Test />
  {goods.map(item=><Goods key={item.title} title={item.title} cost={item.cost} image={item.image}/>)}
  
  <input type='text' id='inputField' autoFocus placeholder="0" />
  <div>
    <button className="btn" id="btnPercent" value='%'>%</button>
    <button className="btn" id="btnClean">CE</button>
    <button className="btn" id="btnFullClean">C</button>
    <button className="btn" id="btnErase">&lt;</button>
  </div>
  <div>
    <button className="btn" id="btnHalf">&frac12;</button>
    <button className="btn" id="btnSquare">&sup2;</button>
    <button className="btn" id="btnRoot">&radic;</button>
    <button className="btn" id="btnDivision">/</button>
  </div>
  <div>
    <button className="btnValue" id="btn7" value='7' onClick={assignNum(value)}>7</button>
    <button className="btnValue" id="btn8" value='8'>8</button>
    <button className="btnValue" id="btn9" value='9'>9</button>
    <button className="btn" id="btnMulti">x</button>
  </div>
  <div>
    <button className="btnValue" id="btn4" value='4'>4</button>
    <button className="btnValue" id="btn5" value='5'>5</button>
    <button className="btnValue" id="btn6" value='6'>6</button>
    <button className="btn" id="btnSubtract">-</button>
  </div>
  <div>
    <button className="btnValue" id="btn1" value='1'>1</button>
    <button className="btnValue" id="btn2" value='2'>2</button>
    <button className="btnValue" id="btn3" value='3'>3</button>
    <button className="btn" id="btnSum">+</button>
  </div>
  <div>
    <button className="btn" id="btnNegativ">+/-</button>
    <button className="btn" id="btnZero">0</button>
    <button className="btn" id="btnDot">.</button>
    <button className="btn" id="btnEquals">=</button>  
  </div> 
  <div>
    <input type="range"></input></div> 
</div>
)



}

export default App;
