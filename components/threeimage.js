import dynamic from "next/dynamic";
import classes from "../styles/Home.module.css";

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
import Image from "next/image";

export default function ThreeImage(props) {
  const { img1, img2, img3 } = props;
  let height = 250
  let width= 250
  let imageStyle = classes.cropimage;
  if(props.type && props.type== 'rect') {
    height = 300
    width = 200
    imageStyle = classes.rectangleCrop
  }

  return (
    <ScrollPage>
      <div
       className={classes.threeimagegrid} 
      >
        <Animator animation={batch(MoveIn(-1000, 0),Fade())}>
          <div className={imageStyle}>
            <Image
              style={{ objectFit: "cover" }}
              src={img1}
              height={height}
              width={width}
              alt={"BE HAPPY"}
            />
          </div>
        </Animator>
        <Animator animation={batch(MoveIn(0, 1000),Fade())}>
          <div className={imageStyle}>
            <Image
              style={{ objectFit: "cover" }}
              src={img2}
              height={height}
              width={width}
              alt={"BE HAPPY"}
            />
          </div>
        </Animator>
        <Animator animation={batch(MoveIn(1000, 0),Fade())}>
          <div className={imageStyle}>
            <Image
              style={{ objectFit: "cover" }}
              src={img3}
              height={height}
              width={width}
              alt={"BE HAPPY"}
            />
          </div>
        </Animator>
      </div>
    </ScrollPage>
  );
}
