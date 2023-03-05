import {  Typography, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import '../App.css';
import ComboBox from '../components/ComboBox';
import DogCard from '../components/DogCard';
import DogModal from '../components/DogModal';
import { APIURI } from '../config/enviroment';
import { useFetch } from '../hooks/useFetch';

const Home = () => {

  const [subBreedSelected, setSubBreedSelected] = useState('');
  const { data, loading } = useFetch(`${APIURI}/breeds/list/all`);
  const { data: data2, loading: loading2, } = useFetch(`${APIURI}/breed/${subBreedSelected}/images`);
  const [Breeds, setBreeds] = useState([]);
  const [SubBreeds, setSubBreeds] = useState([]);
  const [images, setImages] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDog, setSelectedDog] = useState('');

  useEffect(() => {
    if (data) {
      let temp = [];
      Object.keys(data.message).forEach((d, i) => {
        temp.push({ 'label': d, 'id': i, 'subbreed': data.message[d] });
      });
      setBreeds(temp);
    }
  }, [data]);

  useEffect(() => {
    if (subBreedSelected.length > 0) {
      let temp = [];
      data2.message.forEach((info) => {
        temp.push({ 'imageUri': info, show: true });
      });
      setImages(temp);
    }
  }, [data2]);

  const subBreedHandler = (breed) => {
    //Once we selecet a breed all sub breeds are set to an empty array
    setSubBreeds([]);
    if (breed == null) {
      setImages([]);
      setSubBreedSelected(null);
      return;
    }
    setSubBreedSelected(breed.label);
    const sub = breed.subbreed.filter(a => { return a });
    //If this breed has sub breeds they are going to be set in the SubBreeds;
    sub.length > 0 && setSubBreeds(sub);
  }

  const imageFilterHandler = (val) => {
    let temp = [...images];
    temp.forEach((image) => {
      //Every image diferent from the selected breed won't be shown
      if (!image.imageUri.includes(val)) {
        image.show = false;
      }
      if (val == null) {
        //If there is no selection for sub breed all images will be shown
        image.show = true;
      }
    });
    setImages(temp);
  }

  const modalHandler = (uri) => {
    setSelectedDog(uri);
    setOpenModal(true)
  }

  return (
    <div className="App">
      <div className='puppies'>
        <Typography variant='h3' color={'#FFFF'} sx={{ textShadow: '1px 0 black, 0 1px black, 1px 0 black, 0 -1px black' }}>Find your new best friend</Typography>
      </div>

      <div className='comboBox'>
        <ComboBox
          Label='Dog breed'
          ListOfItems={Breeds}
          OnChangeHandler={(_event, value) => { subBreedHandler(value); }}
          Loading={loading}
        />
        {SubBreeds.length > 0 &&
          <ComboBox
            Label='Dog Subbreed'
            ListOfItems={SubBreeds}
            OnChangeHandler={(_event, value) => { imageFilterHandler(value); }}
            Loading={loading2}
          />
        }
      </div>


      <header className="App-header">
        {subBreedSelected != null ? <Typography variant='h3' color={'#FFFF'}>{subBreedSelected.toUpperCase()}</Typography> : null}
      </header>
      <div>
        <Grid container spacing={2} alignItems={'center'} sx={{ marginTop: '20px',  justifyContent:'center', }}>
          {images.map((image, index) => {
            if (image.show)
              return (
                <DogCard
                  key={index}
                  ImageUri={image.imageUri}
                  ModalHandler={modalHandler}
                />
              )
          })}
        </Grid>
      </div>

      {selectedDog.length > 0
        ?
        <DogModal
          ImageUri={selectedDog}
          Open={openModal}
          Close={() => setOpenModal(false)}
        />
        :
        null
      }
    </div>
  )
}

export default Home;