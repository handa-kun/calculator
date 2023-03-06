import { ActionsProps } from './Actions.props';
import styles from './Actions.module.css';
import cn from 'classnames';
import { Button } from '../Button/Button';

export const Actions = ({ children, className, ...props }: ActionsProps): JSX.Element => {
    return (
        <div className={styles.action}>
            <Button
                appearance='primary'
                className={styles.actions}>/</Button>
            <Button
                appearance='primary'
                className={styles.actions}>X</Button>
            <Button
                appearance='primary'
                className={styles.actions}>-</Button>
            <Button
                appearance='primary'
                className={styles.actions}>+</Button>
        </div>
    )
};