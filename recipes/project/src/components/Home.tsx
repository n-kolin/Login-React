import { Container, Typography, Button, Grid } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '120px' }}>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Recipe Haven
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        Discover and share your favorite recipes with our community. 
        Log in to add your own recipes or browse through the collection!
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="outlined" color="secondary" >
            <Typography variant="h2" align="center" gutterBottom>🎂</Typography>
            
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="secondary">
          <Typography variant="h2" align="center" gutterBottom>🍰</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="secondary">
          <Typography variant="h2" align="center" gutterBottom>🧁</Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;