import {FC, useEffect, useState} from "react";
import { WordPart, WordPartStatus } from "../types/WordPart.ts";
import WordPartDetail from "./WordPartDetail.tsx";

interface WordPartsViewProps {
  levelId: string;
}

const WordPartsList: FC<WordPartsViewProps> = ({levelId}) => {
  const [wordParts, setWordParts] = useState<WordPart[]>([]);
  const [selectedWordPart, setSelectedWordPart] = useState<WordPart | null>(null);

  useEffect(() => {
    // load word parts from http://localhost:3000/phonics_levels/:id/word_parts
    fetch(`/phonics_levels/${levelId}/word_parts`)
      .then((response) => response.json())
      .then((data) => {
        setWordParts(data as WordPart[]);
      })
      .catch((error) => {
        console.error("Error fetching word parts", error);
      });
  }, [levelId]);

  const handleWordPartClick = (wordPartId: number) => {
    setSelectedWordPart(wordParts.find((wordPart) => wordPart.id === wordPartId) || null);
  }

  const updateWordStatus = async (wordId: number, status: WordPartStatus) => {
    try {
      await fetch(`/word_parts/${wordId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      setWordParts((prevWordParts) =>
        prevWordParts.map((wp) =>
          wp.id === wordId ? { ...wp, status } : wp
        )
      );
    } catch (error) {
      prompt(`Could not update the word status`);
      console.error(error);
    }
  };

  const handleNeedsWork = async (wordId: number) => {
    await updateWordStatus(wordId, WordPartStatus.NEEDS_WORK);
  }

  const handleMastered = async (wordId: number) => {
    await updateWordStatus(wordId, WordPartStatus.MASTERED);
  }

  return (
    <div className="my-4">
      <h2 className="text-xl mb-4">Word Parts</h2>
      {wordParts.map((wordPart) => (
        <button
          key={wordPart.id}
          type="button"
          className={`mr-2 mb-2 px-2 py-1 border rounded hover:bg-gray-200 cursor-pointer ${
            wordPart.status === WordPartStatus.NEEDS_WORK ? "bg-red-500 text-white" :
            wordPart.status === WordPartStatus.MASTERED ? "bg-green-500 text-white" : ""
          }`}
          onClick={() => handleWordPartClick(wordPart.id)}>{wordPart.label}
        </button>
      ))}
      <hr/>
      {selectedWordPart &&
        <WordPartDetail wordPart={selectedWordPart} onNeedsWork={handleNeedsWork} onMastered={handleMastered}/>}
    </div>
  );
};

export default WordPartsList;
