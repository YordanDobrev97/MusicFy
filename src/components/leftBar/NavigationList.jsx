import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const NavigationList = ({ links }) => (
    <List>
        {links.map(({ text, icon: Icon, to }) => (
            <ListItem button component={Link} to={to} key={text}>
                <ListItemIcon>
                    <Icon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: 'white' }} />
            </ListItem>
        ))}
    </List>
);

export default NavigationList;