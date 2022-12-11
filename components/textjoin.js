import dynamic from "next/dynamic";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);
import { ScrollPage, batch, Fade, MoveOut, Sticky, FadeIn, StickyIn, ZoomIn, Move, MoveIn } from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
const fontSize = "30px";

export default function TextJoin(props) {
  const { text1, text2 , text3} = props;

  return (
    <ScrollPage>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <span style={{ fontSize: fontSize }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Animator animation={MoveIn(-1000, 0)}>{text1}</Animator>
              <Animator animation={MoveIn(1000, 0)}>
                <span style={{ marginLeft: "5px" }}>{text2}</span>
              </Animator>
            </div>
            <Animator animation={MoveIn(1000, 0)}>
              {text3}
            </Animator>
          </span>
        </div>
      </ScrollPage>
  );
}
