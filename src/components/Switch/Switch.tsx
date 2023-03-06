import { SwitchProps } from './Switch.props';
import styles from './Switch.module.css';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { ReactComponent as EyeIcon } from './eye.svg';
import { ReactComponent as ArrowsIcon } from './arrows.svg';

export const Switch = ({ className, ...props }: SwitchProps): JSX.Element => {
    return (
        <div className={styles.switch}>
            <Button className={styles.switchButton} appearance='primary'>
                <EyeIcon />
                Runtime
            </Button>
            <Button className={cn(styles.switchButton, styles.active)} appearance='primary'>
                <ArrowsIcon />
                Constructor
            </Button>
        </div>
    )
};