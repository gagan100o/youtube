import { Navbar,Feed,SearchFeed, ChannelDetail, VideoDetail} from './Components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material';

const App = () => {
    return (

        <BrowserRouter>
            <Box m={-1} sx={{ backgroundColor: '#000' }}>
                <Navbar />
                <Routes>
                    
                    <Route path='/' exact element={<Feed />} />
                    <Route path='/video/:id'  element={<VideoDetail/>} />
                    <Route path='/channel/:id'  element={<ChannelDetail/>} />
                    <Route path='/search/:searchTerm'  element={<SearchFeed/>} />
                    
                </Routes>
            </Box>
        </BrowserRouter>
    )
}

export default App