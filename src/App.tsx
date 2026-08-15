import './App.css'
import Waves from './blocks/Backgrounds/Waves/Waves.tsx'
import ProfileCard from './blocks/Components/ProfileCard/ProfileCard.tsx'
import grain from './assets/jeb.svg'

function App() {
  return (
    <>
      <Waves
        lineColor="#fff"
        backgroundColor="rgba(0, 0, 0, 1)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />

      <ProfileCard
        name="SalahDin A. Rezk"
        title="Software Engineer"
        handle="salastro"
        status="Stil alive"
        avatarUrl="salah.png"
        grainUrl={grain}
        innerGradient="radial-gradient(circle at center, #ffffff00, #00000000)"
        showBehindGradient={false}
        showUserInfo={true}
        enableTilt={true}
        contactText="Contact Me"
        mail="s-salahdin.rezk@zewailcity.edu.eg"
        phone="+201094994995"
        address="Alpha Centauri"
        github="salastro"
        linkedin="salastro"
      />
    </>
  )
}

export default App
