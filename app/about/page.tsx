import { Target, Megaphone, Handshake, Mic, FileText, BarChart, Search, Scale, Landmark, Users, MapPin, Settings, ShieldCheck, Gem, Heart, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
          <p className="text-xl max-w-3xl mx-auto">
            هيئة ذات طابع خاص تعمل على الوقاية من الفساد ونشر الوعي وحماية المال العام
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 mb-12">
            <CardHeader>
              <CardTitle className="text-3xl mb-2">التعريف بالمنظمة</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>المنظمة الوطنية للوقاية من الفساد وحماية الممتلكات العامة</strong> هي هيئة
                ذات طابع خاص تعمل على الوقاية من الفساد، نشر الوعي، حماية المال العام، وترسيخ
                مبادئ الحوكمة الرشيدة.
              </p>
              <div className="bg-white p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <span className="font-semibold">القانون الأساسي:</span> تلتزم المنظمة بأحكام
                  <span className="text-blue-600 font-semibold mx-1">القانون العضوي 06-12</span>
                  المتعلق بالجمعيات.
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-semibold">العقد التوثيقي:</span> رقم
                  <span className="text-blue-600 font-semibold mx-1">2024/1309</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Objectives Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              الأهداف الرئيسية
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  color: "text-blue-600",
                  title: "تعزيز ثقافة محاربة الفساد",
                  description: "تعزيز ثقافة محاربة الفساد في المجتمع",
                },
                {
                  icon: Megaphone,
                  color: "text-orange-600",
                  title: "التوعية بخطورة الفساد",
                  description: "التوعية بخطورة الفساد وآثاره على التنمية",
                },
                {
                  icon: Handshake,
                  color: "text-green-600",
                  title: "التعاون مع السلطات",
                  description: "التعاون مع السلطات المحلية والأمنية في إطار القانون",
                },
                {
                  icon: Mic,
                  color: "text-purple-600",
                  title: "تنظيم الفعاليات",
                  description: "تنظيم ملتقيات ومحاضرات وحملات تحسيسية",
                },
                {
                  icon: FileText,
                  color: "text-teal-600",
                  title: "استقبال التبليغات",
                  description: "استقبال التبليغات ذات الصلة بحماية المال العام",
                },
                {
                  icon: BarChart,
                  color: "text-indigo-600",
                  title: "إعداد التقارير",
                  description: "إعداد تقارير ومقترحات للجهات الرسمية",
                },
                {
                  icon: Search,
                  color: "text-red-600",
                  title: "المتابعة والرقابة",
                  description: "متابعة الملفات المتعلقة بالمساس بالممتلكات العامة",
                },
                {
                  icon: Scale,
                  color: "text-gray-700",
                  title: "الحوكمة الرشيدة",
                  description: "ترسيخ مبادئ الحوكمة والشفافية في المؤسسات",
                },
              ].map((objective, index) => {
                const Icon = objective.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <Icon className={`w-10 h-10 flex-shrink-0 ${objective.color}`} />
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

          {/* Organizational Structure */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              الهيكلة الوطنية
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Landmark,
                  color: "text-purple-600",
                  title: "الأمانة العامة",
                  badge: "مركزي",
                  badgeColor: "bg-purple-100 text-purple-800",
                },
                {
                  icon: Users,
                  color: "text-blue-600",
                  title: "المجلس الوطني",
                  badge: "تنسيقي",
                  badgeColor: "bg-blue-100 text-blue-800",
                },
                {
                  icon: MapPin,
                  color: "text-green-600",
                  title: "المكاتب الولائية",
                  badge: "محلي",
                  badgeColor: "bg-green-100 text-green-800",
                },
                {
                  icon: Settings,
                  color: "text-orange-600",
                  title: "اللجان المتخصصة",
                  badge: "تقني",
                  badgeColor: "bg-orange-100 text-orange-800",
                },
                {
                  icon: Search,
                  color: "text-red-600",
                  title: "فرق المتابعة والتحقيق",
                  badge: "ميداني",
                  badgeColor: "bg-red-100 text-red-800",
                },
                {
                  icon: Handshake,
                  color: "text-gray-600",
                  title: "المستشارون والأعضاء",
                  badge: "استشاري",
                  badgeColor: "bg-gray-100 text-gray-800",
                },
              ].map((structure, index) => {
                const Icon = structure.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-center mb-3">
                        <Icon className={`w-12 h-12 ${structure.color}`} />
                      </div>
                      <CardTitle className="text-lg mb-2">{structure.title}</CardTitle>
                      <Badge className={structure.badgeColor}>
                        {structure.badge}
                      </Badge>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Values Section */}
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">قيمنا الأساسية</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { icon: Gem, color: "text-purple-600", title: "النزاهة" },
                  { icon: Heart, color: "text-red-600", title: "المسؤولية" },
                  { icon: Eye, color: "text-blue-600", title: "الشفافية" },
                  { icon: Scale, color: "text-gray-700", title: "احترام القانون" },
                  { icon: Landmark, color: "text-indigo-600", title: "خدمة الصالح العام" },
                ].map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                      <div className="flex justify-center mb-3">
                        <Icon className={`w-10 h-10 ${value.color}`} />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">{value.title}</h4>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            معاً نبني جزائر خالية من الفساد
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            انضم إلينا في مسيرة الدفاع عن المصلحة العامة وترسيخ قيم النزاهة والشفافية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/people"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              تعرف على فريقنا
            </a>
            <a
              href="/report"
              className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              التبليغ عن الفساد
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
