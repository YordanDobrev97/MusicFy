import { Container, Card, CardContent, CardMedia, Typography } from '@mui/material';

import useFetchSongs from '../../customHooks/useFetchSongs';

function HomePage() {
  const { songs, isLoading, error } = useFetchSongs({ url: 'http://localhost:5259/api/v1/topSongs' });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {songs.map((song) => (
        <Card key={song.id} sx={{ maxWidth: 345, m: 2 }}> 
          <CardMedia
            component="img"
            sx={{ width: '200px', height: '200px' }}
            image={song.imageUrl}
            alt={song.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {song.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {song.artist}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default HomePage;