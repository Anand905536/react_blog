import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({icon,text1,text2}) {
  return (
    <Card  className="card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={icon}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {text1}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text2}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}