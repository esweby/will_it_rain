import thermometerIcon from '../../assets/thermometer.png'
import classes from './Temperature.module.css'

interface TemperatureProps {
    temperature: number;
}

const Temperature = ({ temperature }: TemperatureProps) => {
    return(
        <p className={classes.temperature}><img src={thermometerIcon} alt="Thermometer" /> {temperature}&#176;</p>
    )
}

export default Temperature;
