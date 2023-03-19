import React from 'react';
import "../Styles/AMntegrityPart2.css";
import Image_1 from '../images/Image__21.png';
import {MdPictureAsPdf} from 'react-icons/md';


function AMntegrityPart2() {
  return (
    <div id='AMntegrityMbed' className='AMntegritybed__wrapper'>
        <div className='AMntegritybed__container'>
        <div className='AMntegritybed__left'>
            <div className='AMntegritybed__text_1'>
                AMSketch
                </div>
                <div className='AMntegritybed__text_2'>
                The <span className='TextContent__1'>AMSketch </span> provides a wide range of services to scan spaces and create immersive virtual experiences. With Matterport, you can capture every detail of your space, from floor plans and measurements to stunning high-resolution visuals that transport your audience to the heart of your property. Our team of experts uses the latest technology to create accurate, detailed 3D models that allow you to showcase your space like never before. Whether you're a real estate professional, an architecture firm, or a hospitality provider, we have the tools and expertise to help you market your properties more effectively.
                    </div>
                    <div className='AMntegritybed__texts'>
                        
                    <div className='AMntegritybed__text3'>
                   <a href='/mbed/share/e5Wxtu8Arbx/a03f912f-8f05-4862-bd3a-6f3bcb0df7f6'> Pre-Mitigation</a>
                    </div>
                    <div className='AMntegritybed__text_4'>
                    <a href='/mbed/share/e5Wxtu8Arbx/a03f912f-8f05-4862-bd3a-6f3bcb0df7f6'>Post-Mitigation</a>
                    </div>


                    </div>
                    <div className='AMntegritybed__PDFPreview'>
                        <div className='AMntegritybed__PDFPreviewicon'>
                            <MdPictureAsPdf color='red' fontSize={20}/>
                        </div>
                    <div className='AMntegritybed__Pdf'>
                    <a href='https://AMntegrity-data.s3.us-east-2.amazonaws.com/AMntegrityTags_PDF_Report.pdf' > Review AMintTags report</a>
                    </div>
                    </div>

        </div>

        

        <div className='AMntegritybed__right'>
            <img src={Image_1} alt=''/>
        </div>
        </div>
      
    </div>
  );
}

export default AMntegrityPart2;
