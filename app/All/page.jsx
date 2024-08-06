"use client";
import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

const CardContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(4),
  padding: theme.spacing(4),
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  '@media (min-width: 800px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));


const CustomCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  //overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    '& .hoverImage': {
      opacity: 1,
    },
    '& .mainImage': {
      opacity: 0,
    },
  },
}));

const ImageContainer = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
});

const MainImage = styled(CardMedia)({
  transition: 'opacity 0.5s ease-in-out',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  opacity: 1,
});

const HoverImage = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  opacity: 0,
  transition: 'opacity 0.5s ease-in-out',
  zIndex: 1,
});

const CustomCardContent = styled(CardContent)({
  bottom : 0,
  left: 0,
  width:"100%",
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  textAlign: 'center',
  position: 'absolute',
  zIndex: 2,
});

const GameCard = ({ mainImage, hoverImage, title }) => (
  <CustomCard>
    <ImageContainer>
      <MainImage className="mainImage" component="img" image={mainImage} />
      <HoverImage className="hoverImage" src={hoverImage} alt="Hover Image" />
    </ImageContainer>
    <CustomCardContent>
      <Typography variant="h4">{title}</Typography>
    </CustomCardContent>
  </CustomCard>
);

const CardDisplay = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const res = await fetch('/data/games.json');
      const data = await res.json();
      setGames(data);
    };

    fetchGames();
  }, []);

  return (
    <CardContainer>
      {games.map((game) => (
        <GameCard
          key={game.id}
          mainImage={game.image}
          hoverImage={game.hoverimage}
          title={game.title}
        />
      ))}
    </CardContainer>
  );
};

export default CardDisplay;