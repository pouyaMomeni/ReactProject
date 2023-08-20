import React from 'react'

const Footer = () => {
        const print =  () =>{
        var content = document.getElementById("divcontents");
        var pri = document.getElementById("ifmcontentstoprint").contentWindow;
        pri.document.open();
        pri.document.write(content.innerHTML);
        pri.document.close();
        pri.focus();
        pri.print();
    }
  return (
    <div onClick={print}>footer</div>
  )
}

export default Footer