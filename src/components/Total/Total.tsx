import { TotalProps } from './Total.props';
import styles from './Total.module.css';


export const Total = ({ className, ...props }: TotalProps): JSX.Element => {
    return (
        <div className={styles.total}>
            0
        </div>
    )
};