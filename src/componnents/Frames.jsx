import React from 'react'

const Frames = () => {

  const frames = [
    { title: 'Best of Hip-hop /Rap Music MIX 2024 Mega Mix | Week #29', src: 'https://www.youtube.com/watch?v=_qWppoM9hDE', id: 0 },
    { title: 'Calm Your Mind 😌🌳 Lofi hip hop radio / chillout mix ~ Stress Relief, Relaxing Music', src: 'https://www.youtube.com/watch?v=QTQjcvvTxUs', id: 1 },
    { title: 'Night lofi playlist • lofi music | chill beats to relax/study to', src: 'https://www.youtube.com/watch?v=cIZhlFIyJ_Y', id: 2 },
    { title: 'Last breeze of the evening ● lofi hip hop mix / stress relief ( pt.2 )', src: 'https://www.youtube.com/watch?v=UMhOGEo8O5A', id: 3 },
    { title: '『深夜2時、レトロで大人な世界に迷い込む』Lofi Chill Bgm', src: 'https://www.youtube.com/watch?v=ZBrmNO92OTI', id: 4 },
    { title: '【Jpop playlist】夜のドライブで聴きたいチルい曲| CityPop/Chill/J-POP/BGM', src: 'https://www.youtube.com/watch?v=DJ5ONzsRH_o', id: 5 },
    { title: 'City Groove Mix (bpm 84-88)', src: 'https://www.youtube.com/watch?v=fnwZ1ydd0qE', id: 6 },
    { title: 'NOUS UNDERGROUND - 灯火阑珊处 KILLA4NIA ft. REBEL MAN', src: 'https://www.youtube.com/watch?v=FrsMrsWk5rc', id: 7 }
  ]

  const content = () => {
    return frames.map((data) => {
      <iframe
        className='w-full h-full'
        src={data.src}
        title={data.title}
        id={data.id}
        frameborder='0'
      >
      </iframe>
    })
  }

  return (
    <div className='grid grid-cols-4 gap-1'>
      {content}
    </div>
  )
}

export default Frames