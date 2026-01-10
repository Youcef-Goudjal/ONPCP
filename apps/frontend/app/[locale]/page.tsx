'use client';

import { use } from 'react';
import Link from "next/link";
import { Target, Eye, Star, FileText, Scale, GraduationCap, Megaphone, BarChart, Handshake } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations('home');

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${locale}/report`}>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6 h-auto">
              {t('reportButton')}
            </Button>
          </Link>
          <Link href={`/${locale}/about`}>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-2">
              {t('aboutButton')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Target className="w-12 h-12 text-blue-600" />
              </div>
              <CardTitle className="text-2xl mb-2">{t('mission.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center leading-relaxed">
                {t('mission.content')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Eye className="w-12 h-12 text-green-600" />
              </div>
              <CardTitle className="text-2xl mb-2">{t('vision.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center leading-relaxed">
                {t('vision.content')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Star className="w-12 h-12 text-purple-600" />
              </div>
              <CardTitle className="text-2xl mb-2">{t('values.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full ml-2"></span>
                  {t('values.integrity')}
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full ml-2"></span>
                  {t('values.responsibility')}
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full ml-2"></span>
                  {t('values.transparency')}
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full ml-2"></span>
                  {t('values.lawRespect')}
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full ml-2"></span>
                  {t('values.publicService')}
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t('services.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                color: "text-blue-600",
                titleKey: "services.reporting.title",
                descriptionKey: "services.reporting.description",
              },
              {
                icon: Scale,
                color: "text-purple-600",
                titleKey: "services.legal.title",
                descriptionKey: "services.legal.description",
              },
              {
                icon: GraduationCap,
                color: "text-green-600",
                titleKey: "services.training.title",
                descriptionKey: "services.training.description",
              },
              {
                icon: Megaphone,
                color: "text-orange-600",
                titleKey: "services.awareness.title",
                descriptionKey: "services.awareness.description",
              },
              {
                icon: BarChart,
                color: "text-teal-600",
                titleKey: "services.reports.title",
                descriptionKey: "services.reports.description",
              },
              {
                icon: Handshake,
                color: "text-indigo-600",
                titleKey: "services.cooperation.title",
                descriptionKey: "services.cooperation.description",
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <Icon className={`w-10 h-10 mb-2 ${service.color}`} />
                    <CardTitle className="text-xl">{t(service.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {t(service.descriptionKey)}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('welcome.title')}</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            {t('welcome.content')}
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          {t('quickLinks.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              titleKey: "quickLinks.mission.title",
              descriptionKey: "quickLinks.mission.description",
              href: `/${locale}/mission`,
              badgeKey: "quickLinks.mission.badge",
              badgeVariant: "default" as const,
            },
            {
              titleKey: "quickLinks.news.title",
              descriptionKey: "quickLinks.news.description",
              href: `/${locale}/news`,
              badgeKey: "quickLinks.news.badge",
              badgeVariant: "secondary" as const,
            },
            {
              titleKey: "quickLinks.contact.title",
              descriptionKey: "quickLinks.contact.description",
              href: `/${locale}/contact`,
              badgeKey: "quickLinks.contact.badge",
              badgeVariant: "outline" as const,
            },
          ].map((link, index) => (
            <Link key={index} href={link.href}>
              <Card className="hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{t(link.titleKey)}</CardTitle>
                    <Badge variant={link.badgeVariant}>{t(link.badgeKey)}</Badge>
                  </div>
                  <CardDescription className="text-base">
                    {t(link.descriptionKey)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-blue-600 font-semibold inline-flex items-center">
                    {t('quickLinks.readMore')}
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
