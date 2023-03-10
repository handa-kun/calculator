import { ActionsProps } from './Actions.props';
import styles from './Actions.module.css';
import { Button } from '../Button/Button';
import { addActionCreator } from '../../redux/reducers/mathReducer';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';

export const Actions = ({ children, className, ...props }: ActionsProps): JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();

    const update = (value: number | string) => {
        dispatch(addActionCreator(value));
    };

    const btnValues = ['/', 'x', '-', '+'];

    return (
        <div className={styles.action} draggable={true}>
            {btnValues.map((btn, i) => {
                return (
                    <Button
                        key={i}
                        appearance='primary'
                        className={styles.actions}
                        value={btn}
                        onClick={() => update(btn)}
                    >
                        {btn}
                    </Button>
                )
            })}
        </div>
    )
};