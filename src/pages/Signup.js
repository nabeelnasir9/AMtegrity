/* eslint-disable */


import {
  Alert,
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";
import Qaiser from "../images/Avatar.jpeg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";


function Signup(props) {
  const [Email, setEmail] = useState("");
  const [Namefirst, setNamefirst] = useState("");
  const [Namelast, setNamelast] = useState("");
  const [phoneValue, setPhoneValue] = useState("___-___-____");
  const [selectedValue, setselectedValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [Password, setPassword] = useState("");
  const [showPassword2, setShowPassword2] = useState(false);
  const [Password2, setPassword2] = useState("");
  const [term, setTerm] = useState(false);
  const [missMatchPassword, setmissMatchPassword] = useState('');
  const history = useNavigate();


  const [show, setshow] = useState(1);

  const [emailcheck, setEmailCheck] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validatePhoneInput = (inputValue, e) => {
    // let value = event.target.value;
    // value = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    // value = value.slice(0, 10); // Limit input to 10 digits
    // value = value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); // Add hyphens
    // value = value.replace(/^$/, '_-_-'); // Replace empty input with underscores
    // return value;

    let r = "___-___-____";
    r = r.split("");
    let k = inputValue.split("");
    let b = [1, 2, 3];
    let f = k.filter((s) => {
      if (s >= 0 && s <= 9) {
        return parseInt(s);
      }
    });
    console.log(e);
    if (f.length > 8) setshow(4);
    if (e.key === "Backspace" || e.keyCode === 8) {
      console.log("Backspace key was pressed");
      f.pop();
    }
    let a = f.map((s, i) => {
      let b = r.indexOf("_");
      console.log(k, f.length, i, r);
      if (b != -1) r[b] = s;
    });
    r = r.join("");
    let h = "yui";
    let i = h.split("");
    let t = i.join(",");
    console.log(typeof r, r);
    return r;
  };

  const submitHandler2 = async () => {
    if(show==5 ){
      if(Password==Password2){
      setmissMatchPassword(false)
     
      console.log('yes')
    }
      else{
        setmissMatchPassword(true)
      }
    }
    if (errors.email == undefined && show == 1) {
      console.log("error in names");
      setshow(2);
      return;
    }
    if (errors.lname == undefined && errors.name == undefined && show == 2) {
      console.log("error in nameu");
      setshow(3);
    }
    if (selectedValue != "" && show == 4) setshow(5);
    console.log("error in namew", errors.lname ? "true" : "false");
    if (show == 5 && !missMatchPassword && term ){
      const response = await fetch("http://localhost:1337/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Name1: Namefirst,LastName:Namelast, Emails: Email, password: Password,cell:phoneValue }),
      });
      const data = await response.json();
      data?.token ? history("/") : "";

    }
  };
  return (
    <form onSubmit={handleSubmit(submitHandler2)} style={{ width: "100%" }}>
      <Grid
        container
        sx={{
          width: "-webkit-fill-available",
          pt: "6rem",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", mt: "-1rem" }}
        >
          <Avatar
            sx={{ width: 120, height: 140, background: "red" }}
            src={Qaiser}
          />
        </Grid>

        <Grid item xs={12} sx={{ mb: "2rem" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: show == 4 || show == 5 ? "46px" : "30px",
              fontWeight: "600",
              width: "70%",
              margin: "auto",
            }}
          >
            {show == 1 &&
              `Hello! I'm Qaiser. I'll get you signed up in seconds. Ready to go?`}
            {show == 2 && `Thanks, What's your name?`}
            {show == 4 && `What best describe you?`}
            {show == 5 && `Final Step! Please Enter Your Password`}
          </Typography>
        </Grid>

        <Grid item xs={show == 2 ? 6.5 : show == 4 ? 6 : 5}>
          <Grid
            container
            sx={{
              justifyContent:
                show == 3 || show == 4 ? "center" : "space-between",
            }}
          >
            {show == 1 && (
              <Grid item xs={12} sx={{ position: "relative" }}>
                <FormControl
                  sx={{
                    "& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#4267B2 !important",
                        borderRadius: "10px",
                      },
                    "& .Mui-focused": { color: "#4267B2 !important" },
                    m: 1,
                    "& .MuiOutlinedInput-notchedOutline legend ": {
                      ml: "2rem",
                      backgroundColor: "red",
                      color: "red",
                    },
                  }}
                  fullWidth
                  variant="outlined"
                >
                  <InputLabel
                    sx={{ pl: "2.5rem" }}
                    htmlFor="outlined-adornment-password"
                  >
                    Email
                  </InputLabel>
                  <OutlinedInput
                    sx={{ pl: "2.5rem" }}
                    type={"email"}
                    label="Email"
                    autoComplete="off"
                    value={Email || ""}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    onInput={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {/* <MdVisibilityOff /> */}
                </FormControl>
                {errors.email && (
                  <Grid>
                    <Typography
                      sx={{ ml: ".8rem", color: "#d33943", fontWeight: "400" }}
                    >
                      {errors.email.message}
                    </Typography>
                  </Grid>
                )}

                <Grid
                  item
                  sx={{
                    padding: ".5rem",
                    backgroundColor: "rgba(10,81,105,.2)",
                    borderRadius: "8px",
                    display: "flex",
                    width: "max-content",
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                  }}
                >
                  <MdLock style={{ color: "#4267B2" }} />
                </Grid>
              </Grid>
            )}
            {show == 2 && (
              <>
                <Grid item xs={5.5}>
                  <TextField
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name should be at least 2 characters",
                      },
                      maxLength: {
                        value: 50,
                        message: "Name should not exceed 50 characters",
                      },
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Name should contain only letters and spaces",
                      },
                    })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    fullWidth
                    type={"text"}
                    value={Namefirst}
                    onChange={(e) => {
                      setNamefirst(e.target.value);
                    }}
                    InputLabelProps={{
                      sx: {
                        "&.Mui-focused": {
                          color: "#4267B2",
                        },
                      },
                    }}
                    sx={{
                      mb: "1rem",
                      "& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#4267B2 !important",
                          borderRadius: "10px",
                        },
                      // '& legend ': {width: '160px'},
                    }}
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={5.5}>
                  <TextField
                    {...register("lname", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name should be at least 2 characters",
                      },
                      maxLength: {
                        value: 50,
                        message: "Name should not exceed 50 characters",
                      },
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Name should contain only letters and spaces",
                      },
                    })}
                    error={!!errors.lname}
                    helperText={errors.lname?.message}
                    fullWidth
                    type={"text"}
                    value={Namelast}
                    onChange={(e) => {
                      setNamelast(e.target.value);
                    }}
                    InputLabelProps={{
                      sx: {
                        "&.Mui-focused": {
                          color: "#4267B2",
                        },
                      },
                    }}
                    sx={{
                      mb: "1rem",
                      "& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#4267B2 !important",
                          borderRadius: "10px",
                        },
                    
                    }}
                    label="Last Name"
                  />
                </Grid>
              </>
            )}
            {show == 3 && (
              <Grid item xs={6} sx={{ position: "relative" }}>
                <TextField
                  label="Phone"
                  name="phone"
                  fullWidth
                  placeholder="______________999999999999999999999999999"
                  InputLabelProps={{ shrink: true }}
                  {...register("phone")}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  value={phoneValue}
                  onInput={(e) => {
                    setPhoneValue(validatePhoneInput(e.target.value, e));
                    console.log(e.keyCode);
                  }}
                />
                {errors.phone && (
                  <Grid>
                    <Typography
                      sx={{ ml: ".8rem", color: "#d33943", fontWeight: "400" }}
                    >
                      {errors.phone.message}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            )}

            {show == 4 && (
              <Grid item xs={10} sx={{ position: "relative" }}>
                <FormControl component="fieldset" sx={{ display: "flex" }}>
                  <RadioGroup
                    value={selectedValue}
                    onChange={(e) => setselectedValue(e.target.value)}
                  >
                    <Grid
                      container
                      sx={{
                        justifyContent: "space-between",
                        "& .MuiFormControlLabel-label": { fontSize: "18px" },
                      }}
                    >
                      <Grid
                        item
                        xs={6}
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        {" "}
                        <FormControlLabel
                          value="StaffAdjuster"
                          control={<Radio />}
                          label="Staff Adjuster"
                        />
                        <FormControlLabel
                          value="Independent Adjuster"
                          control={<Radio />}
                          label="Independent Adjuster"
                        />
                        <FormControlLabel
                          value="PA/ESQ"
                          control={<Radio />}
                          label="PA/ESQ"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          pl: "5rem",
                        }}
                      >
                        {" "}
                        <FormControlLabel
                          value="Contractor"
                          control={<Radio />}
                          label="Contractor"
                        />
                        <FormControlLabel
                          value="SpecialtiyVendor"
                          control={<Radio />}
                          label="Specialtiy Vendor"
                        />
                        <FormControlLabel
                          value="Other"
                          control={<Radio />}
                          label="Other"
                        />
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </FormControl>
              </Grid>
            )}
            {show==5 && missMatchPassword&&
            <Grid item xs={12}> 
              <Alert severity="warning" sx={{ width: "100%" }}>
                Password donot match!
              </Alert>
          </Grid>}
          { show==5 && <>

             <Grid item xs={12} sx={{ position: "relative" }}>
             <FormControl
               sx={{
                 "& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline":
                   { borderColor: "#4267B2 !important", borderRadius: "10px" },
                 "& .Mui-focused": { color: "#4267B2 !important" },
                 "& .MuiFormControl-root":{width:'-webkit-fill-available'},
                 m: 1,
                 ml:0,
                 ':has(input:-internal-autofill-selected)':{
                   background:'#e8f0fe',borderRadius:'9px',
                                   },
                 "& .MuiOutlinedInput-notchedOutline legend ": {
                   ml: "2rem",
                   backgroundColor: "red",
                   color: "red",
                 },
               }}
               fullWidth
               variant="outlined"
             >
               <InputLabel
                 sx={{ pl: "2.5rem" }}
                 htmlFor="outlined-adornment-password"
               >
                 Password
               </InputLabel>
               <OutlinedInput
                className="input2"
                 sx={{ pl: "2.5rem" }}
                 {...register('password', { 
                   required: 'password is required', 
                   minLength: { value: 3, message: 'password is least 2 characters' },
                   pattern: { 
                     value: /^/, 
                     message: 'Name should contain only letters and spaces'
                   }
                 })}
                 error={!!errors.password}
                 helperText={errors.password?.message}
                 id="outlined-adornment-password"
                 type={showPassword ? "text" : "password"}
                 value={Password}
                 onInput={(e) => {
                   setPassword(e.target.value);
                 }}
                 endAdornment={
                   <InputAdornment position="start">
                     <IconButton
                       aria-label="toggle password visibility"
                       onClick={() => setShowPassword((prev) => !prev)}
                       //   onMouseDown={handleMouseDownPassword}
                       edge="end"
                     >
                       {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                     </IconButton>
                   </InputAdornment>
                 }
                 label="Password"
               />
                           {errors.password && <Grid ><Typography sx={{ml:'.8rem',color:'#d33943',fontWeight:'400'}}>{errors.password.message}</Typography></Grid>}
 
               {/* <MdVisibilityOff /> */}
             </FormControl>
             <Grid
               item
               sx={{
                 padding: ".5rem",
                 backgroundColor: "rgba(10,81,105,.2)",
                 borderRadius: "8px",
                 display: "flex",
                 width: "max-content",
                 position: "absolute",
                 top: "20px",
                 left: "20px",
               }}
             >
               <MdLock style={{ color: "#4267B2" }} />
             </Grid>
           </Grid>
           
           <Grid item xs={12} sx={{ position: "relative" }}>
             <FormControl
               sx={{
                 "& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline":
                   { borderColor: "#4267B2 !important", borderRadius: "10px" },
                 "& .Mui-focused": { color: "#4267B2 !important" },
                 "& .MuiFormControl-root":{width:'-webkit-fill-available'},
                 m: 1,
                 ml:0,
                 ':has(input:-internal-autofill-selected)':{
                   background:'#e8f0fe',borderRadius:'9px',
                                   },
                 "& .MuiOutlinedInput-notchedOutline legend ": {
                   ml: "2rem",
                   backgroundColor: "red",
                   color: "red",
                 },
               }}
               fullWidth
               variant="outlined"
             >
               <InputLabel
                 sx={{ pl: "2.5rem" }}
                 htmlFor="outlined-adornment-password"
               >
                 Confirm Password
               </InputLabel>
               <OutlinedInput
             
                 sx={{ pl: "2.5rem" }}
                 {...register('password2', { 
                   required: 'password is required', 
                   minLength: { value: 3, message: 'password is least 2 characters' },
                   pattern: { 
                     value: /^/, 
                     message: 'Name should contain only letters and spaces'
                   }
                 })}
                 error={!!errors.password2}
                 helperText={errors.password2?.message}
                 id="outlined-adornment-password"
                 type={showPassword2 ? "text" : "password"}
                 value={Password2}
                 onInput={(e) => {
                   setPassword2(e.target.value);
                 }}
                 endAdornment={
                   <InputAdornment position="start">
                     <IconButton
                       aria-label="toggle password visibility"
                       onClick={() => setShowPassword2((prev) => !prev)}
                       //   onMouseDown={handleMouseDownPassword}
                       edge="end"
                     >
                       {showPassword2 ? <MdVisibilityOff /> : <MdVisibility />}
                     </IconButton>
                   </InputAdornment>
                 }
                 label="Confirm Password"
               />
                           {errors.password2 && <Grid ><Typography sx={{ml:'.8rem',color:'#d33943',fontWeight:'400'}}>{errors.password2.message}</Typography></Grid>}
 
               {/* <MdVisibilityOff /> */}
             </FormControl>
             <Grid
               item
               sx={{
                 padding: ".5rem",
                 backgroundColor: "rgba(10,81,105,.2)",
                 borderRadius: "8px",
                 display: "flex",
                 width: "max-content",
                 position: "absolute",
                 top: "20px",
                 left: "20px",
               }}
             >
               <MdLock style={{ color: "#4267B2" }} />
             </Grid>
           </Grid>
         
           
           </>
           }
{show==5 &&
<Grid item sx={{display:'flex',alignItems:'center',margin:'auto'}}>
<Checkbox
 
  value={term}
  onClick={()=>{setTerm((prev)=>!prev)}}
  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
/>
<Typography>I've read and accept the AMtegrity Terms&Conditions</Typography>
</Grid>
}
            <Grid item xs={12} sx={{ textAlign: "center", mt: "1.5rem" }}>
              <Button
                onClick={handleSubmit(submitHandler2)}
                sx={{
                  backgroundColor: "#4267B2",
                  color: "white",
                  fontFamily: "Raleway",
                  fontSize: "13px",
                  pl: "1.35rem",
                  pt: ".7rem",
                  pb: ".7rem",
                  pr: "1.35rem",
                  minWidth: "30%",
                  borderRadius: "1rem",
                  textAlign: "center",
                  border:'3px solid',
                  ":hover": {
                    backgroundColor: "white",
                    color: "#4267B2",
                    border: "3px solid #4267B2",
                    fontWeight: "500",
                    borderRadius: "1rem",
                  },
                }}
              >
                {show==1?'Lets Do This':show==5?'Create':'Next'}{" "}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default Signup;
