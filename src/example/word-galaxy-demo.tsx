import { WordGalaxy } from "@/registry/word-galaxy";

const str =
  'Tailwind CSS is an open-source CSS framework. Unlike other frameworks, like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching.';

const words = str.split(" ");

export default function WordGalaxyDemo() {
  return (
    <div className="p-5">
      <WordGalaxy>
        {words.map((word, index) => (
          <span key={index} className="inline-block ease-spring duration-500">
            {word}
            {index < words.length && "\u00A0"}
          </span>
        ))}
      </WordGalaxy>

      <div className="text-center text-3xl mt-10">Hover ↑</div>
    </div>
  );
}
