import dynamic from "next/dynamic";
import classes from "../styles/Home.module.css";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);
import { ScrollPage, batch, Fade, MoveOut, Sticky, StickyIn, FadeIn, ZoomIn, Move } from "react-scroll-motion";
import Image from "next/image";

const fontSize = "30px";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

export default function SingleVideo(props) {
  const { video } = props;

  return (
    <ScrollPage>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flexDirection: "row",
        borderRadius: "20px",
        overflow: "hidden",
        width: "max-content",
        borderRadius: "20px"
      }}
    >
      <Animator animation={FadeUp}>
        <div className={classes.dualVideo}>
          <video playsInline width="100%" height="70%" autoPlay loop muted>
            <source src={video}></source>
          </video>
        </div>
      </Animator>
    </div>
  </ScrollPage>
  );
}
