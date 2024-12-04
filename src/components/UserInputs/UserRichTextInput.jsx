import React, { useState, useRef } from "react";

import bold from "../../assets/icons/RichTextIcons/bold.svg";
import italic from "../../assets/icons/RichTextIcons/italic.svg";
import underline from "../../assets/icons/RichTextIcons/underline.svg";
import textMore from "../../assets/icons/RichTextIcons/textMore.svg";

import alignLeft from "../../assets/icons/RichTextIcons/alignLeft.svg";
import alignCenter from "../../assets/icons/RichTextIcons/alignCenter.svg";
import alignRight from "../../assets/icons/RichTextIcons/alignLeft_1.svg";
import orderedList from "../../assets/icons/RichTextIcons/orderedList.svg";
import paragraphMore from "../../assets/icons/RichTextIcons/paragraphMore.svg";

import insertLink from "../../assets/icons/RichTextIcons/insertLink.svg";
import insertImage from "../../assets/icons/RichTextIcons/insertImage.svg";
import smile from "../../assets/icons/RichTextIcons/smile.svg";
import insertMore from "../../assets/icons/RichTextIcons/insertMore.svg";

import redo from "../../assets/icons/RichTextIcons/redo.svg";
import more from "../../assets/icons/RichTextIcons/more.svg";

const UserRichTextInput = ({ onChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const textAreaRef = useRef(null);

  const handleInput = () => {
    if (textAreaRef.current) {
      onChange(textAreaRef.current.innerHTML);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const applyStyle = (style) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.style.cssText = style;
    range.surroundContents(span);
  };

  const applyAlignment = (alignment) => {
    if (textAreaRef.current) {
      textAreaRef.current.style.textAlign = alignment;
    }
  };

  const handleBold = () => {
    applyStyle("font-weight: bold;");
  };

  const handleItalic = () => {
    applyStyle("font-style: italic;");
  };

  const handleUnderline = () => {
    applyStyle("text-decoration: underline;");
  };

  const handleAlignLeft = () => {
    applyAlignment("left");
  };

  const handleAlignCenter = () => {
    applyAlignment("center");
  };

  const handleAlignRight = () => {
    applyAlignment("right");
  };

  const handleOrderedList = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const listContainer = document.createElement("ol");
    const listItem = document.createElement("li");

    listItem.appendChild(range.extractContents());
    listContainer.appendChild(listItem);
    range.insertNode(listContainer);
    range.setStartAfter(listContainer);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const handleInsertLink = () => {
    const url = prompt("Enter the URL");
    if (!url) return;

    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.textContent = url;
    anchor.target = "_blank";
    range.insertNode(anchor);
    range.setStartAfter(anchor);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const handleInsertImage = () => {
    const url = prompt("Enter the image URL");
    if (!url) return;

    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Image";
    img.style.maxWidth = "100%";
    range.insertNode(img);
    range.setStartAfter(img);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const handleInsertEmoji = () => {
    const emoji = prompt("Enter the emoji");
    if (!emoji) return;

    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.textContent = emoji;
    range.insertNode(span);
    range.setStartAfter(span);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  return (
    <div
      className="flex flex-col justify-center items-start gap-1.5 w-full p-[10px] rounded-lg bg-sidebar border-custom-border"
      style={{
        border: `1px solid ${isFocused ? "#2A80B3" : "#2B312F"}`,
        // background: "#040a25",
      }}
    >
      <div
        className="flex items-center justify-center md:justify-between w-full rounded-lg p-4 h-[56px] lg:h-[46px] flex-wrap lg:flex-nowrap bg-sidebar"
        style={{ border: "1px solid #2A80B3", }}
      >
        <div className="flex gap-8">
          <div id="basics" className="flex gap-4">
            <img
              className="cursor-pointer"
              src={bold}
              alt="icon"
              onClick={handleBold}
            />
            <img
              className="cursor-pointer"
              src={italic}
              alt="icon"
              onClick={handleItalic}
            />
            <img
              className="cursor-pointer"
              src={underline}
              alt="icon"
              onClick={handleUnderline}
            />
            <img className="cursor-pointer" src={textMore} alt="icon" />
          </div>
          <div id="aligns" className="flex gap-4">
            <img
              className="cursor-pointer"
              src={alignLeft}
              alt="icon"
              onClick={handleAlignLeft}
            />
            <img
              className="cursor-pointer"
              src={alignCenter}
              alt="icon"
              onClick={handleAlignCenter}
            />
            <img
              className="cursor-pointer"
              src={alignRight}
              alt="icon"
              onClick={handleAlignRight}
            />
            <img
              className="cursor-pointer"
              src={orderedList}
              alt="icon"
              onClick={handleOrderedList}
            />
            <img className="cursor-pointer" src={paragraphMore} alt="icon" />
          </div>
          <div id="extras" className="hidden md:flex gap-4">
            <img
              className="cursor-pointer"
              src={insertLink}
              alt="icon"
              onClick={handleInsertLink}
            />
            <img
              className="cursor-pointer"
              src={insertImage}
              alt="icon"
              onClick={handleInsertImage}
            />
            <img
              className="cursor-pointer"
              src={smile}
              alt="icon"
              onClick={handleInsertEmoji}
            />
            <img className="cursor-pointer" src={insertMore} alt="icon" />
          </div>
        </div>
        <div className="flex gap-6">
          <img className="cursor-pointer scale-x-[-1]" src={redo} alt="icon" />
          <img className="cursor-pointer" src={redo} alt="icon" />
          <img
            className="cursor-pointer"
            src={more}
            alt="icon"
            onClick={toggleMenu}
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="menu flex flex-col items-start gap-4 p-4 bg-[#2B312F] rounded-lg">
          <img className="cursor-pointer" src={insertLink} alt="icon" />
          <img className="cursor-pointer" src={insertImage} alt="icon" />
          <img className="cursor-pointer" src={smile} alt="icon" />
          <img className="cursor-pointer" src={insertMore} alt="icon" />
        </div>
      )}
      <div
        contentEditable
        ref={textAreaRef}
        onInput={handleInput}
        className="w-full bg-transparent border-none focus:outline-none text-[#A8A8A8] text-[14px] font-medium resize-none"
        style={{
          minHeight: "200px",
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default UserRichTextInput;
