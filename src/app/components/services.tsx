import Image from "next/image"
import icon1 from "../images/ionc1.webp"
import icon2 from "../images/ionc2.webp"
import icon3 from "../images/ionc3.webp"

export default function archive(){
    return(<div>
        <div className="service">

        <p className="MyService">My Services</p>
        <div className="services">
            <div className="servicesBox"><Image className="S-Icon" src={icon1} alt="Logo Icon"/><p className="S-title">Logo Design</p><p className="S-description">Crafting unique symbols to represent your brand&apos;s identity and values</p></div>
            <div className="servicesBox"><Image className="S-Icon" src={icon2} alt="post Icon"/><p className="S-title">Post Design</p><p className="S-description">Creating eye-catching visuals for social media to boost engagement and reach</p></div>
            <div className="servicesBox"><Image className="S-Icon" src={icon3} alt="web Icon"/><p className="S-title">Web Design</p><p className="S-description">Designing user-friendly, responsive websites tailored to your brand&apos;s needs</p></div>
        </div>
        </div>
    </div>
    )
}
