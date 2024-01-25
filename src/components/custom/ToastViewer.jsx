import React from "react";
import { Viewer } from "@toast-ui/react-editor";

function ToastViewer({ editorRef, initialValue }) {
  return (
    <Viewer
      previewStyle="vertical"
      height="500px"
      initialEditType="wysiwyg"
      initialValue={initialValue}
      hideModeSwitch="false"
      ref={editorRef}
      minHeight="500px"
    />
  );
}

export default ToastViewer;
