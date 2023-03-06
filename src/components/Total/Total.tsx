import { TotalProps } from './Total.props';
import styles from './Total.module.css';
import cn from 'classnames';


export const Total = ({ className, ...props }: TotalProps): JSX.Element => {
    return (
        <div className={styles.total}>
            0
        </div>
    )
};