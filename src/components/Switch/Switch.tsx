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
            <Button className={cn(styles.switchButton, {
                [styles.disabled]: active,
            })} appearance='primary' onClick={() => setActive(true)}>
                <EyeIcon className={cn(className, {
                    [styles.active]: !active,
                    [styles.eye]: active
                })} />

                Runtime
            </Button>
            <Button className={cn(styles.switchButton, {
                [styles.disabled]: !active,
            })} appearance='primary' onClick={() => setActive(false)}>
                <ArrowsIcon className={cn(className, {
                    [styles.active]: active,
                    [styles.arrow]: !active
                })} />
                Constructor
            </Button>
        </div>
    )
};