import { useContext } from 'react'
import { ChallangesContext } from '../../context/ChallangesContext'
import styles from './index.module.css'

export default function Profile() {
	const { level } =  useContext(ChallangesContext)
	return (
		<div className={styles.Profile}>
			<img className={styles.ProfileAvatar} src={'https://github.com/caiotriana.png'} alt={'Caio'} />
			<div className={styles.ProfileDescription}>
				<strong>
					Caio Triana
				</strong>
				<p>
					<img src={'icons/level.svg'} alt={'level'}/>
					Level {level}
				</p>
			</div>
		</div>
	)
}