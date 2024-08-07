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
    fontSize: '2rem',  // Default font size
    [theme.breakpoints.up('sm')]: {
        fontSize: '3rem',  // Small screens and up: larger font size
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '4rem',  // Medium screens and up: larger font size
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '6rem',  // Large screens and up: largest font size
    },
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    textAlign: 'start',
    padding: theme.spacing(3),
}));

const DetailSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    '& h3': {
        marginBottom: theme.spacing(1),
        fontSize: '1.5rem',  // Default font size
        [theme.breakpoints.up('sm')]: {
            fontSize: '2rem',  // Small screens and up: larger font size
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem',  // Medium screens and up: larger font size
        },
    },
    '& div': {
        marginBottom: theme.spacing(2),
    }
}));

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
    fontSize: '1rem',  // Default font size
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.25rem',  // Small screens and up: larger font size
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',  // Medium screens and up: larger font size
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '2rem',  // Large screens and up: largest font size
    },
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
                    <ResponsiveTypography>Loading...</ResponsiveTypography>
                </ContentOverlay>
            </MainBox>
        );
    }

    return (
        <>
            <MainBox component="section">
                <img src={gameInfo.image} alt={gameInfo.name} />
                <ContentOverlay>
                    <Typography variant='h3'>{gameInfo.title}</Typography>
                    <ResponsiveTypography>{gameInfo.description}</ResponsiveTypography>
                    <br></br>
                    <ResponsiveTypography>{gameInfo.awards}</ResponsiveTypography>
                </ContentOverlay>
            </MainBox>
            <MainBox component="section">
                <img src={gameInfo.hoverimage} alt={gameInfo.name} />
                <ContentOverlay>
                    <DetailSection>
                        <ResponsiveTypography>{gameInfo.type}</ResponsiveTypography>
                        <div>
                            <ResponsiveTypography>Platforms:</ResponsiveTypography>
                            {gameInfo.platforms.map((platform, index) => (
                                <ResponsiveTypography key={index}>{platform}</ResponsiveTypography>
                            ))}
                        </div>
                        <ResponsiveTypography>{gameInfo.totalDownloads} Total Downloads</ResponsiveTypography>
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