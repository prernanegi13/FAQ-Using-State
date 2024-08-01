import { useState } from "react";
import "./App.css";
import { QueAns } from "./Data/FaqQuestions";

function App() {
  let [showAns , setShowAns]=useState(QueAns[0].id)
  return (
    <div className="App">
      <div>
        <h1>Frequently Asked Questions (FAQs)</h1>
        <div className="faqOuter">

          {
            QueAns.map((faqItems,i)=>{
              return(
                <div className="faqItems">
            <h4 onClick={()=>setShowAns(faqItems.id)}>{faqItems.Question}</h4>
            <p className={showAns===faqItems.id ? "activeAns" : ""}>{faqItems.Answer}</p>
          </div>
              )
            }
             )
          }
          

          {/*...... YOU CAN USE SINGLE SINGLE ALSO WITHOUT MAP.......... */}
          

          {/* <div className="faqItems">
            <h4>What is the significance of React Fragments?</h4>
            <p>
              React Fragments allow you to group multiple elements without
              adding unnecessary nodes to the DOM. It is useful when you don not
              want to introduce an additional parent div.
            </p>
          </div>

          <div className="faqItems">
            <h4>What are React Hooks?</h4>
            <p>
              React Hooks are functions that let you use state and other React
              features in functional components instead of class components.
            </p>
          </div>

          <div className="faqItems">
            <h4>Explain the useEffect Hook.</h4>
            <p>
              useEffect is a Hook that performs side effects in your function
              components. It runs after every render and can be used for data
              fetching, subscriptions, manually changing the DOM, etc
            </p>
          </div>

          <div className="faqItems">
            <h4>What is the purpose of the useState Hook?</h4>
            <p>
              The useState Hook in React is used to add state variables to
              functional components, allowing them to keep track of state
              changes and trigger re-renders.
            </p>
          </div>

          <div className="faqItems">
            <h4>What is the Context API in React?</h4>
            <p>
              The Context API provides a way to pass data through the component
              tree without having to pass props down manually at every level.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
