import React from "react";

const Frames = () => {
	const frames = [
		{
			title: "𝟰𝗮𝗺.",
			src: "https://www.youtube.com/embed/Ijyo3Vjw40Q?si=QeRuTluv_jclBlZ9&origin=https://cybermink.com&video-id=youtube_video_id&enablejsapi=1&widgetid=1&color=white&modestbranding=1&rel=0",
			id: 0,
		},
		{
			title:
				"【人生初體驗解鎖】于心抖M歷史全揭密！叫媽媽的理由原來是！？公開繩縛體驗！",
			src: "https://www.youtube.com/embed/ZeEg1etm1iE?si=kZhzDpICTh9XFro7&origin=https://cybermink.com&video-id=youtube_video_id&enablejsapi=1&widgetid=1&color=white&modestbranding=1&rel=0",
			id: 1,
		},
		{
			title:
				"突擊！女優閨房開箱 私房寫真打光拆解|開箱|av|正妹|攝影|mr渡邊【女優採訪＃1】",
			src: "https://www.youtube.com/embed/xFcKIVtu-aw?si=LGRUW_E2ookIrcu5&origin=https://cybermink.com&video-id=youtube_video_id&enablejsapi=1&widgetid=1&color=white&modestbranding=1&rel=0",
			id: 2,
		},
		{
			title: "2024 旗袍新年cosplay互動會 七位coser性感變裝！ Doban show#5",
			src: "https://www.youtube.com/embed/Q7WuqS1OJGY?si=0XbEuqJAsgoVB8Yn&origin=https://cybermink.com&video-id=youtube_video_id&enablejsapi=1&widgetid=1&color=white&modestbranding=1&rel=0",
			id: 3,
		},
		{
			title: "『寫真放送』強迫發育過度良好的妹妹拍xx寫真！/妹妹/主題/體育服",
			src: "https://www.youtube.com/embed/J4lU6g2tXCc?si=H47YEqEzEb7Facpn&origin=https://cybermink.com&video-id=youtube_video_id&enablejsapi=1&widgetid=1&color=white&modestbranding=1&rel=0",
			id: 4,
		},
		{
			title:
				"【圈內祕辛爆料】互動會COSER採訪！野外x出拍攝募集 最討厭哪位攝師！？|cosplay|爆料|團拍",
			src: "https://www.youtube.com/embed/Zk6DYJJ6PBc?si=bwkAk9sXCYo9tyb2&origin=https://cybermink.com&video-id=youtube_video_id&enablejsapi=1&widgetid=1&color=white&modestbranding=1&rel=0",
			id: 5,
		},
		{
			title: "Lo-fi that makes you feel light as the wind",
			src: "https://www.youtube.com/embed/aLqpUVqHizk?si=_iW7P4FD7SutSA0T&origin=https://cybermink.com&video-id=youtube_video_id&enablejsapi=1&widgetid=1&color=white&modestbranding=1&rel=0",
			id: 6,
		},
		{
			title: "NOUS UNDERGROUND - 灯火阑珊处 KILLA4NIA ft. REBEL MAN",
			src: "https://www.youtube.com/embed/FrsMrsWk5rc?si=aHUmYtzacQBycI4T&origin=https://cybermink.com&video-id=youtube_video_id&enablejsapi=1&widgetid=1&color=white&modestbranding=1&rel=0",
			id: 7,
		},
	];

	const frameList = frames.map((frame) => (
		<div className="aspect-video" key={frame.id}>
			<iframe
				className="w-full h-full rounded-lg overflow-x-hidden lg:rounded-none"
				src={frame.src}
				title={frame.title}
				loading="lazy"
				frameborder="0"
				referrerpolicy="strict-origin-when-cross-origin"
				autoplay
				clipboard-write
				encrypted-media
				gyroscope
				picture-in-picture
				allowfullscreen="1"
			></iframe>
		</div>
	));

	return (
		<div
			className="
      w-full
      mx-auto
      mb-4
      lg:max-w-[1200px]
    "
		>
			<div
				className="
          max-w-full
          mx-2
          rounded-lg
          overflow-x-hidden
          grid
          grid-cols-2
          gap-1
          lg:grid-cols-4
          lg:max-w-[1200px]
      "
			>
				{frameList}
			</div>
		</div>
	);
};

export default Frames;
