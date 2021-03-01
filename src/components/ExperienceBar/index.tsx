import { useContext } from 'react'
import { ChallangesContext } from '../../context/ChallangesContext'
import styles from './index.module.css'

export default function ExperienceBar() {
	const { currentExperience, experienceToNextlevel } = useContext(ChallangesContext);

	const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextlevel;

	return (
		<header className={styles.ExperienceBar}>
			<span className={styles.ExperienceBarLabel}>0 px</span>
			<div className={styles.ExperienceBarFill}>
				<div className={styles.ExperienceBarFillProgress} style={{width : `${percentToNextLevel}%` }} />

				<span className={styles.ExperienceBarCurrent} style={{left : `${percentToNextLevel}%` }}>
					{currentExperience} px
				</span>
			</div>
			<span className={styles.ExperienceBarLabel}>{experienceToNextlevel}px </span>
		</header>
	)
}