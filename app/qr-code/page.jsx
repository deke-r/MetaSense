"use client";

import dynamic from "next/dynamic";


const QRCodeSVG = dynamic(
  () => import("qrcode.react").then((mod) => mod.QRCodeSVG),
  { ssr: false }
);


const QRCodeCanvas = dynamic(
  () => import("qrcode.react").then((mod) => mod.QRCodeCanvas),
  { ssr: false }
);

export default function MyQRCodePage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px", gap: "50px",marginBottom: "50px" }}>
    
      <QRCodeSVG value="https://metasense.in" size={200} />

 
      <QRCodeCanvas value="https://metasense.in" size={200} />
    </div>
  );
}
