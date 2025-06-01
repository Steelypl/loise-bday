import React, { useEffect } from "react";

export default function SurprisePage() {
  useEffect(() => {
    const interval = setInterval(() => {
      const messages = [
        "💖",
        "💖",
        "💖",
        "💖",
        "💖",
        "💖",
        "I LOVE YOUUU",
        "I LOVE YOUUU",
        "I LOVE YOUUU",
        "I LOVE YOUUU",
        "I LOVE YOUUU",
        "I LOVE YOUUU",
        "I LOVE YOUUU",
        "I LOVE YOU",
        "I LOVE YOU",
        "I LOVE YOU",
        "I LOVE YOU",
        "I LOVE YOU",
        "I LOVE YOU",
        "I LOVE YOU",
        "I LOVE YOU \nI LOVE YOU\nI LOVE YOU\nI LOVE YOU\nI LOVE YOU",
        "I LOVE YOU \nI LOVE YOU\nI LOVE YOU\nI LOVE YOU\nI LOVE YOU",
        "I LOVE YOU \nI LOVE YOU\nI LOVE YOU\nI LOVE YOU\nI LOVE YOU",
        "I LOVE YOU \nI LOVE YOU\nI LOVE YOU\nI LOVE YOU\nI LOVE YOU",
        "I LOVE YOU \nI LOVE YOU\nI LOVE YOU\nI LOVE YOU\nI LOVE YOU",
        "❤️",
        "❤️",
        "❤️",
        "❤️",
        "❤️",
        "My sweet girl",
        "My sweet girl",
        "My sweet girl",
        "My pretty girl",
        "My pretty girl",
        "My pretty girl",
        "My pretty girl",
        "My pretty girl",
        "My pretty girl",
        "My pretty girl",
        "My pretty girl",
        "My pretty girl",
        "My pretty girl",
        "My FL",
        "My FL",
        "My FL",
        "My FL",
        "My FL",
        "My FL",
        "My FL",
        "My FL",
        "Beatiful girl",
        "Beatiful girl",
        "Beatiful girl",
        "Beatiful girl",
        "Beatiful girl",
        "Beatiful girl",
        "Gorgoeus",
        "Gorgoeus",
        "Gorgoeus",
        "Gorgoeus",
        "Gorgoeus",
        "Gorgoeus",
        "Gorgoeus",
        "Pretty",
        "Pretty",
        "Pretty",
        "Pretty",
        "Pretty",
        "Pretty",
        "Charming girl",
        "Charming girl",
        "Charming girl",
        "Charming girl",
        "Charming girl",
        "Charming girl",
        "Charming girl",
        "Lovely Girl",
        "Lovely Girl",
        "Lovely Girl",
        "Lovely Girl",
        "Lovely Girl",
        "Lovely Girl",
        "Cute",
        "Cute",
        "Cute",
        "Cute",
        "Cute",
        "Cute",
        "Cutie",
        "Cutie",
        "Cutie",
        "Cutie",
        "Cutie",
        "Cutie",
        "Cutie",
        "Cutie Patootie",
        "Cutie Patootie",
        "Cutie Patootie",
        "Cutie Patootie",
        "Cutie Patootie",
        "Cutie Patootie",
        "Cutie Patootie",
        "Cutie Patootie",
        "Cutie Patootie",
      ];

      const message = document.createElement("div");
      message.innerText = messages[Math.floor(Math.random() * messages.length)];
      message.style.position = "fixed";
      message.style.left = `${Math.random() * 100}vw`;
      message.style.top = "-50px";
      message.style.color = "#f472b6";
      message.style.fontWeight = "bold";
      message.style.fontSize = "1.25rem";
      message.style.animation = "fall 10s linear";
      document.body.appendChild(message);

      message.addEventListener("animationend", () => {
        message.remove();
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url('/space-bg.webp')",
        backgroundSize: "cover",
      }}
      className="min-h-screen min-w-screen flex justify-center"
    >
      <h1
        style={{
          textAlign: "center",
          color: "#fff",
          paddingTop: "2rem",
          fontSize: "2.5rem",
          textShadow: "2px 2px 10px #f0f",
        }}
        className="flex justify-center items-center"
      >
        MY PRINCESS ❤️
      </h1>
      <style>
        {`
          @keyframes fall {
            to {
              transform: translateY(120vh);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
