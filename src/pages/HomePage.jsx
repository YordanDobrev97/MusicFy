import { Box } from '@mui/material'

import MusicCard from '../components/MusicCard';

function HomePage() {
  const user = useSelector((state) => state.user.user)

  return (
    <Box sx={{textAlign: 'center', paddingLeft: 2}}>
      <h1>Home Page</h1>

      <MusicCard title='Torino & Pashata - Добър вечер' image='https://i.ytimg.com/vi/7GxxI0W3API/maxresdefault.jpg'/>
    </Box>
  )
}

export default HomePage
