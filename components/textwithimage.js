import dynamic from "next/dynamic";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);
import { ScrollPage, batch, Fade, MoveOut, Sticky } from "react-scroll-motion";

const fontSize = "30px";

export default function TextWithImage(props) {
  const { text, image } = props;

  return (
    <ScrollPage>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: "0.4",
            filter: "alpha(opacity=40)",
          }}
        ></div>
        <div style={{ position: "absolute", zIndex: "100", top: "10px" }}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <div
              style={{
                fontSize: fontSize,
              }}
            >
              {text}
            </div>
          </Animator>
        </div>
      </div>
    </ScrollPage>
  );
}
