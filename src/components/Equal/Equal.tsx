import { EqualProps } from './Equal.props';
import styles from './Equal.module.css';
import { Button } from '../Button/Button';

export const Equal = ({ className, ...props }: EqualProps): JSX.Element => {
    return (
        <div className={styles.equal}>
            <Button className={styles.equalButton} appearance='indigo'>=</Button>
        </div>
    )
};