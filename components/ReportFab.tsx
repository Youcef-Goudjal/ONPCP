"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ReportFab() {
    return (
        <Link
            href="/report"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="التبليغ عن الفساد"
        >
            <Button
                size="lg"
                className="h-16 w-36 rounded-full bg-red-600 hover:bg-red-700 shadow-2xl hover:shadow-red-600/50 transition-all hover:scale-110"
            >
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                </svg>
                التبليغ عن الفساد
            </Button>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                    التبليغ عن الفساد
                    <div className="absolute top-full right-6 -mt-1">
                        <div className="border-8 border-transparent border-t-gray-900"></div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

