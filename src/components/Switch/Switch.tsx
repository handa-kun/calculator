import { SwitchProps } from './Switch.props';
import styles from './Switch.module.css';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { ReactComponent as EyeIcon } from './eye.svg';
import { ReactComponent as ArrowsIcon } from './arrows.svg';
import { useState } from 'react';

export const Switch = ({ className, ...props }: SwitchProps): JSX.Element => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className={styles.switch}>
            <Button className={styles.switchButton} appearance='primary'>
                <EyeIcon className={cn(styles.eye, {
                    [styles.active]: !active
                })} />

                Runtime
            </Button>
            <Button className={cn(styles.switchButton, {
                [styles.disabled]: !active,
            })} appearance='primary'>
                <ArrowsIcon className={cn(styles.arrow, {
                    [styles.active]: active
                })} />
                Constructor
            </Button>
        </div>
    )
};