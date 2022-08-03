import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import { Container } from '@mui/material';
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage:"url(./banner2.jpg)"
    },
    bannerContent:{
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      },
  }));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
            <Typography
                variant="h2"
                style={{
                fontWeight: "bold",
                marginBottom: 15,
                fontFamily: "Montserrat",
                }}
            >
                Crypto Trading
            </Typography>
            <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
            >
                Get all the Info regarding your favorite Crypto Currency
            </Typography>
            </div>
            <Carousel />
        </Container>
    </div>
  )
}
