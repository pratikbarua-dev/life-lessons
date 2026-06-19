"use client";

import { useState } from "react";

export default function VisibilityToggle({ lessonId, initialStatus }) {
    const [isPublic, setIsPublic] = useState(initialStatus);

    return (
        <label className="inline-flex items-center gap-2.5 cursor-pointer select-none touch-manipulation">
            <input
                type="checkbox"
                checked={isPublic}
                onChange={() => setIsPublic(!isPublic)}
                className="sr-only peer"
            />
            <div className="relative w-9 h-5 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#c3c0ff]" />
            <span className="text-xs font-sans font-medium w-12 text-[#c7c4d8]/60 uppercase tracking-wider">
                {isPublic ? "Public" : "Private"}
            </span>
        </label>
    );
}