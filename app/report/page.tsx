"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function Report() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    description: "",
    anonymous: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("تم استلام بلاغكم بنجاح. سيتم التواصل معكم في أقرب وقت ممكن.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "",
      description: "",
      anonymous: false,
    });
  };

  const reportableIssues = [
    {
      icon: "💼",
      title: "استغلال الوظيفة",
      description: "استغلال الوظيفة العامة لتحقيق منفعة شخصية",
    },
    {
      icon: "💰",
      title: "تجاوزات مالية",
      description: "تجاوزات مالية أو إدارية في المؤسسات العمومية",
    },
    {
      icon: "🏛️",
      title: "سوء استخدام الممتلكات",
      description: "سوء استخدام أو إهمال الممتلكات والموارد العامة",
    },
    {
      icon: "🤝",
      title: "الرشوة والمحسوبية",
      description: "حالات الرشوة، المحسوبية، والمحاباة",
    },
    {
      icon: "📊",
      title: "اختلاس الموارد",
      description: "اختلاس الموارد العامة أو إتلافها",
    },
    {
      icon: "⚖️",
      title: "مخالفات النزاهة",
      description: "أي سلوك مخالف لمبادئ النزاهة والشفافية",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">التبليغ عن الفساد</h1>
          <p className="text-xl max-w-3xl mx-auto">
            آلية آمنة وسرّية للتبليغ عن التجاوزات والممارسات المشبوهة
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-blue-50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              نوفّر لك حماية كاملة
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              نوفّر للمواطنين آلية آمنة وسرّية للتبليغ عن أي تجاوزات أو ممارسات مشبوهة تمس
              المال العام أو تخالف القوانين المعمول بها.
            </p>
            <div className="flex items-center space-x-3 space-x-reverse bg-white p-4 rounded-lg border-r-4 border-blue-600">
              <div className="text-3xl">🔒</div>
              <div>
                <h3 className="font-bold text-gray-900">ضمان السرية التامة</h3>
                <p className="text-gray-600">
                  كل المعلومات التي تصلنا تُعامل بسرية تامة، مع حماية كاملة لهوية المبلّغين
                </p>
              </div>
            </div>
          </div>

          {/* Reportable Issues */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ما يمكن التبليغ عنه
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reportableIssues.map((issue, index) => (
                <Card key={index} className="hover:border-red-300 transition-colors">
                  <CardHeader>
                    <div className="text-4xl mb-2">{issue.icon}</div>
                    <CardTitle className="text-lg">{issue.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {issue.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Report Form */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-center">نموذج التبليغ</CardTitle>
              <CardDescription className="text-center text-base">
                املأ النموذج أدناه للتبليغ عن أي تجاوزات أو فساد
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center space-x-3 space-x-reverse p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <Checkbox
                    id="anonymous"
                    checked={formData.anonymous}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, anonymous: checked as boolean })
                    }
                  />
                  <Label htmlFor="anonymous" className="text-gray-700 font-medium cursor-pointer">
                    أرغب في التبليغ بشكل مجهول (اختياري)
                  </Label>
                </div>

                {!formData.anonymous && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم الكامل</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        placeholder="أدخل اسمك الكامل"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
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
                      <Label htmlFor="phone">رقم الهاتف (اختياري)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="اختياري"
                        className="h-12"
                      />
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label htmlFor="category">نوع التجاوز</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      setFormData({ ...formData, category: value })
                    }
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="اختر نوع التجاوز" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="job_abuse">استغلال الوظيفة</SelectItem>
                      <SelectItem value="financial">تجاوزات مالية</SelectItem>
                      <SelectItem value="property_misuse">سوء استخدام الممتلكات</SelectItem>
                      <SelectItem value="bribery">الرشوة والمحسوبية</SelectItem>
                      <SelectItem value="embezzlement">اختلاس الموارد</SelectItem>
                      <SelectItem value="other">أخرى</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">تفاصيل البلاغ</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    required
                    rows={6}
                    placeholder="يرجى وصف التجاوز بالتفصيل مع ذكر التواريخ والأماكن والأشخاص المعنيين إن أمكن..."
                    className="resize-none"
                  />
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>ملاحظة:</strong> يرجى تقديم معلومات دقيقة ومفصلة قدر الإمكان
                    لمساعدتنا في معالجة بلاغكم بشكل فعال. جميع المعلومات ستبقى سرية تماماً.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 h-12 text-lg"
                >
                  إرسال البلاغ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ماذا يحدث بعد تقديم البلاغ؟
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl mb-3">1️⃣</div>
                <h3 className="font-bold text-gray-900 mb-2">المراجعة الأولية</h3>
                <p className="text-sm text-gray-600">
                  نقوم بمراجعة بلاغكم وتصنيفه حسب الأولوية
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl mb-3">2️⃣</div>
                <h3 className="font-bold text-gray-900 mb-2">التحقيق</h3>
                <p className="text-sm text-gray-600">
                  نبدأ في جمع المعلومات والتحقق من الوقائع
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl mb-3">3️⃣</div>
                <h3 className="font-bold text-gray-900 mb-2">المتابعة</h3>
                <p className="text-sm text-gray-600">
                  نتخذ الإجراءات اللازمة ونبقيكم على اطلاع
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

