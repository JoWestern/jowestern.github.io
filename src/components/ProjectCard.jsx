import {
    CardContent,
    Card,
    Typography,
    Grid,
    Container,
    Divider,
    Button,
    Box,
    List,
    ListItem,
    ListItemText,
} from '@mui/material'
import PercentageCircle from './PercentageCircle'
import CanvasComponent from './ThreeJS/CanvasComponent'
import data from '../assets/projects.json'
import React from 'react'

export default function ProjectCard() {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Card>
                    <CardContent>
                        <Container sx={{ textAlign: 'center' }}>
                            <Typography variant="h4" gutterBottom>
                                {data.title}
                            </Typography>
                            <Divider sx={{ m: 1 }} />
                        </Container>
                        {/* <Container>
                    <Typography variant="h5" color="black">
                        {data.skills.title}
                    </Typography>
                    <Container>
                        <Grid
                            container
                            spacing={2}
                            alignItems="center"
                            justifyContent="space-around"
                        >
                            {data.skills.options.map((skills, i) => {
                                return (
                                    <>
                                        <Grid item xs={6} key={i}>
                                            <Typography
                                                variant="body3"
                                                color="text.secondary"
                                                gutterBottom
                                                key={i}
                                            >
                                                {skills.skill}
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={1.5}
                                            sm={1.5}
                                            md={1.5}
                                            lg={1.5}
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                            }}
                                            key={i}
                                        >
                                            <PercentageCircle
                                                percentage={skills.number}
                                            />
                                        </Grid>
                                    </>
                                )
                            })}
                        </Grid>
                    </Container>
                </Container>
                <Divider sx={{ m: 1 }} /> */}
                        <Container>
                            <Grid container rowSpacing={4}>
                                {data.links.map((project, i) => {
                                    return (
                                        <Grid container item key={i}>
                                            <Typography
                                                variant="h5"
                                                color="black"
                                            >
                                                {project.name}
                                            </Typography>
                                            <Grid container item spacing={4}>
                                                <Grid item>
                                                    <Container>
                                                        <Typography
                                                            variant="body1"
                                                            color="black"
                                                        >
                                                            {project.info}
                                                        </Typography>
                                                    </Container>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Typography
                                                    variant="h6"
                                                    color="black"
                                                    marginTop={1}
                                                >
                                                    {project.goalTitle}
                                                </Typography>
                                            </Grid>
                                            <Container key={i}>
                                                {project.goals.map(
                                                    (goal, i) => {
                                                        return (
                                                            <Typography
                                                                marginTop={1}
                                                            >
                                                                {goal.goal}
                                                            </Typography>
                                                        )
                                                    }
                                                )}
                                            </Container>
                                            <Grid
                                                container
                                                item
                                                direction={'column'}
                                                marginTop={1}
                                            >
                                                <Grid item>
                                                    <Button
                                                        size="medium"
                                                        href={project.homepage}
                                                    >
                                                        {project.homepageName}
                                                    </Button>
                                                </Grid>
                                                <Grid item>
                                                    <Button
                                                        size="medium"
                                                        href={project.link}
                                                    >
                                                        {project.name}
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Container>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
