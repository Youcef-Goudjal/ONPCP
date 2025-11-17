"use client";

import { useState } from "react";
import { Briefcase, DollarSign, Landmark, Handshake, BarChart, Scale, Lock, CheckCircle } from "lucide-react";
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
      icon: Briefcase,
      color: "text-blue-600",
      title: "استغلال الوظيفة",
      description: "استغلال الوظيفة العامة لتحقيق منفعة شخصية",
    },
    {
      icon: DollarSign,
      color: "text-green-600",
      title: "تجاوزات مالية",
      description: "تجاوزات مالية أو إدارية في المؤسسات العمومية",
    },
    {
      icon: Landmark,
      color: "text-purple-600",
      title: "سوء استخدام الممتلكات",
      description: "سوء استخدام أو إهمال الممتلكات والموارد العامة",
    },
    {
      icon: Handshake,
      color: "text-orange-600",
      title: "الرشوة والمحسوبية",
      description: "حالات الرشوة، المحسوبية، والمحاباة",
    },
    {
      icon: BarChart,
      color: "text-teal-600",
      title: "اختلاس الموارد",
      description: "اختلاس الموارد العامة أو إتلافها",
    },
    {
      icon: Scale,
      color: "text-gray-700",
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
          {/* Privacy and Confidentiality Notice */}
          <Card className="mb-12 border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Lock className="w-10 h-10 text-red-600" />
                <CardTitle className="text-2xl">السرية والحماية القانونية</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-r-4 border-red-600">
                <p className="text-gray-800 leading-relaxed font-semibold flex items-center gap-2">
                  <Lock className="w-5 h-5 text-red-600 flex-shrink-0" />
                  تُعالج جميع المعلومات بسرية تامة وفقاً للقانون
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" /> حماية كاملة للمبلّغين
                  </h4>
                  <p className="text-sm text-gray-600">
                    نضمن حماية هوية المبلّغين وعدم تعرضهم لأي انتقام أو ضرر
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" /> معالجة قانونية
                  </h4>
                  <p className="text-sm text-gray-600">
                    جميع البلاغات تُعالج وفقاً للإطار القانوني الجزائري
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                نوفّر للمواطنين آلية آمنة وسرّية للتبليغ عن أي تجاوزات أو ممارسات مشبوهة تمس
                المال العام أو تخالف القوانين المعمول بها. يمكنك اختيار التبليغ المجهول أو تقديم 
                بياناتك للمتابعة.
              </p>
            </CardContent>
          </Card>

          {/* Reportable Issues */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ما يمكن التبليغ عنه
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reportableIssues.map((issue, index) => {
                const Icon = issue.icon;
                return (
                  <Card key={index} className="hover:border-red-300 transition-colors">
                    <CardHeader>
                      <Icon className={`w-10 h-10 mb-2 ${issue.color}`} />
                      <CardTitle className="text-lg">{issue.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {issue.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
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

