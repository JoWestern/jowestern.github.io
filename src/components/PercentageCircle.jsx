import * as React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'

export default function PercentageCircle(props) {
    return (
        <CircularProgressbar
            value={props.percentage}
            maxValue={100}
            text={`${props.percentage}`}
        />
    )
}
