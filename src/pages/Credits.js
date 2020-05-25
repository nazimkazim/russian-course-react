import React from 'react'
import {set4COSOC} from '../data/ComposeOrderedSentOnClick'

export default function Credits() {
  const stripHtml = (html) => 
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}
  return (
    <div className="container">
      <ul>
        <h1>Lesson 1.3</h1>
        {set4COSOC.map((item) => (
          <li key={item.attr}>{stripHtml(item.attr)}</li>
        ))}
        <h1>Lesson 1.3</h1>

      </ul>
    </div>
  )
}


