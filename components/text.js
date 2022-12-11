import dynamic from "next/dynamic";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);
import {
  ScrollPage,
  batch,
  Fade,
  MoveOut,
  Sticky,
  FadeIn,
  StickyIn,
  ZoomIn,
  Move,
} from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
const fontSize = "30px";

export default function TextOnly(props) {
  const { text, animation, align, style, className } = props;

  return (
    <ScrollPage>
      <Animator animation={animation == "fadeUp" ? FadeUp : ZoomInScrollOut}>
        <div
          style={{ fontSize: fontSize, textAlign: align }}
          className={className}
        >
          {text}
        </div>
      </Animator>
    </ScrollPage>
  );
}
