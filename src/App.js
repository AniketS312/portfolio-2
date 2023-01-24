import { useEffect, useState } from 'react';

import './App.css';
import Main from './Main/Main';
import SideBar from './SideBar/SideBar';
import SideBarMobileLeft from './SidebarMobile/SideBarMobileLeft';

function App() {
  // States to set Page Number
  const [pageNumber, setPageNumber] = useState('01')
  const [pageSection, setPageSection] = useState('Intro')
  const [mainHeight, setMainHeight] = useState(0)
  const [sectionHeights, setSectionHeights] = useState([])
  const windowWidth = window.innerWidth;

useEffect(() => {
  const heights = []
  document.querySelector('#main').childNodes.forEach(el => heights.push(el.offsetTop))
  setSectionHeights(heights)
}, [])



useEffect(() => {

}, [mainHeight])

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setMainHeight(Math.abs(document.querySelector('#main').getBoundingClientRect().top))  

      function changePageNumber() {
        if(mainHeight <= sectionHeights[0] + 50) {
          setPageNumber('01')
          setPageSection('Intro')
        } else if(mainHeight > sectionHeights[0] && mainHeight < sectionHeights[1] + 50) {
          setPageNumber('02')
          setPageSection('Skills')
        }
        else if(mainHeight > sectionHeights[1] && mainHeight < sectionHeights[2] +50) {
          setPageNumber('03')
          setPageSection('Projects')
        }
        else if(mainHeight > sectionHeights[2] + 20 && mainHeight < sectionHeights[3]) {
          setPageNumber('04')
          setPageSection('Experience')
        }
        else if(mainHeight > sectionHeights[3] + 50 && mainHeight < sectionHeights[4]){
          setPageNumber('05')
          setPageSection('Technologies')
        }
         else if (mainHeight >= sectionHeights[4]) {
          setPageNumber('06')
          setPageSection('Contact Me')
        }
      }
      changePageNumber()
    })
  }, [mainHeight, sectionHeights])


  // SIDEBAR - Contact me text function
  function contactFunction(e) {
    e.preventDefault()
    const theContactForm = document.querySelector('#contact');
    theContactForm.scrollIntoView({behavior: "smooth", block: "end"  })
  } 

  // SIDEBAR - Email me text function
  function emailFunction(e) {
    e.preventDefault()
    window.location.href = "mailto:aniketsharma312@gmail.com";
  }


  return (
    <div className="App">
      {windowWidth < 1361 ? <SideBarMobileLeft /> : <SideBar 
        PageNumber={pageNumber}
        pageSection={pageSection}
        contactFunction={[contactFunction, emailFunction]}  
      />}

      <SideBarMobileLeft />
      {/* <SideBar 
        PageNumber={pageNumber}
        contactFunction={contactFunction}  
      /> */}
      <Main contactFunction={contactFunction}  />
    </div>
  );
};


export default App;
