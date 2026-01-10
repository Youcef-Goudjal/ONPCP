import { Target, Megaphone, Handshake, Mic, FileText, BarChart, Search, Scale, CheckCircle } from "lucide-react";
import { getMissionPage } from "@/lib/api/pages";
import { renderStrapiRichText } from "@/lib/utils";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface MissionPageProps {
  params: Promise<{ locale: string }>;
}

const iconMap: Record<string, LucideIcon> = {
  Target,
  Megaphone,
  Handshake,
  Mic,
  FileText,
  BarChart,
  Search,
  Scale,
};

export default async function MissionPage({ params }: MissionPageProps) {
  const { locale } = await params;
  const pageData = await getMissionPage(locale);

  if (!pageData) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">المحتوى غير متاح</h1>
          <p className="text-gray-600">لم يتم العثور على محتوى الصفحة</p>
        </div>
      </div>
    );
  }

  const {
    heroTitle,
    heroSubtitle,
    sectionTitle,
    sectionDescription,
    missions = [],
    legalFramework,
    principles = [],
    ctaTitle,
    ctaSubtitle,
    ctaButtonText,
  } = pageData;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroTitle || "المهام والصلاحيات"}</h1>
          {heroSubtitle && (
            <p className="text-xl max-w-3xl mx-auto">{heroSubtitle}</p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {(sectionTitle || sectionDescription) && (
            <div className="text-center mb-12">
              {sectionTitle && (
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {sectionTitle}
                </h2>
              )}
              {sectionDescription && (
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {sectionDescription}
                </p>
              )}
            </div>
          )}

          {/* Missions Grid */}
          {missions.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {missions.map((mission, index) => {
                const Icon = iconMap[mission.icon] || Target;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1"
                  >
                    <Icon className={`w-12 h-12 mb-4 ${mission.color || "text-green-600"}`} />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{mission.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{mission.description}</p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Legal Framework */}
          {legalFramework && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">الإطار القانوني</h3>
              <div
                className="space-y-4 text-gray-700 leading-relaxed prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: renderStrapiRichText(legalFramework) }}
              />
            </div>
          )}

          {/* Key Principles */}
          {principles.length > 0 && (
            <div className="bg-white border-2 border-green-600 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                المبادئ الأساسية في عملنا
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {principles.map((principle, index) => (
                  <div key={index} className="flex items-start space-x-3 space-x-reverse">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{principle.title}</h4>
                      <p className="text-gray-600 text-sm">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      {(ctaTitle || ctaSubtitle) && (
        <section className="bg-green-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            {ctaTitle && (
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{ctaTitle}</h2>
            )}
            {ctaSubtitle && (
              <p className="text-lg mb-6">{ctaSubtitle}</p>
            )}
            {ctaButtonText && (
              <Link
                href={`/${locale}/report`}
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                {ctaButtonText}
              </Link>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
