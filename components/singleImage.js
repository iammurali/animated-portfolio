import dynamic from "next/dynamic";
import classes from "../styles/Home.module.css";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);
import { ScrollPage, batch, Fade, MoveOut, Sticky, StickyIn, FadeIn, ZoomIn } from "react-scroll-motion";
import Image from "next/image";

const fontSize = "30px";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

export default function SingleImage(props) {
  const { image } = props;

  return (
    <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <div className={classes.rectangleCrop}>
            <Image
              style={{ objectFit: "cover" }}
              src={image}
              height={350}
              width={230}
              alt={"BE HAPPY"}
            />
          </div>
        </Animator>
      </ScrollPage>
  );
}
