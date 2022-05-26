import React from "react";
import { Editor } from "@toast-ui/react-editor";

function ToastEditor({ editorRef, initialValue }) {
  return (
    <Editor
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

export default ToastEditor;
