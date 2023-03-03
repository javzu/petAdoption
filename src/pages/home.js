import { Button, Typography } from '@mui/material';
import '../App.css';

const Home=()=>{
    
    return(
        <div className="App">
        <header className="App-header">
         <Typography variant='h2' component={'h1'}>Find your new best friend</Typography>
         <Button>Want to help us?</Button>
        </header>
      </div>
    )
}

export default Home;