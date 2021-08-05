import React from 'react'
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link as RouterLink } from "react-router-dom"
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
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
        borderColor: "#C01F24",
        maxWidth: 450
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
    searchBar: {
        marginBottom: theme.spacing(10),
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#FFFFFF',
                color: 'white'
            },
            '&:hover fieldset': {
                borderColor: '#FFFFFF',
            },
        },
    },
    input: {
        color: "#FFFFFF"
    },

}));

export default function Blog({ onSearchBlog, history, content }) {
    const classes = useStyles();

    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Grid container spacing={4} className={classes.header}>
                <Grid item xs={12} >
                    <Typography variant="h3" color="primary" gutterBottom>
                        Blog
                    </Typography>
                    <Typography variant="h5" color="primary" paragraph>
                        "Here you can learn a thing or two about black hoodie fashion"
                    </Typography>
                </Grid>
            </Grid>



            <Typography color="primary" variant="body1">
                Search ...
            </Typography>
            <TextField onChange={onSearchBlog} className={classes.searchBar} id="outlined-basic" variant="outlined" fullWidth InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon color="error" />
                    </InputAdornment>
                ), className: classes.input
            }} />

            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="flex-start" spacing={5} >
                {
                    content.map((article, index) => {
                        return (
                            <div key={index}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Link component={RouterLink} to={`/blog/${article.title}`} >
                                    <Card  className={classes.cardColor} variant="outlined">
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt={article.title}
                                                height="100%"
                                                image={article.cardImage}
                                            />
                                            <CardContent>
                                                <Typography color="error" variant="h5">{article.title}</Typography>
                                                <Typography color="primary" variant="body2" paragraph>{article.introduction.substring(0, 120)}...</Typography>
                                                <Link color="error" to={`/articles/${article.id}`}>READ MORE</Link>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Grid>
                            </div>
                        )
                    })
                }
            </Grid>

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
