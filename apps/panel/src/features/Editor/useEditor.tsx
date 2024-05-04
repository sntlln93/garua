import { useContext } from "react";
import { EditorContext } from "./context";

export const useEditor = () => {
  const context = useContext(EditorContext);

  if (!context) {
    throw new Error("useEditor must be used within an EditorProvider");
  }

  return context;
};
