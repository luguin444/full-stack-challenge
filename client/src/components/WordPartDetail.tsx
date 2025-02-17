import {WordPart} from "../types/WordPart.ts";
import {FC} from "react";

interface LargeWordPartProps {
  wordPart: WordPart;
  onNeedsWork: (wordId: number) => void;
  onMastered: (wordId: number) => void;
}

const WordPartDetail: FC<LargeWordPartProps> = ({wordPart, onNeedsWork, onMastered}) => {
  return (
    <div className="w-full flex flex-col gap-6 justify-center items-center mt-8">
    <span data-testid="largeWordPart" className="text-6xl">
      {wordPart.label}
    </span>
      <div className="flex flex-row w-full justify-between my-4">
        <button type="button" onClick={() => onNeedsWork(wordPart.id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-green-600">Needs work</button>
        <button type="button" onClick={() => onMastered(wordPart.id)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Got it!</button>
      </div>
    </div>
  );
};

export default WordPartDetail;
