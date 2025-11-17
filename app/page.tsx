import Link from "next/link";
import { Target, Eye, Star, FileText, Scale, GraduationCap, Megaphone, BarChart, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          المنظمة الوطنية للوقاية من الفساد
          <br />
          وحماية الممتلكات العامة
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
          مؤسسة ذات طابع خاص، معتمدة بموجب عقد توثيقي رقم 2024/1309، تعمل على تعزيز قيم 
          النزاهة، حماية المال العام، ومحاربة الفساد بكل أشكاله، وفق القوانين الجزائرية 
          وبالتنسيق مع السلطات المختصة.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/report">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6 h-auto">
              التبليغ عن الفساد
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-2">
              تعرف علينا
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
              <CardTitle className="text-2xl mb-2">رسالتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center leading-relaxed">
                تكريس ثقافة الشفافية والنزاهة في المجتمع، وحماية الممتلكات العامة، وتعزيز دور 
                المواطن في وقاية الفساد.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Eye className="w-12 h-12 text-green-600" />
              </div>
              <CardTitle className="text-2xl mb-2">رؤيتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center leading-relaxed">
                جزائر خالية من الفساد، قائمة على العدالة والحوكمة الرشيدة، والدفاع عن 
                المصلحة العامة.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Star className="w-12 h-12 text-purple-600" />
              </div>
              <CardTitle className="text-2xl mb-2">قيمنا</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full ml-2"></span>
                  النزاهة
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full ml-2"></span>
                  المسؤولية
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full ml-2"></span>
                  الشفافية
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full ml-2"></span>
                  احترام القانون
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full ml-2"></span>
                  خدمة الصالح العام
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
            خدماتنا
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                color: "text-blue-600",
                title: "استقبال التبليغات",
                description: "استقبال التبليغات والشكاوى المتعلقة بحالات الفساد.",
              },
              {
                icon: Scale,
                color: "text-purple-600",
                title: "التوجيه القانوني",
                description: "تقديم التوجيه القانوني في مجال حماية الممتلكات العامة.",
              },
              {
                icon: GraduationCap,
                color: "text-green-600",
                title: "دورات تكوينية",
                description: "تنظيم دورات تكوينية حول النزاهة والحوكمة.",
              },
              {
                icon: Megaphone,
                color: "text-orange-600",
                title: "نشر الوعي",
                description: "نشر الوعي عبر حملات وملتقيات وندوات.",
              },
              {
                icon: BarChart,
                color: "text-teal-600",
                title: "تقارير دورية",
                description: "إعداد تقارير دورية حول الفساد المحلي.",
              },
              {
                icon: Handshake,
                color: "text-indigo-600",
                title: "التعاون المؤسساتي",
                description: "التعاون مع الهيئات الرسمية في معالجة الملفات.",
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <Icon className={`w-10 h-10 mb-2 ${service.color}`} />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">مرحباً بكم</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            في الموقع الرسمي للمكتب الولائي، فضاؤكم المفتوح للحصول على المعلومات، التظلمات،
            آليات التبليغ، وأخبار نشاطاتنا الميدانية.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          روابط سريعة
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "المهام والصلاحيات",
              description: "تعرف على مهام وصلاحيات المكتب الولائي",
              href: "/mission",
              badge: "مهام",
              badgeVariant: "default" as const,
            },
            {
              title: "الأخبار والنشاطات",
              description: "آخر أخبار ونشاطات المكتب الولائي",
              href: "/news",
              badge: "جديد",
              badgeVariant: "secondary" as const,
            },
            {
              title: "اتصل بنا",
              description: "تواصل معنا لأي استفسار أو شكوى",
              href: "/contact",
              badge: "تواصل",
              badgeVariant: "outline" as const,
            },
          ].map((link, index) => (
            <Link key={index} href={link.href}>
              <Card className="hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{link.title}</CardTitle>
                    <Badge variant={link.badgeVariant}>{link.badge}</Badge>
                  </div>
                  <CardDescription className="text-base">
                    {link.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-blue-600 font-semibold inline-flex items-center">
                    اقرأ المزيد ←
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
