import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs"
import { useRef } from "react";
import { useBoxScaling, useLineForword, useLinkDownfall, useTextUpward } from "../hooks/gsap";

const Header = () => {
  const link1 = useRef(null);
  const link2 = useRef(null);
  const link3 = useRef(null);
  const link4 = useRef(null);

  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);
  

  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);
  const text5 = useRef(null);
  const text6 = useRef(null);

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  const linkArr = [link1, link2, link3, link4];
  const lineArr = [line1, line2, line3, line4];
  const textArr = [text1, text2, text3, text4, text5, text6];
  const boxArr = [box1, box2, box3]

  useLinkDownfall(linkArr);
  useLineForword(lineArr);
  useTextUpward(textArr);
  useBoxScaling(boxArr);
  return (
    <div className='header container'>
      <div className="row">      
        <h2 ref={text1}>Md. Sa<span>i</span>ful I<span>sl</span>am</h2>
        <h2 ref={text2}>S<span>h</span>ovo</h2>
      </div>

      <hr ref={line1}/>

      <div className="row">
        <span ref={link1}>React.js Developer</span>
        <a ref={link2} href="https://www.google.com" target="_blank" rel="noreferrer">View Resume</a>
        <a ref={link3} href="mailto:saifulislamshovo934@gmail.com" target="_blank" rel="noreferrer">Send Eamil</a>
        <Link ref={link4} to="/contact">
          <span>Contact Me</span>
        </Link>
      </div>


      <div className="row">
        <Link to="/about" className="about box" ref={box1}>
          <span>About</span>
          <span><BsArrowUpRightCircle /></span>
        </Link>
        <h2 ref={text3}>Aspiring</h2>
        <Link to="/project" className="project box" ref={box2}>
          <span>Project</span>
          <span><BsArrowUpRightCircle /></span>
        </Link>
      </div>
        <hr ref={line2}/>

        <div className="row">
          <h2 ref={text4}>Re<span>a</span>ct.js Dev<span>el</span>oper</h2>
        </div>
        <hr ref={line3}/>
        <div className="row">
          <h2 ref={text5}>Based</h2>
          <Link to="/skills" className="skills box" ref={box3}>
            <span>Skills</span>
            <span><BsArrowUpRightCircle /></span>
          </Link>
          <h2 ref={text6}>in Bangladesh</h2>
        </div>

        <hr ref={line4}/>
    </div>
  )
}

export default Header