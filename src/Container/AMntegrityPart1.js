// import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../Styles/Scope.css";
import Card from "@mui/material/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import "../Styles/Swiper.css";
import estimate from "../images/Estimation.jpg";
import "../Styles/PictureMain.css";
import { Button, Link } from "@mui/material";
import "../Styles/ConstructionEstimationDetails.css";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FiCopy } from "react-icons/fi";
import { TbArrowsRightLeft } from "react-icons/tb";
import { RiListCheck2 } from "react-icons/ri";
import Homepage from "../images/homepage.mp4";
import ConstructionEstimation from "./ConstructionEstimation";
import ConstructionEstimationDetails from "./ConstructionEstimationDetails";
import ImagePlan from "../images/image-plan.jpg";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 50vh;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
  border-radius: 20px;
`;

const ModalContainer = styled.div`
  background-color: #4267b2 !important;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      font-weight: bold;
      color: white;
    }

    input[type="text"],
    input[type="email"] {
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #ccc;
      outline: none;
      width: 100%;
    }

    input[type="file"] {
      display: none;
    }

    .file-input-label {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      color: white;
      &:hover {
        text-decoration: underline;
      }
    }

    .file-name {
      font-size: 14px;
      color: white;
    }

    button[type="submit"] {
      padding: 8px 16px;
      background-color: #4267b2;
      color: white;
      border: 1px solid white;
      border-radius: 4px;
      cursor: pointer;
      outline: none;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const InputSelector = styled.select`
  width: 100%;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  padding-left: 40px; /* Adjust this value based on the selector width */
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Scopes = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [showVideo, setShowVideo] = useState(true); // State to track if video should be shown or not
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pdf, setPdf] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");

  function handleTimeUpdate(event) {
    setCurrentTime(event.target.currentTime);
  }

  function handlePlay() {
    console.log("Video is playing");
  }

  function handlePause() {
    console.log("Video is paused");
  }
  // useEffect(() => {
  //   // Use setTimeout to hide the video after 13 seconds
  //   const timeoutId = setTimeout(() => {
  //     setShowVideo(false);
  //   }, 20000); // 13 seconds = 13000 milliseconds

  //   return () => {
  //     clearTimeout(timeoutId); // Clear the timeout on component unmount
  //   };
  // }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowVideo((prevShowVideo) => !prevShowVideo);
    }, 23000);

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // e.g., send form data to server, send email, etc.
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("PDF:", pdf);
    // Reset form fields
    setName("");
    setEmail("");
    setPdf(null);
    // Hide the form
    setShowForm(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPdf(file);
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={ImagePlan}
          alt=""
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: "0.3",
          }}
        />
        <div className="Image__Words">
          <div className="Image__Words__wrapper">
            <div className="Image__Words__1">
              <h1 style={{ color: "#4267b2 " }}>BID MORE WIN MORE!</h1>
            </div>
            <div className="Image__Words__2">
              <h1 style={{ color: "#4267b2 " }}>
                Material Takeoff & Construction Estimating Services
              </h1>
            </div>
            <div style={{ color: "#4267b2", marginTop: "20px" }}>
              <h2 style={{ textTransform: "capitalize" }}>
                Getting tired of spreadsheets? Experience more accurate and
                efficient estimating and budgeting.
              </h2>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button
            onClick={toggleFormVisibility}
            className="Image-button-1"
            variant="contained"
            sx={{
              marginRight: "80px",
              width: { lg: "300px", xs: "100px" },
              height: { lg: "60px", xs: "60px" },
            }}
          >
              {showForm ? "Hide Form" : "Get Your Estimate"}
          </Button>

          <Button
            href="/#contactus"
            className="Image-button-2"
            variant="contained"
            sx={{
              marginRight: "0px",
              width: { lg: "300px", xs: "100px" },
              height: { lg: "60px", xs: "60px" },
            }}
          >
             Contact Us
          </Button>
          <div>
            <div>
              {showForm && (
                <ModalOverlay>
                  <ModalContainer>
                    <CloseButton onClick={toggleFormVisibility}>X</CloseButton>
                    <form onSubmit={handleFormSubmit}>
                      <label>
                        Name:
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter Your Name"
                        />
                      </label>
                      <label>
                        Email:
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                        />
                      </label>
                      <label>
                        Scope:
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Scope Of Your Work"
                        />
                      </label>
                      <InputContainer>
                        <label htmlFor="name">What Best Describe You?</label>
                        <InputSelector
                          value={selectedOption}
                          onChange={handleOptionChange}
                        >
                          <option value="">Select an option</option>
                          <option value="Contractor">Contractor</option>
                          <option value="Sub-Contractor">Sub Contractor</option>
                          <option value="Home-Builder">Home Builder</option>
                          <option value="Architecture">Architecture</option>
                          <option value="Others">Others</option>
                        </InputSelector>

                        {/* <InputField
                        id="name"
                          type="text"
                          value={inputValue}
                          onChange={handleInputChange}
                          placeholder="Scope Of Your Work"
                        /> */}
                      </InputContainer>
                      <label>
                        Upload PDF:
                        <label className="file-input-label">
                          <input type="file" onChange={handleFileChange} />
                          <span className="file-name">
                            {pdf ? pdf.name : "Choose a file"}
                          </span>
                        </label>
                      </label>
                      <button type="submit">Submit</button>
                    </form>
                  </ModalContainer>
                </ModalOverlay>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div className={`video-container ${showVideo ? "show" : "hide"}`}>
        {showVideo && (
          <video
            style={{ width: "100%", marginBottom: "-1rem" }}
            autoPlay={true}
            muted
            loop={true}
            controls={false}
            src={Homepage}
            type="video/mp4"
          ></video>
        )}
      </div>
       <div className={`image-container ${showVideo ? "hide" : "show"}`}>
        {!showVideo && (
          <div className="Image__Wrapper" style={{ height: "50rem" }}>
            <div className="Image__Conatiner">
              <div className="Image__Image__1">
                <img
                  src={estimate}
                  style={{ width: "100%", height: "50rem" }}
                  alt=""
                />
              </div>
              <div className="Image__Words">
                <div className="Image__Words__wrapper">
                  <div className="Image__Words__1">
                    <h1 style={{ color: "white" }}>BID MORE WIN MORE!</h1>
                  </div>
                  <div className="Image__Words__2">
                    <h1 style={{ color: 'white' }}>
                      Material Takeoff & Construction Estimating Services
                    </h1>
                  </div>
                  <div className="Image__Words_3" href="/Services">
                    <Link to="/#contactus">
                      <Button className="Image__Button_1" href="/#contactus">
                        <p>SAVE 60% OF YOUR ESTIMATING EXPENSE</p>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
           </div>
        )} 
      </div> */}
      <div>
        <div className="Construction__wrapper">
          <div className="Construction__wrapper__inner">
            <div className="Construction__header">
              CONSTRUCTION ESTIMATING SERVICES
            </div>
            <div className="Construction__para">
              <span className="Bold__"> " </span> AMtegrity is a construction
              estimation company committed to providing exceptional services and
              accurate material takeoffs. With over 15 years of experience in
              the industry, our dedicated team of construction estimators has
              built a strong reputation for delivering precise estimates to our
              esteemed clients. We take pride in catering to a wide range of
              construction trades, ensuring that our portfolio covers
              residential, commercial, and industrial projects.
            </div>
            <div className="Construction__para">
              Our construction managers and quantity surveyors possess extensive
              expertise, allowing them to consistently deliver successful
              estimates. They adhere to the strict guidelines set forth by the
              esteemed organizations, such as the American Estimators
              Organization and the American Association of Cost Engineers
              (AACE). By following these industry standards, we guarantee that
              our clients receive the highest level of professionalism and
              accuracy in our services.
            </div>
            <div className="Construction__para">
              At AMtegrity, we leverage cutting-edge tools and software,
              including Planswift, Bluebeam, Trimble, RS Means, Cost Works,
              Xactimate, FastPIPE, FastDUCT, and Quest Estimating. Our
              proficiency with these industry-leading technologies enables us to
              provide comprehensive and precise estimates. Moreover, we utilize
              RS Means, Craftsmen, and our proprietary databases for
              zip-code-based pricing, ensuring that our clients receive the most
              relevant and accurate cost assessments.
            </div>
            <div className="Construction__para">
              We take pride in our position as a leading competitor in the
              construction estimation industry. AMtegrity offers top-quality
              construction estimates at affordable rates, all under one roof.
              Our commitment to excellence has earned us recognition as one of
              the top estimators on The Blue Book, further establishing our
              dedication to providing unmatched services to our valued clients.{" "}
              <span className="Bold__">"</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Content for parallax element 1 */}
        <ConstructionEstimation />
      </div>
      <div>
        <ConstructionEstimationDetails />
      </div>
      <div style={{ backgroundColor: "#E7E7E7", width: "100%" }}>
        <div className="GridScope">
          <div className="GridContainer">
            <div className="Scope_Main">
              <div className="ScopePart1">
                <div className="ScopeTexts">
                  <div className="ScopeText1">
                    Get precise Scans,estimates &
                  </div>
                  <div className="ScopeText2">
                    MaterialTakeoff in no time with
                  </div>
                  <div className="ScopeText3">
                    {" "}
                    AMntegrity - the ultimate solution
                  </div>
                  <div className="ScopeText4">
                    for accurate construction estimates!
                  </div>
                </div>
              </div>
              <div className="ScopeCard">
                {/* <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        spaceBetween={1}
        // centeredSlides={true}
        
        modules={[Pagination]}
        className="mySwiper"
      > */}
                {/* <SwiperSlide> */}
                <Card
                  sx={{
                    width: 450,
                    marginBottom: 3,
                    marginLeft: 5,
                    borderRadius: 4,
                  }}
                >
                  <div className="CardMainSection">
                    <div className="CardIcon">
                      {/* <FiCopy/> */}
                      <TbArrowsRightLeft />
                    </div>
                    <CardContent className="CardContents">
                      <Typography
                        sx={{ fontSize: 20 }}
                        color="text.secondary"
                        gutterBottom
                        className="headerContent"
                      >
                        AMSketch
                      </Typography>
                      <Typography
                        sx={{ mb: 1 }}
                        color="text.secondary"
                        className="headerContent2"
                      >
                        {/* 3D scanning platform that lets you create immersive virtual experiences with ease. Our technology captures every detail of your space, from floor plans to stunning 4K visuals, giving your audience an unparalleled sense of presence.  */}
                        The ultimate solution for converting your Matterport
                        scans into Xactimate Sketches. With our advanced
                        technology, you can quickly and easily transform your 3D
                        scans into detailed Xactimate sketches files.
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
                {/* </SwiperSlide> */}
                {/* <SwiperSlide> */}
                <Card sx={{ width: 450, marginBottom: 3, borderRadius: 4 }}>
                  <div className="CardMainSection">
                    <div className="CardIcon">
                      {/* <TbArrowsRightLeft/> */}
                      <RiListCheck2 />
                    </div>
                    <CardContent className="CardContentss">
                      <Typography
                        sx={{ fontSize: 20 }}
                        color="text.secondary"
                        gutterBottom
                        className="headerContent"
                      >
                        AMXactimate
                      </Typography>

                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                        className="headerContent2"
                      >
                        {/* The ultimate solution for converting your Matterport scans into Xactimate Sketches. With our advanced technology, you can quickly and easily transform your 3D scans into detailed Xactimate sketches files. */}
                        The premier platform for accurate, efficient
                        construction estimating. With our advanced technology
                        and expert team, you can trust that your estimates will
                        be fast, reliable, and precise every time.
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
                {/* </SwiperSlide> */}
                {/* <SwiperSlide> */}
                <Card
                  sx={{
                    width: 450,
                    marginBottom: 3,
                    marginLeft: 5,
                    borderRadius: 4,
                  }}
                >
                  <div className="CardMainSection">
                    <div className="CardIcon">
                      {/* <RiListCheck2/> */}
                      <FiCopy />
                    </div>
                    <CardContent className="CardContentsss">
                      <Typography
                        sx={{ fontSize: 20 }}
                        color="text.secondary"
                        gutterBottom
                        className="headerContent"
                      >
                        AMEstimate
                      </Typography>

                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                        className="headerContent2"
                      >
                        The premier platform for accurate, efficient
                        construction estimating. With our advanced technology
                        and expert team, you can trust that your estimates will
                        be fast, reliable, and precise every time.
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
                {/* </SwiperSlide> */}
                {/* </Swiper> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scopes;
