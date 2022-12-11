import dynamic from "next/dynamic";
import Image from "next/image";
import classes from "../styles/Home.module.css";

import payload from "../content.config.json";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);
import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

// import { Animation } from "react-scroll-motion";
// import vid1 from "../public/vid1.mp4";

import ThreeImage from "../components/threeimage";
import TextWithImage from "../components/textwithimage";
import TextOnly from "../components/text";
import SingleImage from "../components/singleImage";
import SingleVideo from "../components/singlevideo";
import DualVideo from "../components/dualvideo";
import TextJoin from "../components/textjoin";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
const fontSize = "30px";

export default function Home() {
  return (
    <ScrollContainer>
      {payload.content.map((data, idx)=>{
        if(data.type == 'text') { 
          if(data.backgroundImage) {
            return <TextWithImage key={idx} text={data.content}  image={data.backgroundImage}/> 
          } 
          return <TextOnly key={idx} text={data.content} className={data.class} style={data.style} align={data.align} animation={data.animation} />
        }
        if(data.type == 'tripleimage') {
          return <ThreeImage key={idx} img1={data.images[0]} img2={data.images[1]} img3={data.images[2]} />
        }
        if(data.type == 'singleimage') {
          return <SingleImage key={idx} image={data.image} />
        }
        if(data.type == 'singlevideo') {
          return <SingleVideo key={idx} video={data.video} />
        }
        if(data.type == 'textjoin') {
          return <TextJoin key={idx} text1={data.texts[0]} text2={data.texts[1]} text3={data.texts[2]}/>
        }
        if(data.type == 'dualvideo') {
          return <DualVideo key={idx} video1={data.videos[0]} video2={data.videos[1]} />
        }

      })}
    </ScrollContainer>
  );
}
