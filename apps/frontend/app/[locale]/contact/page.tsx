"use client";

import React, { useState, useEffect } from "react";
import { Landmark, MapPin, Phone, Mail, User, Clock, Facebook, Twitter, Linkedin, Instagram, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getContactInfo } from "@/lib/api/pages";
import { getStrapiImageUrl } from "@/lib/strapi";
import Link from "next/link";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

const socialIconMap: Record<string, typeof Facebook> = {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
};

export default function ContactPage({ params }: ContactPageProps) {
  const { locale } = React.use(params);
  const [pageData, setPageData] = useState<Awaited<ReturnType<typeof getContactInfo>>>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getContactInfo(locale);
        setPageData(data);
      } catch (error) {
        console.error("Failed to load contact info:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [locale]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit form to Strapi API
    alert("شكراً لتواصلكم معنا. سيتم الرد على رسالتكم في أقرب وقت ممكن.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600" />
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">المحتوى غير متاح</h1>
          <p className="text-gray-600">لم يتم العثور على معلومات الاتصال</p>
        </div>
      </div>
    );
  }

  const {
    heroTitle,
    heroSubtitle,
    nationalOffice,
    provincialOffice,
    workingHours,
    socialLinks = [],
    faq = [],
    formLabels,
    ctaTitle,
    ctaSubtitle,
  } = pageData;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroTitle || "اتصل بنا"}</h1>
          {heroSubtitle && (
            <p className="text-xl max-w-3xl mx-auto">{heroSubtitle}</p>
          )}
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">معلومات الاتصال</h2>

            <div className="space-y-6">
              {/* National Office */}
              {nationalOffice && (
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Landmark className="w-6 h-6 text-blue-600" />
                      {nationalOffice.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {nationalOffice.address && (
                      <div className="flex items-start space-x-3 space-x-reverse">
                        <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">المقر الاجتماعي</h4>
                          {Array.isArray(nationalOffice.address) ? (
                            nationalOffice.address.map((line, index) => (
                              <p key={index} className="text-gray-700">{line}</p>
                            ))
                          ) : (
                            <p className="text-gray-700">{nationalOffice.address}</p>
                          )}
                        </div>
                      </div>
                    )}
                    {nationalOffice.phone && (
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">الهاتف</h4>
                          <a
                            href={`tel:${nationalOffice.phone}`}
                            className="text-blue-600 hover:underline"
                            dir="ltr"
                          >
                            {nationalOffice.phone}
                          </a>
                        </div>
                      </div>
                    )}
                    {nationalOffice.email && (
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">البريد الإلكتروني</h4>
                          <a
                            href={`mailto:${nationalOffice.email}`}
                            className="text-blue-600 hover:underline"
                            dir="ltr"
                          >
                            {nationalOffice.email}
                          </a>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Provincial Office */}
              {provincialOffice && (
                <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-green-600" />
                      {provincialOffice.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {provincialOffice.director && (
                      <div className="flex items-start space-x-3 space-x-reverse">
                        <User className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">رئيس المكتب</h4>
                          <p className="text-gray-700">{provincialOffice.director}</p>
                        </div>
                      </div>
                    )}
                    {provincialOffice.note && (
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-gray-600">{provincialOffice.note}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Working Hours */}
              {workingHours && (
                <div className="flex items-start space-x-4 space-x-reverse bg-purple-50 p-6 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">ساعات العمل</h3>
                    {workingHours.days && (
                      <p className="text-gray-600">{workingHours.days}</p>
                    )}
                    {workingHours.hours && (
                      <p className="text-gray-600">{workingHours.hours}</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Social Media */}
            {socialLinks.length > 0 && (
              <div className="mt-8 bg-gradient-to-br from-gray-50 to-teal-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-4">تابعنا على</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = socialIconMap[social.name] || Facebook;
                    return (
                      <Link
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.color || "bg-blue-600"} text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}
                        title={social.name}
                      >
                        <Icon className="w-6 h-6" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {formLabels?.title || "أرسل لنا رسالة"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  {formLabels?.name || "الاسم الكامل"} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder={formLabels?.namePlaceholder || "أدخل اسمك الكامل"}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  {formLabels?.email || "البريد الإلكتروني"} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder={formLabels?.emailPlaceholder || "example@email.com"}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">
                  {formLabels?.subject || "موضوع الرسالة"} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  placeholder={formLabels?.subjectPlaceholder || "موضوع رسالتك"}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  {formLabels?.message || "محتوى الرسالة"} <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  placeholder={formLabels?.messagePlaceholder || "اكتب رسالتك هنا..."}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-teal-600 hover:bg-teal-700 h-12 text-lg"
              >
                {formLabels?.submit || "إرسال الرسالة"}
              </Button>
            </form>

            <div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                {formLabels?.note || "سيتم الرد على رسالتكم في أقرب وقت ممكن خلال ساعات العمل الرسمية. للحالات العاجلة، يرجى الاتصال مباشرة على رقم الهاتف."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">موقعنا</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 p-20 flex items-center justify-center">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Map className="w-24 h-24 text-teal-600" />
                </div>
                <p className="text-xl text-gray-700">سيتم إضافة الخريطة التفاعلية هنا</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faq.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              الأسئلة الشائعة
            </h2>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <details
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <summary className="font-bold text-gray-900 cursor-pointer">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      {(ctaTitle || ctaSubtitle) && (
        <section className="bg-teal-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            {ctaTitle && (
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{ctaTitle}</h2>
            )}
            {ctaSubtitle && (
              <p className="text-lg mb-6">{ctaSubtitle}</p>
            )}
            <Link
              href={`/${locale}/report`}
              className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              {formLabels?.ctaButton || "قدم بلاغك الآن"}
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
