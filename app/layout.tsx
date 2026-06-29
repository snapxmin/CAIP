import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAIP | Coding Agent Intelligence Platform",
  description:
    "CAIP 是面向开发者、技术管理者、产品经理和决策者的 Coding Agent 基础设施门户，提供 Agent 评测、工作流、治理和 ROI 分析能力。",
  openGraph: {
    title: "CAIP | Coding Agent Intelligence Platform",
    description:
      "帮助个人和企业高效、安全、可衡量地使用 Coding Agent。",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
