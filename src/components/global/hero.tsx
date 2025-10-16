"use client";
import { useState } from "react";

const tabsData = [
  {
    id: "it-ops",
    title: "IT Ops",
    subtitle: "⚡ On-board new employees",
    image:
      "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp",
  },
  {
    id: "sec-ops",
    title: "Sec Ops",
    subtitle: "⚡ Enrich security incident tickets",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=675&fit=crop",
  },
  {
    id: "dev-ops",
    title: "Dev Ops",
    subtitle: "⚡ Convert natural language into API calls",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=675&fit=crop",
  },
  {
    id: "sales",
    title: "Sales",
    subtitle: "⚡ Generate customer insights from reviews",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop",
  },
  {
    id: "you",
    title: "You",
    subtitle: "▶️ Watch this video to hear our pitch",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=675&fit=crop",
  },
];

export default function InteractiveTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className=" bg-background flex items-center justify-center p-4">
      <div className=" mx-auto">
        <div className=" max-w-7xl relative bg-gradient-to-b from-orange-600 to-orange-500/0 p-4 rounded-3xl overflow-hidden ">
          <div className=" z-6 absolute bg-gradient-to-t from-background to-transparent w-full h-full"></div>
          <div className=" absolute animate-pulse rounded-2xl -z-0 inset-0 opacity-45 h-full w-full  bg-[radial-gradient(#e5e7eb_0.8px,transparent_0.5px)] [background-size:16px_16px]"></div>
          <div className=" relative bg-card rounded-2xl overflow-hidden w-full">
            {/* Tabs */}
            <div className="flex flex-col md:flex-row">
              {tabsData.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 text-left p-6 transition-all duration-200  z-10 last:border-0 ${
                    activeTab === index ? "bg-muted" : "hover:bg-muted/50"
                  }`}
                >
                  <div className="text-sm font-medium mb-2 text-foreground">
                    <strong>{tab.title}</strong> can
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {tab.subtitle}
                  </div>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="relative aspect-video overflow-hidden rounded-b-2xl">
              {tabsData.map((tab, index) => (
                <img
                  key={tab.id}
                  src={tab.image}
                  alt={`${tab.title} visualization`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    activeTab === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
