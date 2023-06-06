import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SingleQuestion from '../Container/singlequestion';
import '../Styles/Faq.css';
// import '../sass/_layout.scss';
// import db from '../../firebase.config';

function Questions() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

//   const fetchBlogs = async () => {
//     const response = db
//       .collection('questionanswers')
//       .doc('bygIc09pstibe86gIm9U');
//     const data = await response.get();
//     const newdata = data.data().questions;
//     const arr = [];
//     Object.keys(newdata).forEach((key) => {
//       arr.push(newdata[key]);
//     });
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);
  return (
    <div className="questions" data-aos="fade-up">
        <div className="questions-heading">
      <div className="questions-qhead-primary">
        See Frequently Asked Questions
      </div>
      <div className="questions-qhead-secondary">
        Find solutions and your perfect match. If you need more
        information, please contact us!
      </div>
      </div>
      <SingleQuestion
        answer={
          'Usually yes. Most modern apps and systems will have an interface like what we described in the last question. Ask the company if they have any “API documentation”, if they do then it is very likely that we will be able to integrate with the system. We’ve experience connecting with lots of different systems and online tools to drive app functionality - here are a few common ones we’ve worked with: Facebook, Twitter, LinkedIn, Amazon AWS, Salesforce, Google maps, Matchmaker, Broadbean, Google Sheets, PayPal, Stripe, Airtables, Mailchimp, Campaign Monitor, Marketo, Insightly, JT Telecom, SMS Gateway, Worldpay, Sagepay, Mailgun, Xero, Analytics, Youtube, Vimeo and others'
        }
        question={
          'Can we connect our existing web systems/tools/websites/CRM, etc ?'
        }
      />

      <SingleQuestion
        answer={
          'Yes, you will be assigned appropriate copyright or license rights for the bespoke code that we write for your project. We are transparent with intellectual property rights, and you will have the opportunity to review our code ownership terms before the project begins.'
        }
        question={'Will I own the source code ?'}
      />
      <SingleQuestion
        answer={
          'You will be assigned a dedicated project manager, who will be your primary point of contact throughout the development process. We also offer a range of support and maintenance options to ensure we are responsive to your requests after the launch date.'
        }
        question={
          'What kind of support will I receive throughout the development process?'
        }
      />
      <SingleQuestion
        answer={
          'Yes, we offer the option to engage us on an ad-hoc basis for support, or have monthly retainer options should you require a more consistent and reliable level of service. Ad-hoc support can work for projects that need minimal support as to avoid the need for fixed ongoing monthly costs.'
        }
        question={'Do you provide ongoing support, maintenance and updates?'}
      />
      <SingleQuestion
        answer={
          'Yes, most of the apps we make support both iOS and Android mobile platforms. It’s common for people to want their applications to work across web and mobile devices, so we use development frameworks such as React and React native that enable us to quickly support both platforms.'
        }
        question={'Can you build apps for both iOS and Android?'}
      />
    </div>
  );
}

export default Questions;