import styles from './index.module.css'
import { useContext } from 'react'
import { ChallangesContext } from '../../context/ChallangesContext'
import { CountdownContext } from '../../context/CountdownContext'

export default function ChallangeBox() {
	const { activeChallange, resetChallange, completeChallange } = useContext(ChallangesContext)
	const { resetCountdown } = useContext(CountdownContext)

	function handleChallangedSucceeded() { 
		completeChallange()
		resetCountdown()
	}

	function handleChallangedFailed() { 
		resetChallange()
		resetCountdown()
	}

	return (
		<div className={styles.ChallangeBox}>
			{
				activeChallange ? (
					<div className={styles.ChallangeBoxActive}>
						<header className={styles.ChallangeBoxActiveHeader}>
							Ganhe {activeChallange.amount} xp
							</header>

						<main className={styles.ChallangeBoxActiveMain}>
							<img src={`icons/${activeChallange.type}.svg`} />
							<strong className={styles.ChallangeBoxActiveMainTitle}>
								Novo desafio
							</strong>
							<p className={styles.ChallangeBoxActiveMainDescription}>
								{activeChallange.description}
							</p>
						</main>

						<footer 	className={styles.ChallangeBoxActiveFooter}>
							<button
							type="button"
							className={styles.ChallangeBoxActiveFailedButton}
							onClick={handleChallangedFailed}
							>
								Falhei
							</button>
							<button
							type="button"
							className={styles.ChallangeBoxActiveSucceededButton}
							onClick={handleChallangedSucceeded}
							>
								Completei
							</button>
						</footer>
					</div>
				) : (
					<div className={styles.ChallangeBoxNotActive}>
						<strong className={styles.ChallangeBoxNotActiveTitle}> 
							Finalize um ciclo <br /> para receber um desafio 
						</strong>
						<p className={styles.ChallangeBoxNotActiveDescription}>
							<img src="icons/level-up.svg" alt="level up"/>
							Avance de level completando desafios
						</p>
					</div>
				)
			}
		</div>
	)
}