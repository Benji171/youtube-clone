import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoList, VideoDetail } from './components'

import youtube from './api/youtube'

class App extends React.Component {
    state = {
        video: [],
        selectedVideo: null,
    }


    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyBAeNLRaYVAStwo0GWGV6Fzd_SSnCQD_Dc',
                q: searchTerm,
            }
        });

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    }

    render () {
        const { selectedVideo } = this.state;
        return(
            <Grid justify='center' spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            {/* {video list} */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;