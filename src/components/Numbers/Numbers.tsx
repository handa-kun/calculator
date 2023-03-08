import { NumbersProps } from './Numbers.props';
import styles from './Numbers.module.css';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { CalcActionTypes } from '../../redux/types/math';

export const Numbers = ({ className, ...props }: NumbersProps): JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();

    const add = (value: number | string) => {
        dispatch({ type: CalcActionTypes.ADD, payload: value })
    };

    const btnValues = [
        [7, 8, 9],
        [4, 5, 6],
        [1, 2, 3],
        [0, ',']
    ]

    return (
        <div className={styles.wrapperNumber}>
            {btnValues.flat().map((btn, i) => {
                return (
                    <Button
                        key={i}
                        appearance='primary'
                        className={cn(styles.number, {
                            [styles.number0]: btn === 0
                        })}
                        value={btn}
                        onClick={() => {
                            add(btn)
                        }}
                    >
                        {btn}
                    </Button>
                )
            })}
        </div>
    )
};