import { DropProps } from './Drop.props';
import styles from './Drop.module.css';
import { ReactComponent as ImageIcon } from './image.svg';


export const Drop = ({ className, ...props }: DropProps): JSX.Element => {
    return (
        <div
            className={styles.drop}
        >
            <div>
                <ImageIcon />
            </div>
            <div className={styles.description}>
                <span>Перетащите сюда</span>
                <p>любой элемент из левой панели</p>
            </div>
        </div>
    )
};