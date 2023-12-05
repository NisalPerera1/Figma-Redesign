import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaEnvelope, FaLock, FaGoogle ,FaFacebook } from 'react-icons/fa';

// Import your images
import loginImage from '../home/03.png';
import { FaLaptop } from 'react-icons/fa';

const LoginSection = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return (
    <div className='cardDiv'>
<Card className='cardDiv'>
      <CardContent >
        <Grid container spacing={2}>
          {/* Left side (image) */}
          <Grid item xs={12} sm={6}>
            <img src={loginImage} alt="Login" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
          </Grid>
          {/* Right side (tabs) */}
          <Grid item xs={12} sm={6}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Login" />
              <Tab label="Register" />
            </Tabs>
            <TabPanel value={tabValue} index={0}>
              {/* Content for Login Tab */}
              
<h3 className='accountInfo'>Entr Your Account Information</h3>

<label for="username">Email:</label>
<div class="input-container">
  <span class="inputIcons"><FaEnvelope></FaEnvelope></span>
  <input id="username" class="LoginInputs" placeholder="|  Example@gmail.com" type="text" required />
</div>


<label for="password">Password:</label>
<div class="input-container">
<span class="inputIcons"><FaLock></FaLock></span>
<input id="password" class="LoginInputs" placeholder="|  Enter your Password" type="password" required />
</div>

<h3 className='forgetpassword'> Forgot your <a className ="accountInfo" href="/forgot-password">Password?</a></h3>
<h3 className='forgetpassword'> If You Don't Have an Account, Please  <a className ="accountInfo" href="/register">Register Here</a></h3>


 <h2 className='accountInfo'>-----OR-----</h2>

 <div className="socialIcons">
    <span className="socialIcon" style={{ color: '#34ef34' }}><FaGoogle /></span>
    <span className="socialIcon" style={{ color: '#1877F2' }}><FaFacebook /></span>
  </div>

  <button className="loginButton" >LOGIN</button>


            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              {/* Content for Register Tab */}
              <Typography variant="body2">Register Form Goes Here</Typography>
            </TabPanel>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        {/* Additional actions or buttons can be added here */}
      </CardActions>
    </Card>
    </div>
    
  );
};

// Custom TabPanel component to manage content for each tab
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default LoginSection;
