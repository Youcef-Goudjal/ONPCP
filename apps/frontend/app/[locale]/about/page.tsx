import { Target, Megaphone, Handshake, Mic, FileText, BarChart, Search, Scale, Landmark, Users, MapPin, Settings, Gem, Heart, Eye, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAboutPage } from "@/lib/api/pages";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { renderStrapiRichText } from "@/lib/utils";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface AboutPageProps {
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
  Landmark,
  Users,
  MapPin,
  Settings,
  Gem,
  Heart,
  Eye,
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const pageData = await getAboutPage(locale);

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
    introduction,
    legalFramework,
    notarialDeed,
    objectives = [],
    organizationalStructure = [],
    values = [],
    ctaTitle,
    ctaSubtitle,
  } = pageData;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroTitle || "من نحن"}</h1>
          {heroSubtitle && (
            <p className="text-xl max-w-3xl mx-auto">{heroSubtitle}</p>
          )}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {introduction && (
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 mb-12">
              <CardHeader>
                <CardTitle className="text-3xl mb-2">التعريف بالمنظمة</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="text-lg text-gray-700 leading-relaxed mb-4 prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: renderStrapiRichText(introduction) }}
                />
                {(legalFramework || notarialDeed) && (
                  <div className="bg-white p-4 rounded-lg mt-4">
                    {legalFramework && (
                      <p className="text-gray-700">
                        <span className="font-semibold">القانون الأساسي:</span>{" "}
                        <span className="text-blue-600 font-semibold mx-1">{legalFramework}</span>
                      </p>
                    )}
                    {notarialDeed && (
                      <p className="text-gray-700 mt-2">
                        <span className="font-semibold">العقد التوثيقي:</span> رقم{" "}
                        <span className="text-blue-600 font-semibold mx-1">{notarialDeed}</span>
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Objectives Section */}
          {objectives.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                الأهداف الرئيسية
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {objectives.map((objective, index) => {
                  const Icon = iconMap[objective.icon] || FileText;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <Icon className={`w-10 h-10 flex-shrink-0 ${objective.color || "text-blue-600"}`} />
                          <div>
                            <CardTitle className="text-lg mb-1">{objective.title}</CardTitle>
                            <CardDescription className="text-base">
                              {objective.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* Organizational Structure */}
          {organizationalStructure.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                الهيكلة الوطنية
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {organizationalStructure.map((structure, index) => {
                  const Icon = iconMap[structure.icon] || Building;
                  return (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-center mb-3">
                          <Icon className={`w-12 h-12 ${structure.color || "text-gray-600"}`} />
                        </div>
                        <CardTitle className="text-lg mb-2">{structure.title}</CardTitle>
                        <Badge className={structure.badgeColor || "bg-gray-100 text-gray-800"}>
                          {structure.badge}
                        </Badge>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* Values Section */}
          {values.length > 0 && (
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">قيمنا الأساسية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-5 gap-6">
                  {values.map((value, index) => {
                    const Icon = iconMap[value.icon] || Gem;
                    return (
                      <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                        <div className="flex justify-center mb-3">
                          <Icon className={`w-10 h-10 ${value.color || "text-purple-600"}`} />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">{value.title}</h4>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Call to Action */}
      {(ctaTitle || ctaSubtitle) && (
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            {ctaTitle && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{ctaTitle}</h2>
            )}
            {ctaSubtitle && (
              <p className="text-xl mb-8 max-w-2xl mx-auto">{ctaSubtitle}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/people`}
                className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                تعرف على فريقنا
              </Link>
              <Link
                href={`/${locale}/report`}
                className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                التبليغ عن الفساد
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
