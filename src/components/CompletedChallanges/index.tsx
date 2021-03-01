import { useContext } from 'react'
import { ChallangesContext } from '../../context/ChallangesContext'
import styles from './index.module.css'

export default function CompletedChallanges() {
	const { challangesCompleted } = useContext(ChallangesContext);

	return (
		<div className={styles.CompletedChallanges}>
			<span>
				Desafios completos
			</span>
			<span>
				{challangesCompleted}
			</span>
		</div>
	)
}