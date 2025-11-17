import Link from "next/link";
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
          يعمل المكتب الولائي على ترسيخ مبادئ الشفافية والنزاهة داخل المجتمع، وتعزيز ثقافة
          الوقاية من الفساد من خلال برامج تحسيسية، تكوينية، ورقابية تستهدف مختلف الفاعلين.
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
          نهدف إلى بناء بيئة عمل وإدارة عمومية قائمة على المسؤولية واحترام القانون، بما يضمن
          حماية الممتلكات العمومية وترسيخ الثقة بين المواطن والمؤسسات.
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

      {/* Goals Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          أهدافنا الأساسية
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "🎯",
              title: "نشر ثقافة الوقاية",
              description: "نشر ثقافة الوقاية من الفساد ومحاربته عبر برامج توعوية شاملة.",
            },
            {
              icon: "🛡️",
              title: "حماية الممتلكات",
              description: "حماية الممتلكات العمومية ومتابعة أي تجاوزات محتملة.",
            },
            {
              icon: "📊",
              title: "دعم الشفافية",
              description: "دعم الشفافية والمساءلة داخل المؤسسات والإدارات.",
            },
            {
              icon: "🤝",
              title: "تعزيز التعاون",
              description: "تعزيز التعاون بين المواطنين والمؤسسات لمواجهة الفساد.",
            },
            {
              icon: "📢",
              title: "آليات التبليغ",
              description: "تقديم آليات فعّالة للتبليغ وحماية المبلّغين.",
            },
            {
              icon: "⚖️",
              title: "احترام القانون",
              description: "ترسيخ احترام القانون والمسؤولية في جميع المجالات.",
            },
          ].map((goal, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">{goal.icon}</div>
                <CardTitle className="text-xl">{goal.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {goal.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
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
