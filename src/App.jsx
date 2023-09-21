import ProfileCard from './components/ProfileCard'
import ProjectCard from './components/ProjectCard'
import ExperienceCard from './components/ExperienceCard'
import CanvasComponent from './components/ThreeJS/CanvasComponent'
import * as React from 'react'
import { Box, Grid } from '@mui/material'

function App() {
    return (
        <Box>
            <Grid container rowSpacing={15}>
                <Grid
                    container
                    item
                    spacing={{ xs: 2, sm: 4, md: 4, lg: 6 }}
                    columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Grid item xs={3} sm={4} md={4} lg={4}>
                        <Grid container item rowSpacing={1}>
                            <Grid item>
                                <ProfileCard />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} sm={6} md={6} lg={6}>
                        <ExperienceCard />
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    spacing={{ xs: 2, sm: 4, md: 4, lg: 6 }}
                    columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <CanvasComponent />
                    </Grid>
                    <Grid item xs={5} sm={6} md={6} lg={6}>
                        <Grid container item rowSpacing={1}>
                            <Grid item>
                                <ProjectCard />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default App
