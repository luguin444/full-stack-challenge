import {describe, expect, it, vi} from "vitest";
import WordPartDetail from "./WordPartDetail.tsx";
import {fireEvent, render, screen} from "@testing-library/react";
import {WordPart} from "../types/WordPart.ts";

describe("WordPartDetail", () => {
    it("calls the onNeedsWork callback when the Needs Work button is clicked", () => {
        const onNeedsWork = vi.fn();
        const onMastered = vi.fn();

        const wordPart: WordPart = {id: 1, label: "test"};

        render(<WordPartDetail wordPart={wordPart} onMastered={onMastered} onNeedsWork={onNeedsWork}/>);

        const needsWorkButton = screen.getByRole("button", {name: "Needs work" });
        fireEvent.click(needsWorkButton);

        expect(onNeedsWork).toHaveBeenCalled();
    });

    it("calls the onMastered callback when the Mastered button is clicked", () => {
        const onNeedsWork = vi.fn();
        const onMastered = vi.fn();

        const wordPart: WordPart = {id: 1, label: "test"};

        render(<WordPartDetail wordPart={wordPart} onMastered={onMastered} onNeedsWork={onNeedsWork}/>);

        const masteredButton = screen.getByRole("button", {name: "Needs work" });
        fireEvent.click(masteredButton);

        expect(onMastered).toHaveBeenCalled();
    });
});
