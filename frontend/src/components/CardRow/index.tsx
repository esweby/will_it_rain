import classes from './CardRow.module.css';

interface CardRowProps {
  description: string;
  value: string;
}

const CardRow = ({ description, value }: CardRowProps) => {
  return (
    <div className={classes.row}>
      <span className={classes.title}>{description}</span>
      <span className={classes.value}>{value}</span>
    </div>
  );
};

export default CardRow;
