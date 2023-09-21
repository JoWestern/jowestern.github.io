import * as React from 'react'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Avatar,
    Grid,
    Box,
    Divider,
} from '@mui/material'
import data from '../assets/profile.json'
import { Phone, Home, Email, Person } from '@mui/icons-material'

const styles = {
    avatar: {
        width: '100%',
        height: '100%',
    },
}

export default function ProfileCard() {
    return (
        <Card>
            <Avatar
                alt="Joachim Western"
                src="src/assets/avatar.jpg"
                sx={styles.avatar}
                variant="rounded"
            />
            <CardContent>
                <Grid container direction="column">
                    <Grid item sx={{ textAlign: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.name}
                        </Typography>
                        <Divider sx={{ m: 1 }} />
                    </Grid>
                    <Grid item container spacing={1} alignItems="center">
                        <Grid item>
                            <Person fontSize="small" />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="text.secondary">
                                {data.birth}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={1} alignItems="center">
                        <Grid item>
                            <Phone fontSize="small" />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="text.secondary">
                                {data.phone}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={1} alignItems="center">
                        <Grid item>
                            <Email fontSize="small" />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="text.secondary">
                                {data.mail}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={1} alignItems="center">
                        <Grid item>
                            <Home fontSize="small" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body2" color="text.secondary">
                                {data.address}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data.postcode}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
