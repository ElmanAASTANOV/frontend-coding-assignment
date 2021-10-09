import React from "react";

interface buttonType {
  color: "blue" | "red" | { default: string; hover: string; active: string };
  size: "small" | "regular" | "large";
  type: "regular" | "outline";
};
export default function Button({
  color = "blue",
  size = "regular",
  type = "regular",
}: buttonType) {
  let _color;
  switch (color) {
    case "red":
      _color = {
        default: "#FF0054",
        hover: "#E6003B",
        active: "#CC0021",
      };
      break;
    case "blue":
      _color = {
        default: "#0A344F",
        hover: "#001B36",
        active: "#0A344F",
      };
      break;
    default:
      _color = color;
  }

  let _size;
  switch (size) {
    case "small":
      _size = {
        px: "2",
        py: "1.5",
        text: "text-xs",
      };
      break;
    case "regular":
    default:
      _size = {
        px: "3",
        py: "2",
        text: "text",
      };
      break;

    case "large":
      _size = {
        px: "5",
        py: "3",
        text: "text-xl",
      };
  }
  [size];

  let generatedButton;
  switch (type) {
    case "outline":
      generatedButton= (
        <button
          className={`bg-transparent border border-[${_color.default}] hover:border-[${_color.hover}] active:border-[${_color.active}] px-${_size.px} py-${_size.py} rounded text text-[${_color.default}]`}
        >
          Click me
        </button>
      );

    case "regular":
    default:
      generatedButton = (
        <button
          className={`bg-[${_color.default}] hover:bg-[${_color.hover}] active:bg-[${_color.active}] px-${_size.px} py-${_size.py} rounded ${_size.text} text-white`}
        >
          Click me
        </button>
      );
  }
  return generatedButton;
}
