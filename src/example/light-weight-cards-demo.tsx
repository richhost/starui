import { Pen, Instagram, Send } from "lucide-react";
import { LightWeightCards } from "@/registry/lightweight-cards";

export default function LightWeightCardsDemo() {
  return (
    <div className="w-full">
      <LightWeightCards.Root>
        {exampleData.map((item, index) => (
          <LightWeightCards.Card
            className="max-w-[200px] md:max-w-sm w-full"
            index={index}
            key={index}
          >
            <div className="p-4">
              <item.icon />
              <h3>{item.title}</h3>
              <p className="mt-16">{item.content}</p>
            </div>
          </LightWeightCards.Card>
        ))}
      </LightWeightCards.Root>
    </div>
  );
}

const exampleData = [
  {
    icon: Pen,
    title: "Blog post",
    content: "Hey, write for me a blog about...",
  },
  {
    icon: Instagram,
    title: "Social media caption",
    content: "Hey, shoot me a caption for...",
  },
  {
    icon: Send,
    title: "Email newsletter",
    content: "Hey, write an email to my friend...",
  },
];
