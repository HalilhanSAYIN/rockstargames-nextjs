"use client";
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const MainBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: 'black',
    position: 'relative',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
}));

const ContentOverlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    textAlign: 'start',
    padding: theme.spacing(3),
}));

const DetailSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    '& h3': {
        marginBottom: theme.spacing(1),
    },
    '& div': {
        marginBottom: theme.spacing(2),
    }
}));

const GameDetail = () => {
    const [gameInfo, setGameInfo] = useState(null);
    const pathname = usePathname();
    const gameId = pathname.split('/').pop();

    useEffect(() => {
        const fetchGameInfo = async () => {
            const res = await fetch('/data/games.json');
            const data = await res.json();
            const game = data.find((game) => game.id === gameId);
            setGameInfo(game);
        };

        if (gameId) {
            fetchGameInfo();
        }
    }, [gameId]);

    if (!gameInfo) {
        return (
            <MainBox component="section">
                <ContentOverlay>
                    <Typography>Loading...</Typography>
                </ContentOverlay>
            </MainBox>
        );
    }

    return (
        <>
            <MainBox component="section">
                <img src={gameInfo.image} alt={gameInfo.name} />
                <ContentOverlay>
                    <Typography variant="h1" sx={{ mb: 2 }}>{gameInfo.title}</Typography>
                    <Typography variant="h4" sx={{ mb: 2 }}>{gameInfo.description}</Typography>
                    <Typography variant="h4">{gameInfo.awards}</Typography>
                </ContentOverlay>
            </MainBox>
            <MainBox component="section">
                <img src={gameInfo.hoverimage} alt={gameInfo.name} />
                <ContentOverlay>
                    <DetailSection>
                        <Typography variant="h4" sx={{ mb: 1 }}>{gameInfo.type}</Typography>
                        <div>
                            <Typography variant="h4">Platforms:</Typography>
                            {gameInfo.platforms.map((platform, index) => (
                                <Typography key={index} variant="h4">{platform}</Typography>
                            ))}
                        </div>
                        <Typography variant="h4" sx={{ mb: 2 }}>{gameInfo.totalDownloads} Total Downloads</Typography>
                        <MuiLink
                            component={Link}
                            href={gameInfo.wiki}
                            target='_blank'
                            variant="h4"
                            sx={{ color: 'lightblue' }}
                        >
                            Wiki
                        </MuiLink>
                    </DetailSection>
                </ContentOverlay>
            </MainBox>
        </>
    );
};

export default GameDetail;