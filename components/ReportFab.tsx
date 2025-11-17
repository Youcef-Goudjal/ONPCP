"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { useLocale, useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";

export default function ReportFab() {
    const locale = useLocale();
    const t = useTranslations('reportFab');

    return (
        <Link
            href={`/${locale}/report`}
            className="fixed bottom-6 right-6 z-50 group"
            aria-label={t('tooltip')}
        >
            <Button
                size="lg"
                className="h-16 w-36 rounded-full bg-red-600 hover:bg-red-700 shadow-2xl hover:shadow-red-600/50 transition-all hover:scale-110"
            >
                <AlertTriangle className="w-8 h-8" />
                {t('text')}
            </Button>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                    {t('tooltip')}
                    <div className="absolute top-full right-6 -mt-1">
                        <div className="border-8 border-transparent border-t-gray-900"></div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
