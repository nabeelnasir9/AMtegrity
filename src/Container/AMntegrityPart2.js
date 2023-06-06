import React, {useEffect} from "react";
import "../Styles/AMntegrityPart2.css";
import Image_1 from "../images/Image__21.png";
import { MdPictureAsPdf } from "react-icons/md";
import Aos from 'aos';
import 'aos/dist/aos.css';

function AMntegrityPart2() {

    useEffect(()=>{
        Aos.init({duration: 1400});
          },[]);
  return (
    <div id="AMntegrityMbed" className="AMntegritybed__wrapper" data-aos="fade-up">
      <div className="AMntegritybed__container">
        <div className="AMntegritybed__left">
          <div className="AMntegritybed__text_1">AMSketch</div>
          <div className="AMntegritybed__text_2">
            At <span className="TextContent__1">AMSketch,</span> One of our
            flagship offerings is our partnership with Matterport, a leading
            provider of spatial data capture technology. Through this
            collaboration, we enable you to capture every intricate detail of
            your space, ranging from precise floor plans and accurate
            measurements to visually stunning high-resolution imagery. Our team
            of skilled experts utilizes the latest advancements in 3D scanning
            and modeling to create immersive, interactive 3D models that
            transport your audience right to the heart of your property. For
            real estate professionals, our services provide a game-changing
            advantage in marketing properties. Instead of relying on traditional
            static photos or flat floor plans, we empower you to offer potential
            buyers or tenants an immersive virtual tour of the property. This
            allows them to explore every nook and cranny, gaining a realistic
            sense of the space's layout, size, and design. By offering such a
            rich and engaging experience, you can effectively capture the
            attention and interest of your target audience, increasing the
            likelihood of conversions and accelerating sales cycles. Architects
            and design firms also benefit from our services. Our 3D models and
            virtual experiences allow you to showcase your design concepts in a
            highly visual and interactive manner. Clients can step into the
            virtual space, walk through rooms, and experience the flow and
            atmosphere of the design. This level of immersion enhances
            communication and collaboration, ensuring that your vision is
            accurately conveyed and understood by all stakeholders involved. At{" "}
            <span className="TextContent__1">AMSketch, </span> we pride
            ourselves on delivering accurate, detailed, and visually captivating
            virtual experiences. Our team of experts combines technical prowess
            with a deep understanding of various industries, enabling us to
            tailor our services to your specific needs and objectives. Whether
            you're in real estate, architecture, or hospitality, we have the
            tools, expertise, and passion to help you elevate your marketing
            efforts and captivate your audience with immersive virtual
            experiences.
          </div>
          {/* <div className='AMntegritybed__texts'>
                        
                    <div className='AMntegritybed__text3'>
                   <a href='/mbed/share/e5Wxtu8Arbx/a03f912f-8f05-4862-bd3a-6f3bcb0df7f6'> Pre-Mitigation</a>
                    </div>
                    <div className='AMntegritybed__text_4'>
                    <a href='/mbed/share/e5Wxtu8Arbx/a03f912f-8f05-4862-bd3a-6f3bcb0df7f6'>Post-Mitigation</a>
                    </div>


                    </div> */}
          {/* <div className='AMntegritybed__PDFPreview'>
                        <div className='AMntegritybed__PDFPreviewicon'>
                            <MdPictureAsPdf color='red' fontSize={20}/>
                        </div>
                    <div className='AMntegritybed__Pdf'>
                    <a href='https://AMntegrity-data.s3.us-east-2.amazonaws.com/AMntegrityTags_PDF_Report.pdf' > Review AMintTags report</a>
                    </div>
                    </div> */}
        </div>

        <div className="AMntegritybed__right">
          <img src={Image_1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AMntegrityPart2;
