import { useContext } from 'react'
import { ChallangesContext } from '../../context/ChallangesContext'
import styles from './index.module.css'

export default function LevelUpModal() {
	const { level, closeLevelUpModal } = useContext(ChallangesContext)
	
	return (
		<div className={styles.LevelUpModal}>
			<div className={styles.LevelUpModalContent}>
				<header className={styles.LevelUpModalHeader}>
					{level}
				</header>
				<strong className={styles.LevelUpModalTitle}>
					Parabéns
				</strong>
				<p className={styles.LevelUpModalDescription}>
					Você alcançou um novo level.
				</p>
				<button 
					className={styles.LevelUpModalButton}
					type={'button'}
					onClick={closeLevelUpModal}
				>
					<img src={'/icons/close.svg'} alt={'close modal'} />
				</button>
			</div>
		</div>
	)
}