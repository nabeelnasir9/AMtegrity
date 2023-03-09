import React from 'react';
import "../Styles/MPartialPart2.css";
import Image_1 from '../images/Image__21.png';
import {MdPictureAsPdf} from 'react-icons/md';


function MPartialPart2() {
  return (
    <div className='Mpartialbed__wrapper'>
        <div className='Mpartialbed__container'>
        <div className='Mpartialbed__left'>
            <div className='Mpartialbed__text_1'>
                AMIntBed
                </div>
                <div className='Mpartialbed__text_2'>
                The <span className='TextContent__1'>AMintbed </span> provides space for Matterport users to supercharge any public scan, providing access to unique utilities.
                    </div>
                    <div className='Mpartialbed__texts'>
                        
                    <div className='Mpartialbed__text3'>
                   <a href='/mbed/share/e5Wxtu8Arbx/a03f912f-8f05-4862-bd3a-6f3bcb0df7f6'> Pre-Mitigation</a>
                    </div>
                    <div className='Mpartialbed__text_4'>
                    <a href='/mbed/share/e5Wxtu8Arbx/a03f912f-8f05-4862-bd3a-6f3bcb0df7f6'>Post-Mitigation</a>
                    </div>


                    </div>
                    <div className='Mpartialbed__PDFPreview'>
                        <div className='Mpartialbed__PDFPreviewicon'>
                            <MdPictureAsPdf color='red' fontSize={20}/>
                        </div>
                    <div className='Mpartialbed__Pdf'>
                    <a href='https://mpartial-data.s3.us-east-2.amazonaws.com/mpartialTags_PDF_Report.pdf' > Review AMintTags report</a>
                    </div>
                    </div>

        </div>

        

        <div className='Mpartialbed__right'>
            <img src={Image_1} alt=''/>
        </div>
        </div>
      
    </div>
  );
}

export default MPartialPart2;
