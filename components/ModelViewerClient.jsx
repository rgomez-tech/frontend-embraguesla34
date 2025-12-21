"use client";

import dynamic from "next/dynamic";

const ModelViewer = dynamic(
  async () => {
    await import("@google/model-viewer");
    return () => null;
  },
  { ssr: false }
);

export default function ModelViewerClient({ children }) {
  return (
    <>
      <ModelViewer />
      {children}
    </>
  );
}
