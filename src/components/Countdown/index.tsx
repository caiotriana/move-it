import { useState, useEffect, useContext } from 'react'
import { CountdownContext } from '../../context/CountdownContext';
import styles from './index.module.css'


export default function Countdown() {

	const { minutes, 
		seconds, 
		hasFinished, 
		isActive, 
		startCountdown, 
		resetCountdown } = useContext(CountdownContext)

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

	return (
		<div>
			<div className={styles.Countdown}>
				<div className={styles.CountdownNumbers}>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>
				<span className={styles.CountdownDots} >:</span>
				<div className={styles.CountdownNumbers}>
					<span>{secondLeft}</span>
					<span>{secondRight}</span>
				</div>
			</div>

			{hasFinished ? (
				<button
					disabled
					className={styles.CountdownButton}
				>
					Ciclo encerrado
				</button>
			) : <>
					{
						isActive ? (
							<button
								type={'button'}
								className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
								onClick={resetCountdown}
							>
								Abanadonar ciclo
							</button>
						) : (
								<button
									type={'button'}
									className={styles.CountdownButton}
									onClick={startCountdown}
								>
									Iniciar um ciclo
								</button>
							)
					}
				</>}
		</div>
	)
}