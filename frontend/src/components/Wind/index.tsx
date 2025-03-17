import upArrow from '../../assets/upArrow.png';

import classes from './Wind.module.css'

interface WindProps {
    windSpeed: number;
    windDirection: number;
}

const Wind = ({ windSpeed, windDirection}: WindProps) => {
    return(
        <p className={classes.wind}>{`${(windSpeed / 1.609).toFixed(1)}`}mph&nbsp;<img src={upArrow} alt="arrow" style={{ transform: `rotate(${windDirection}deg)` }} /></p>        
    )
}

export default Wind;
