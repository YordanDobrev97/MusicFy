import { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    IconButton,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const SongCard = ({ title, image }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <Container display='flex'>
            <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    image={image}
                    alt={`${title} cover`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton aria-label="play/pause">
                        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>
                </CardActions>
            </Card>
        </Container>
    );
};

SongCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default SongCard;