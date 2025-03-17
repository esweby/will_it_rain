import classes from './DateHeader.module.css';

interface DateHeaderProps {
    date: Date;
}

const DateHeader = ({ date }: DateHeaderProps) => {
    return(
        <h2 className={classes.title}>{date.toLocaleDateString()}</h2>
    )
}

export default DateHeader;
