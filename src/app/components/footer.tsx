
import Image from "next/image"
import Gmail from "../images/11-gmail.png"
import Whatsapp from "../images/12-whatsapp.png"
import linkedin from "@/app/images/linkedin.png" ;
import github from "@/app/images/gothub.png" ;
import behance from "@/app/images/behance.png" ;
import copywrite from "@/app/images/copyright-01.png"

export default function Footer (){
    return(
        <div className="FooterHome">
        <div className="FooterMain">

            <div className="FooterDiv1">
            <ul>
                <li className="FooterLi border-b-4 inline mt-2"  >Services</li><p className="h-3"></p>
                <li className="FooterLi">Graphic Design</li>
                <li className="FooterLi">Web Development</li>
                <li className="FooterLi">Video Editing</li>
            </ul>
            <ul>
                <li className="FooterLi">About</li>
                <li className="FooterLi">Contact</li>
                <li className="FooterLi">My Skills</li>
                <li className="FooterLi">Projects</li>
            </ul>


            </div>

            <div className="FooterDiv2">
                <p className="Footer-Text" >FOLLOW</p><p className="h-3"></p>
                <div  className=" Footer-Icon-div"><Image className="Footer-icon" src={Gmail} alt=""/><p className="mx-3">ghulamakbarabbbro110@gmail.com</p></div><p className="h-2"></p>
                <div className=" Footer-Icon-div"><Image className="Footer-icon" src={Whatsapp} alt=""/><p className="mx-3">+92 326 2268830</p></div><p className="h-3"></p>
                <ul className="F-icon-ul">
                <li className="F-icon"><a href="www.linkedin.com/in/akbarabro" target="_main" ><Image src={linkedin} alt="Icon"/></a></li>
                <li className="F-icon"><a href="www.github.com/akbarabro"><Image src={github} alt="Icon"/></a></li>
                <li className="F-icon"><a href="www.behance.net/akbarabro"><Image src={behance} alt="Icon"/></a></li>
                </ul><p className="h-3"></p>
                <p className="Footer-Text" >SUBSCRIBE</p><p className="h-3"></p>
                <div>
                    <input type="text" className="F-gmail" placeholder="Your Gmail"/>
                    <button className="F-subscribe h-11 w-24 bg-slate-300 rounded-2xl text-sm font-bold mx-2">SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <hr className="F-hr"/><p className="h-3"></p>
        <div className="F-copywriteDiv"><Image className="Copywrite-Icon" src={copywrite} alt=" "/><p>Copyright All rights reserved</p></div>
        </div>
    )
}