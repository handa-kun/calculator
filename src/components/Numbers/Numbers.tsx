import { NumbersProps } from './Numbers.props';
import styles from './Numbers.module.css';
import cn from 'classnames';
import { Button } from '../Button/Button';

export const Numbers = ({ className, ...props }: NumbersProps): JSX.Element => {
    return (
        <div className={styles.wrapperNumber}>
            <Button
                appearance='primary'
                className={cn(styles.number, styles.number1)}>7</Button>
            <Button
                appearance='primary'
                className={cn(styles.number, styles.number2)}>8</Button>
            <Button
                appearance='primary'
                className={cn(styles.number, styles.number3)}>9</Button>
            <Button
                appearance='primary'
                className={cn(styles.number, styles.number4)}>4</Button>
            <Button
                appearance='primary'
                className={cn(styles.number, styles.number5)}>5</Button>
            <Button
                appearance='primary'
                className={cn(styles.number, styles.number6)}>6</Button>
            <Button
                appearance='primary'
                className={cn(styles.number, styles.number7)}>1</Button>
            <Button
                appearance='primary'
                className={cn(styles.number, styles.number8)}>2</Button>
            <Button
                appearance='primary'
                className={cn(styles.number, styles.number9)}>3</Button>
            <Button
                appearance='primary'
                className={cn(styles.number, styles.number0)}>0</Button>
            <Button
                appearance='primary'
                className={cn(styles.number, styles.numberStr)}>,</Button>
        </div>
    )
};