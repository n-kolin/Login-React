import { Container, Typography, Grid, Paper } from '@mui/material';
import { Kitchen, People, Star } from '@mui/icons-material';

const About = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: 120 }}>
      <Typography variant="h2" align="center" gutterBottom>
        About Recipe Haven
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        At Recipe Haven, we believe that cooking should be fun and accessible to everyone!
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0f8ff' }}>
            <Kitchen style={{ fontSize: 60, color: '#ff5722' }} />
            <Typography variant="h6" gutterBottom>
              Delicious Recipes
            </Typography>
            <Typography>
              Explore a variety of recipes from different cuisines that are easy to follow.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', backgroundColor: '#e0f7fa' }}>
            <People style={{ fontSize: 60, color: '#2196f3' }} />
            <Typography variant="h6" gutterBottom>
              Community Driven
            </Typography>
            <Typography>
              Join our community of food lovers and share your culinary creations!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', backgroundColor: '#ffe0b2' }}>
            <Star style={{ fontSize: 60, color: '#ffeb3b' }} />
            <Typography variant="h6" gutterBottom>
              Top Rated
            </Typography>
            <Typography>
              Discover top-rated recipes that have been loved by our users.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;