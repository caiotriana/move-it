import Head from 'next/head'
import { GetServerSideProps } from 'next'
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallanges from '../components/CompletedChallanges';
import Countdown from '../components/Countdown';
import ChallangeBox from '../components/ChallangeBox';

import { CountdownProvider } from '../context/CountdownContext'
import { ChallangesProvider } from '../context/ChallangesContext';


interface HomeProps { 
  level : number;
  currentExperience : number;
  challangesCompleted : number;
}

export default function Home(props : HomeProps) {
  const {
    level,
    currentExperience,
    challangesCompleted
  } = props
  return (
    <>
      <ChallangesProvider 
        level={level}
        currentExperience={currentExperience}
        challangesCompleted={challangesCompleted}
        >
        <div className={'container'}>
          <Head>
            <title>
              Início | MoveIt
        </title>
          </Head>
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallanges />
                <Countdown />
              </div>
              <div>
                <ChallangeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </ChallangesProvider>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challangesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challangesCompleted: Number(challangesCompleted),
    }
  }
}