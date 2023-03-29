import { Box, Grid } from '@mui/material'
import { wrap } from 'module'

import React from 'react'
import { NavItem } from 'react-bootstrap'

const AboutPage = () => {
  return (
    <div>
      <h2>About Us</h2>
      <Grid container spacing={2}>
  <Grid item xs={6} md={8}>
    <NavItem><Box
      sx={{
        width: 400,
        height: 300,
        backgroundColor: 'white',
       marginLeft:'45px',
       flexWrap: 'wrap'
       
       }}
    ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit debitis quidem enim laborum exercitationem quos quaerat omnis nisi, non vitae animi veniam magnam deserunt iste dignissimos delectus, eos quo provident modi ex velit soluta in. Odio earum vero, soluta accusantium ipsa praesentium excepturi debitis explicabo nobis at cumque suscipit rerum esse natus aperiam sed alias, quidem eum fuga maxime eveniet? Ipsum consequuntur inventore, sit reiciendis enim error, fugit iure ad nihil officiis voluptatum quia sint molestiae aspernatur. Quasi laudantium, illo ipsa iure beatae quibusdam minima eaque alias consequuntur inventore facilis sunt, modi eum.</p></Box></NavItem>
  </Grid> 
       
  <Grid container spacing={2}>
  <Grid item xs={6} md={8}>
    <NavItem><Box
      sx={{
        width: 400,
        height: 300,
        backgroundColor: 'white',
       marginLeft: '98%'
       }}
    /></NavItem>
  </Grid> 
  </Grid> 
  
  {/* <Grid item xs={6} md={4}>
    <NavItem><Box
      sx={{
        width: 400,
        height: 300,
        backgroundColor: 'white',
       
      }}
    /></NavItem>
  </Grid>
  <Grid item xs={6} md={4}>
    <NavItem><Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'white',
       
      }}
    /></NavItem>
  </Grid>
  <Grid item xs={6} md={8}>
    <NavItem><Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'white',
      }}
    /></NavItem>
  </Grid> */}
</Grid> 
    </div>
)}

export default AboutPage
