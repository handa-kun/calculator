import { TotalProps } from './Total.props';
import styles from './Total.module.css';
import { useState } from 'react';


export const Total = ({ className, ...props }: TotalProps): JSX.Element => {
    const [total, setTotal] = useState<number>(0);

    return (
        <div className={styles.total}>
            {total}
        </div>
    )
};