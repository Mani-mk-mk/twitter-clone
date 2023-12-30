import { useEffect, useState } from "react";
import { ObjectType } from "../types/PostTypes";

interface RenderImageProps {
  images: string[];
}

const RenderImage = (props: RenderImageProps) => {
  const [styles, setStyles] = useState<ObjectType[] | null>(null);

  useEffect(() => {
    const imageStyles: ObjectType[][] = [
      [{ div: "rounded-lg", image: "rounded-lg w-full h-full object-cover" }],
      [
        {
          div: "rounded-l-lg",
          image:
            "border-r min-h-[250px] h-full object-cover border-borderColor rounded-l-lg",
        },
        {
          div: "rounded-r-lg",
          image:
            "border-l min-h-[250px] h-full object-cover border-borderColor rounded-r-lg",
        },
      ],
      [
        {
          div: "rounded-tl-lg rounded-bl-lg",
          image:
            "h-full border-r object-cover border-borderColor rounded-tl-lg rounded-bl-lg",
        },
        {
          div: "rounded-tr-lg",
          image:
            "border-l object-cover border-b border-borderColor rounded-tr-lg",
        },
        {
          div: "rounded-br-lg",
          image:
            "border-t object-cover border-r border-borderColor rounded-br-lg",
        },
      ],
      [
        {
          div: "rounded-tl-lg",
          image:
            "border-r object-cover border-b border-borderColor rounded-tl-lg",
        },
        {
          div: "rounded-tr-lg",
          image:
            "border-l object-cover border-b border-borderColor rounded-tr-lg",
        },
        {
          div: "rounded-bl-lg",
          image:
            "border-t object-cover border-r border-borderColor rounded-bl-lg",
        },
        {
          div: "rounded-br-lg",
          image:
            "border-t object-cover border-l border-borderColor rounded-br-lg",
        },
      ],
    ];

    const styleIndex = props.images ? props.images.length - 1 : 0;
    setStyles(imageStyles[styleIndex]);
  }, [props]);

  return (
    <>
      {props.images.length === 4 && (
        <div className="grid grid-cols-2">
          {props.images.map((image, key) => (
            <div key={key} className={styles?.[key]?.div}>
              <img
                src={image}
                className={styles?.[key]?.image}
                alt="Post-image"
              />
            </div>
          ))}
        </div>
      )}

      {props.images.length === 3 && (
        <div className="grid grid-cols-2">
          <div className="grid h-full">
            <div className={styles?.[0]?.div}>
              <img
                src={props.images[0]}
                className={styles?.[0]?.image}
                alt="Post-image"
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className={styles?.[1]?.div}>
              <img
                src={props.images[1]}
                className={styles?.[1]?.image}
                alt="Post-image"
              />
            </div>

            <div className={styles?.[2]?.div}>
              <img
                src={props.images[2]}
                className={styles?.[2]?.image}
                alt="Post-image"
              />
            </div>
          </div>
        </div>
      )}

      {props.images.length === 2 && (
        <div className="grid grid-cols-2">
          {props.images.map((image, key) => (
            <div key={key} className={styles?.[key]?.div}>
              <img
                src={image}
                className={styles?.[key]?.image}
                alt="Post-image"
              />
            </div>
          ))}
        </div>
      )}

      {props.images.length === 1 && (
        <div className="grid">
          {props.images.map((image, key) => (
            <div key={key} className={styles?.[key]?.div}>
              <img
                src={image}
                className={styles?.[key]?.image}
                alt="Post-image"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default RenderImage;
