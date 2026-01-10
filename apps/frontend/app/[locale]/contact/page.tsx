"use client";

import { useState } from "react";
import { Landmark, MapPin, Phone, Mail, User, Clock, Facebook, Twitter, Linkedin, Instagram, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("شكراً لتواصلكم معنا. سيتم الرد على رسالتكم في أقرب وقت ممكن.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">اتصل بنا</h1>
          <p className="text-xl max-w-3xl mx-auto">
            نحن هنا للإجابة على استفساراتكم واستقبال اقتراحاتكم
          </p>
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
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Landmark className="w-6 h-6 text-blue-600" />
                    المكتب الوطني
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">المقر الاجتماعي</h4>
                      <p className="text-gray-700">Loft</p>
                      <p className="text-gray-700">الطابق الثاني</p>
                      <p className="text-gray-700 font-semibold">ولاية الاغواط</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">الهاتف</h4>
                      <a
                        href="tel:+213662787248"
                        className="text-blue-600 hover:underline"
                        dir="ltr"
                      >
                        +213 662 787 248
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">البريد الإلكتروني</h4>
                      <a
                        href="mailto:laidtaibi34@gmail.com"
                        className="text-blue-600 hover:underline"
                        dir="ltr"
                      >
                        laidtaibi34@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Provincial Office - Laghouat */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-green-600" />
                    المكتب الولائي - الأغواط
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <User className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">رئيس المكتب</h4>
                      <p className="text-gray-700">السيد مولفرعة إبراهيم خليل</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      للتواصل مع المكتب الولائي، يرجى استخدام نموذج الاتصال أدناه أو
                      التواصل عبر المكتب الوطني.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Working Hours */}
              <div className="flex items-start space-x-4 space-x-reverse bg-purple-50 p-6 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">ساعات العمل</h3>
                  <p className="text-gray-600">من الأحد إلى الخميس</p>
                  <p className="text-gray-600">08:00 صباحاً - 04:00 مساءً</p>
                </div>
              </div>
            </div>

            {/* Social Media (Optional) */}
            <div className="mt-8 bg-gradient-to-br from-gray-50 to-teal-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">تابعنا على</h3>
              <div className="flex gap-4">
                {[
                  { name: "Facebook", icon: Facebook, color: "bg-blue-600" },
                  { name: "Twitter", icon: Twitter, color: "bg-sky-500" },
                  { name: "LinkedIn", icon: Linkedin, color: "bg-blue-700" },
                  { name: "Instagram", icon: Instagram, color: "bg-pink-600" },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={social.name}
                      className={`${social.color} text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}
                      title={social.name}
                    >
                      <Icon className="w-6 h-6" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              أرسل لنا رسالة
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  الاسم الكامل <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="أدخل اسمك الكامل"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  البريد الإلكتروني <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="example@email.com"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">
                  موضوع الرسالة <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  placeholder="موضوع رسالتك"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  محتوى الرسالة <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  placeholder="اكتب رسالتك هنا..."
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-teal-600 hover:bg-teal-700 h-12 text-lg"
              >
                إرسال الرسالة
              </Button>
            </form>

            <div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>ملاحظة:</strong> سيتم الرد على رسالتكم في أقرب وقت ممكن خلال
                ساعات العمل الرسمية. للحالات العاجلة، يرجى الاتصال مباشرة على رقم
                الهاتف.
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
                <p className="text-xl text-gray-700">
                  سيتم إضافة الخريطة التفاعلية هنا
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            الأسئلة الشائعة
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "كيف يمكنني تقديم بلاغ عن فساد؟",
                a: "يمكنك تقديم بلاغك عبر صفحة التبليغ عن الفساد على الموقع، أو بزيارة مكتبنا شخصياً، أو عبر البريد الإلكتروني. نضمن لك السرية التامة.",
              },
              {
                q: "هل معلوماتي الشخصية آمنة؟",
                a: "نعم، جميع المعلومات التي تقدمها محمية بأقصى درجات السرية والأمان. يمكنك أيضاً اختيار التبليغ بشكل مجهول.",
              },
              {
                q: "ما هي المدة الزمنية للرد على البلاغات؟",
                a: "نسعى للرد على جميع البلاغات خلال 48 ساعة عمل. قد تختلف المدة حسب طبيعة البلاغ وتعقيده.",
              },
              {
                q: "هل يمكنني متابعة حالة بلاغي؟",
                a: "نعم، سيتم تزويدك برقم مرجعي لبلاغك يمكنك استخدامه لمتابعة حالة البلاغ.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <summary className="font-bold text-gray-900 cursor-pointer">
                  {faq.q}
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            لديك معلومات عن حالة فساد؟
          </h2>
          <p className="text-lg mb-6">لا تتردد في التواصل معنا، معلوماتك في أمان تام</p>
          <a
            href="/report"
            className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            قدم بلاغك الآن
          </a>
        </div>
      </section>
    </div>
  );
}

