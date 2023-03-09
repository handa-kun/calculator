import { ActionsProps } from './Actions.props';
import styles from './Actions.module.css';
import { Button } from '../Button/Button';

export const Actions = ({ children, className, ...props }: ActionsProps): JSX.Element => {

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
                    >
                        {btn}
                    </Button>
                )
            })}
        </div>
    )
};