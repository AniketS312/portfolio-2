import { useEffect, useState } from 'react';

import './App.css';
import Main from './Main/Main';
import SideBar from './SideBar/SideBar';

function App() {
  // States to set Page Number
  const [pageNumber, setPageNumber] = useState('01')
  const [mainHeight, setMainHeight] = useState(0)
  const [sectionHeights, setSectionHeights] = useState([])

useEffect(() => {
  const heights = []
  document.querySelector('#main').childNodes.forEach(el => heights.push(el.offsetTop))
  console.log(document.querySelector('#main').childNodes)
  setSectionHeights(heights)
}, [])

function changePageNumber() {
  if(mainHeight <= sectionHeights[0] + 50) {
    setPageNumber('01')
  } else if(mainHeight > sectionHeights[0] && mainHeight < sectionHeights[1]) {
    setPageNumber('02')
  }
  else if(mainHeight > sectionHeights[1] && mainHeight < sectionHeights[2]) {
    setPageNumber('03')
  }
  else if(mainHeight > sectionHeights[2] && mainHeight < sectionHeights[3]) {
    setPageNumber('04')
  }
  else if(mainHeight > sectionHeights[3] && mainHeight < sectionHeights[4]){
    setPageNumber('05')
  } else if (mainHeight >= sectionHeights[4]) {
    setPageNumber('06')
  }
}


  useEffect(() => {
    document.addEventListener("scroll", () => {
      setMainHeight(Math.abs(document.querySelector('#main').getBoundingClientRect().top))  
      changePageNumber()
    })
  }, [mainHeight])


  // SIDEBAR - Contact me text function
  function contactFunction(e) {
    e.preventDefault()
    const theContactForm = document.querySelector('#contact');
    theContactForm.scrollIntoView({behavior: "smooth", block: "end"  })
  } 

  return (
    <div className="App">
      <SideBar 
        PageNumber={pageNumber}
        contactFunction={contactFunction}  
      />
      <Main />
    </div>
  );
};


export default App;
