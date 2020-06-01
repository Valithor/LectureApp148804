import React from 'react';
import postService from '../../service/posts.service';
import {IPostsProps, IPostResponse} from '../../service/posts.service';
import {Grid, Typography, Paper, makeStyles, createStyles} from '@material-ui/core/';
import {useParams} from 'react-router-dom';

const useStyles= makeStyles((theme: any)=>
createStyles({
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 900,
    },
    bg: {
        minHeight: '100%',
              height: 'auto',
            backgroundImage: `url(${'https://uwalls.pl/gallery/207/16314_thumb_b600.jpg'})`,
            backgroundSize: 'cover',
    },
}),
);

const Home = () => {
    const classes = useStyles();
    const {id}=useParams<{id: string}>();

    const [postInfo, setPostInfo] = React.useState<IPostsProps>();
    React.useEffect(()=>{
        postService.getAllPosts().then(resp=>{            
            setPostInfo(resp);
            console.log(resp);
        });
    }, []);


    return (
        <div className={classes.bg}>
           
                                {!!postInfo && postInfo?.posts.map((post: any)=>(
                                <Grid item xs>
                                <Typography variant="subtitle1" gutterBottom>
                                {post.title}
                                </Typography>  
                                <Typography variant="subtitle1" gutterBottom>
                                {post.body}
                                </Typography>  
                                <span>&nbsp;&nbsp;</span>                                </Grid>  
                                ))} 
        
        </div>
    );
};

export default Home;