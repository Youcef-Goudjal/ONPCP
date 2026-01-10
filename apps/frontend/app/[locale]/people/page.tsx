import { Calendar, Landmark, Settings, Scale, Building } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPeople, getDepartments } from "@/lib/api";
import type { Person, Department } from "@onpcp/types";

// Fallback data when Strapi is not available
const fallbackPeople = [
  { id: 1, title: "رئيس المكتب الولائي", name: "مولفرعة إبراهيم خليل", category: "إدارة عليا" },
  { id: 2, title: "نائب الرئيس الأول", name: "ميسوكة عطاء الله", category: "إدارة عليا" },
  { id: 3, title: "نائب الرئيس الثاني", name: "بن خليفة عطاء الله", category: "إدارة عليا" },
  { id: 4, title: "مسؤول التنظيم والإدارة", name: "خنشة أحمد", category: "إدارة" },
  { id: 5, title: "أمين المال", name: "بوزياني الطاهر", category: "مالية" },
  { id: 6, title: "مكلف بالسكن والعمران والأشغال العمومية", name: "شريفي فاطمة الزهراء", category: "قطاعات" },
  { id: 7, title: "مكلف بالصحة", name: "بن قيط هيثم الطاهر", category: "قطاعات" },
  { id: 8, title: "مكلف بالتربية والتعليم", name: "شقنان أحمد", category: "قطاعات" },
  { id: 9, title: "مكلف بالفلاحة والتنمية الريفية", name: "داودي ياسين", category: "قطاعات" },
  { id: 10, title: "مكلف التعليم العالي والبحث العلمي", name: "جعيرن الطيب", category: "قطاعات" },
  { id: 11, title: "عضو مكلف بالمؤسسات المصغرة والناشئة", name: "أولاد جديد لخضر كمال", category: "قطاعات" },
  { id: 12, title: "مكلف الشباب والرياضة", name: "قنيول أحمد", category: "قطاعات" },
  { id: 13, title: "مكلف التجارة وترقية الصادرات", name: "قرميط بشرى", category: "قطاعات" },
  { id: 14, title: "مكلف بالضمان الإجتماعي", name: "رزوق عبد القادر فاروق", category: "قطاعات" },
  { id: 15, title: "المكلف بالإعلام والإتصال", name: "بلهاني سفيان", category: "إعلام" },
  { id: 16, title: "مكلف بالسياحة والثقافة", name: "شاللي فاطنة", category: "قطاعات" },
  { id: 17, title: "مستشار مكلف بالشؤون القانونية", name: "لطرش زكرياء", category: "قانوني" },
  { id: 18, title: "مستشار مكلف بالبروتوكولات والتنظيم العام", name: "شايفة أحمد", category: "تنظيم" },
];

const fallbackDepartments = [
  { icon: "Landmark", color: "text-purple-600", title: "الإدارة العليا", description: "الرئاسة ونواب الرئيس", count: 3 },
  { icon: "Settings", color: "text-blue-600", title: "التنظيم والإدارة", description: "التنظيم، المالية، والإعلام", count: 4 },
  { icon: "Scale", color: "text-gray-700", title: "الشؤون القانونية", description: "الاستشارات والبروتوكولات", count: 2 },
  { icon: "Building", color: "text-green-600", title: "القطاعات المختصة", description: "مكلفون بالقطاعات الحكومية", count: 9 },
];

const categoryColors: Record<string, string> = {
  "إدارة عليا": "bg-purple-100 text-purple-800",
  "إدارة": "bg-blue-100 text-blue-800",
  "إعلام": "bg-cyan-100 text-cyan-800",
  "مالية": "bg-green-100 text-green-800",
  "قانوني": "bg-gray-100 text-gray-800",
  "تنظيم": "bg-indigo-100 text-indigo-800",
  "قطاعات": "bg-orange-100 text-orange-800",
};

const iconMap: Record<string, typeof Landmark> = {
  Landmark,
  Settings,
  Scale,
  Building,
};

interface PeoplePageProps {
  params: Promise<{ locale: string }>;
}

export default async function PeoplePage({ params }: PeoplePageProps) {
  const { locale } = await params;

  // Fetch data from Strapi
  const [strapiPeople, strapiDepartments] = await Promise.all([
    getPeople(locale),
    getDepartments(locale),
  ]);

  // Use Strapi data or fallback
  const people = strapiPeople.length > 0
    ? strapiPeople.map((p) => ({
        id: p.id,
        name: p.attributes.name,
        title: p.attributes.title,
        category: p.attributes.category,
      }))
    : fallbackPeople;

  const departments = strapiDepartments.length > 0
    ? strapiDepartments.map((d) => ({
        icon: d.attributes.icon || "Building",
        color: d.attributes.color || "text-gray-600",
        title: d.attributes.title,
        description: d.attributes.description || "",
        count: d.attributes.memberCount,
      }))
    : fallbackDepartments;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            الهيكل التنظيمي
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
            تعرف على فريق العمل بالمكتب الولائي للوقاية من الفساد وحماية الممتلكات العامة
          </p>
        </div>
      </section>

      {/* Organization Chart Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">أعضاء الفريق</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            يتكون المكتب الولائي من فريق متخصص ومتفان في خدمة الصالح العام
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((person) => (
            <Card
              key={person.id}
              className="hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl font-bold">
                    {person.name.split(" ")[0]?.[0] || ""}
                  </div>
                  <Badge className={categoryColors[person.category] || "bg-gray-100 text-gray-800"}>
                    {person.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-1">{person.title}</CardTitle>
                <CardDescription className="text-base font-semibold text-gray-700">
                  {person.name}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 ml-2 flex-shrink-0" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Departments Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            الأقسام والمصالح
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => {
              const Icon = iconMap[dept.icon] || Building;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-3">
                      <Icon className={`w-12 h-12 ${dept.color}`} />
                    </div>
                    <CardTitle className="text-lg mb-2">{dept.title}</CardTitle>
                    <Badge variant="secondary" className="mb-2">
                      {dept.count} {dept.count === 1 ? "عضو" : "أعضاء"}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{dept.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">المكتب الولائي للأغواط</CardTitle>
            <CardDescription className="text-lg">
              فريق من{" "}
              <span className="font-bold text-gray-900">{people.length} عضواً</span>{" "}
              متفانين في خدمة الصالح العام
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <p className="text-center text-gray-700 max-w-2xl mb-6">
              يعمل المكتب الولائي على ترسيخ قيم النزاهة والشفافية ومحاربة الفساد في
              جميع القطاعات الحكومية والإدارية بولاية الأغواط.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {Object.entries(categoryColors).map(([category, color]) => {
                const count = people.filter((p) => p.category === category).length;
                if (count === 0) return null;
                return (
                  <Badge key={category} className={`${color} px-4 py-2`}>
                    {count} {category}
                  </Badge>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
