//Author : Group 3
//Author: Fenil Milankumar Parmar
// The below iframe contains the pre-developed form from source: My Forms. (n.d.). Jotform.com. Retrieved December 3, 2022, from https://www.jotform.com/myforms/
// I have used JotForms to develop a form which takes pdf documents from Investors/Startups and admin can see and verifies it.


import Iframe from "react-iframe";
import "./docuCss.css";
function DocumentVerification() {
  return (
    <div className="iframeContainer">
      <Iframe
        url="https://form.jotform.com/223367236310247"
        allowFullScreen
        frameBorder={0}
        className="iframe"
        title="DocumentVerification"
      />
    </div>
  );
}

export default DocumentVerification;
