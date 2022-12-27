import Carousel from './Carousel/Carousel';
import HeroInfo from './HeroInfo/HeroInfo';
import artworksBackup from '../../../data/artworks.json';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.scss'


function Hero() {
    // UseEffect to handle data fetch of artworks here to provide for Carousel items
    const [artworks, setArtworks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchArtworks() {
        setTimeout(async () => {
            try {
                const response = await axios.get('http://localhost:8000/artworks/');
                setArtworks(response.data);
                setIsLoading(false);
            } catch (error) {
                setArtworks(artworksBackup);
                setIsLoading(false);
            }
        }, 500)
    }

    useEffect(() => {
        fetchArtworks();
    }, [])
    return (
        <section className='hero'>
            <HeroInfo />
            <Carousel items={artworks} isLoading={isLoading} />
        </section>
    );
}

export default Hero;


