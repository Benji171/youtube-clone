import React from 'react';

import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onSelectVideo} key={id} video={video}/>)

    return (
        <Grid container spaceing={10}>
            {listOfVideos}
        </Grid>
    )
}

export default VideoList;