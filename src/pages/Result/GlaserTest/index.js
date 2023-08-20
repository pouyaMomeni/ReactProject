import { Box } from '@material-ui/core'
import React from 'react'
import ResultHeader from '../../../components/resultNavBar'
import BodyGlaser from './body'

const ResultGLaser = () => {
  return (
    <Box>
        <ResultHeader/>
        <BodyGlaser/>
    </Box>
  )
}

export default ResultGLaser