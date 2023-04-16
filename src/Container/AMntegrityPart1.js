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
import '../Styles/ConstructionEstimationDetails.css';

// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { FiCopy } from "react-icons/fi";
import { TbArrowsRightLeft } from "react-icons/tb";
import { RiListCheck2 } from "react-icons/ri";
import Homepage from "../images/homepage.mp4";
import ConstructionEstimation from "./ConstructionEstimation";
import ConstructionEstimationDetails from "./ConstructionEstimationDetails";

// Get precise Scans and estimates in no time with Xactimate - the ultimate solution for accurate construction estimates!
const Scopes = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [showVideo, setShowVideo] = useState(true); // State to track if video should be shown or not

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
  return (
    <div>
      <div className={`video-container ${showVideo ? "show" : "hide"}`}>
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
                    <h1 style={{ color: '#1976d2' }}>
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
      </div>
      <div>
        <div className="Construction__wrapper">
          <div className="Construction__wrapper__inner">
            <div className="Construction__header">
              CONSTRUCTION ESTIMATING SERVICES
            </div>
            <div className="Construction__para">
              <span className="Bold__"> " </span> At World Estimating, we offer
              our construction estimating services and material takeoffs. We
              have been around in the construction industry for 15 long years
              through that we have developed a vast team of{" "}
              <span className="Bold__">construction estimators.</span> This way,
              we have a proven track record of delivering accurate material
              estimates to our valuable clients. Thus, our portfolio includes
              services for every construction trade. Further, we do all this in
              the fastest turnaround time.
            </div>
            <div className="Construction__para">
              In the same manner, our construction managers and quantity
              surveyors have vast expertise in providing successful estimates.
              Thus, they provide accurate estimates for{" "}
              <span className="Bold__">
                residential, commercial, and industrial projects.
              </span>{" "}
              While they prepare, they follow the strict guidelines of the
              certified American Estimators Organization & American Association
              of Cost Engineers (AACE).
            </div>
            <div className="Construction__para">
              This ensures the right practices of tools and software for
              providing the right services to our clients. Also,{" "}
              <span className="Bold__">
                we are proficient with Planswift, Bluebeam, Trimble, RS Means,
                Cost Works, Xactimate, FastPIPE, FastDUCT, and Quest Estimating.
              </span>{" "}
              Further, for zip-code-based pricing, we use RS means, Craftsmen,
              and our developed databases.
            </div>
            <div className="Construction__para">
              Without any doubt, Word Estimating is a competitive platform among
              other construction estimation companies. Here you get quality
              construction estimates at affordable rates under one roof. We
              stand among the top estimators on The Blue Book.{" "}
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
      <ConstructionEstimationDetails/>
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
