import { Box } from '@material-ui/core'
import React, { useRef } from 'react';
import ResultHeader from '../../../components/resultNavBar'
import BodyGhq from './body'


const ResultGhq = () => {

  return  (
    <div>
      <ResultHeader/>
      <BodyGhq />
    </div>
  )
}

export default ResultGhq