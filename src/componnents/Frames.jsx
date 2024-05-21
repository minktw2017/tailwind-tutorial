import React from 'react'

const Frames = () => {

  const frames = [
    { title: '𝟰𝗮𝗺.', src: 'https://www.youtube.com/embed/EykOsPxir8k?si=HovicB7GiQbDYuRi?origin=https://cybermink.com', id: 0 },
    { title: 'Calm Your Mind 😌🌳 Lofi hip hop radio / chillout mix ~ Stress Relief, Relaxing Music', src: 'https://www.youtube.com/embed/U08pLjUMuAw?si=UesQDA0NhsUz5qmH?origin=https://cybermink.com', id: 1 },
    { title: "ＩＴ'Ｓ　ＯＫＡＹ,　ＣＡＬＭ　ＤＯＷＮ", src: 'https://www.youtube.com/embed/1BU34QxeCqs?si=sLYvfUm624wErVuj?origin=https://cybermink.com', id: 2 },
    { title: 'Blade Runner Ambient (playlist)', src: 'https://www.youtube.com/embed/4s_wGv--mRE?si=dXvfk_rk04LPwrD2?origin=https://cybermink.com', id: 3 },
    { title: 'Lofi Hip Hop City 1980s 🌃 Lofi Chill Night ☁️ Beats To Relax / Study', src: 'https://www.youtube.com/embed/gFqDrZ--Ttc?si=esvv6QAcMAaDs9vn?origin=https://cybermink.com', id: 4 },
    { title: 'Music for comfort & concentration - Chillout', src: 'https://www.youtube.com/embed/DXbfFwkii14?si=A-lcD2O5efVoHaIm?origin=https://cybermink.com', id: 5 },
    { title: 'Lo-fi that makes you feel light as the wind', src: 'https://www.youtube.com/embed/aLqpUVqHizk?si=_iW7P4FD7SutSA0T?origin=https://cybermink.com', id: 6 },
    { title: 'NOUS UNDERGROUND - 灯火阑珊处 KILLA4NIA ft. REBEL MAN', src: 'https://www.youtube.com/embed/FrsMrsWk5rc?si=aHUmYtzacQBycI4T?origin=https://cybermink.com', id: 7 }
  ]

  const frameList = frames.map(frame => 
    <div className='aspect-video' key={frame.id}>
      <iframe
        className='w-full h-full'
        src={frame.src}
        title={frame.title}
        frameborder='0'
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen
      ></iframe>
    </div>
    )

  return (
    <div className='w-[1200px] mx-auto mb-4 grid rounded-2xl overflow-hidden lg:grid-cols-4 gap-1 md:grid-cols-2 sm:grid-cols-1'>
      {frameList}
    </div>
  )
}

export default Frames