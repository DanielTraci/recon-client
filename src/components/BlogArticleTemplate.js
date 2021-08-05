import React from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    header: {
        position: "relative",
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    subheader: {
        marginBottom: theme.spacing(10),
        marginTop: theme.spacing(10),
    },
    cardColor: {
        backgroundColor: "#2D2D2D",
        borderColor: "#0000ff"
    },
    sectionTitles: {
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(10),
    },
    outlinedbuttons: {
        '&:hover': {
            color: '#C01F24'
        }
    },
    button: {
        marginTop: theme.spacing(2)
    },
}));

export default function BlogArticleTemplate({ history, content }) {
    const { title } = useParams()
    const classes = useStyles();
    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div  >

            {
                content.filter(article => article.title === title)
                    .map((article, index) => (
                        <span key={index}>
                            <Grid container spacing={4} className={classes.header}>
                                <Grid item xs={12} >
                                    <Typography variant="h3" color="primary" gutterBottom>
                                        {article.title}
                                    </Typography>
                                    <Typography variant="h5" color="error" paragraph>
                                        Author: {article.author}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="primary" dangerouslySetInnerHTML={{ __html: article["bodyContent"] }}></Typography>
                        </span>
                    ))
            }
            <Grid container spacing={4} className={classes.subheader}
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={12} sm={8}>
                    <Box display="flex" justifyContent="center" >
                        <Typography variant="h4" color="primary" >
                            Do you wear a black hoodie and think of publishing something?
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Box display="flex" justifyContent="center">
                        <Button className={clsx(classes.outlinedbuttons, classes.button)} variant="outlined" size="large" color="primary" onClick={() => handleButtonClick("/contact")} >Get in touch with us</Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

