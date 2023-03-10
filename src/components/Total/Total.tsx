import { TotalProps } from './Total.props';
import styles from './Total.module.css';
import { useTypedSelector } from '../hooks/useTypedSelector';


export const Total = ({ className, ...props }: TotalProps): JSX.Element => {
    const total = useTypedSelector(state => state.math.display);
    const a = useTypedSelector(state => state.math.accumulated)
    console.log(a);

    return (
        <div className={styles.total}>
            {total}
        </div>
    )
};