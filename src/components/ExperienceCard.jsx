import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import data from '../assets/experience.json'
import { Container, Box, Divider, Grid } from '@mui/material'
import PercentageCircle from './PercentageCircle'
import 'react-circular-progressbar/dist/styles.css'
// import PercentageCircle from 'src/assets/components/PercentageCircle'

export default function ExperienceCard() {
    return (
        <Card>
            <CardContent>
                <Container sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                        {data.title}
                    </Typography>
                    <Divider sx={{ m: 1 }} />
                </Container>
                {data &&
                    data.experience.map((object, i) => {
                        return (
                            <Container key={i}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Typography variant="h5" color="black">
                                        {object.title}
                                    </Typography>
                                    <Typography variant="h5" color="black">
                                        {object.year}
                                    </Typography>
                                </Box>
                                {object.prosjekter.map((prosjekt, j) => {
                                    return (
                                        <Container key={j}>
                                            <Typography
                                                variant="body2"
                                                color="black"
                                            >
                                                {prosjekt.prosjekt.field}
                                            </Typography>
                                            <Container>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {prosjekt.prosjekt.tasks}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    gutterBottom
                                                ></Typography>
                                            </Container>
                                        </Container>
                                    )
                                })}
                                <Divider sx={{ m: 1 }} />
                            </Container>
                        )
                    })}
            </CardContent>
        </Card>
    )
}
