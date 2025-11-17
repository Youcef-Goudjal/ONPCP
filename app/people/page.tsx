import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PeoplePage() {
  const organizationStructure = [
    {
      title: "المدير الولائي",
      name: "الأستاذ / محمد بن أحمد",
      role: "مدير المكتب الولائي",
      description: "الإشراف العام على جميع أنشطة المكتب الولائي وتنفيذ السياسات الوطنية للوقاية من الفساد",
      email: "director@onpcp.dz",
      phone: "023 XX XX XX",
      category: "إدارة عليا",
    },
    {
      title: "مدير الشؤون الإدارية والمالية",
      name: "الأستاذة / فاطمة بن علي",
      role: "مسؤولة الإدارة والمالية",
      description: "إدارة الموارد البشرية والمالية، وضمان حسن سير العمليات الإدارية",
      email: "admin@onpcp.dz",
      phone: "023 XX XX XX",
      category: "إدارة",
    },
    {
      title: "رئيس مصلحة التحقيقات",
      name: "الأستاذ / أحمد بن محمد",
      role: "رئيس مصلحة التحقيقات",
      description: "متابعة التبليغات، إجراء التحقيقات، وإعداد التقارير حول قضايا الفساد",
      email: "investigations@onpcp.dz",
      phone: "023 XX XX XX",
      category: "تحقيقات",
    },
    {
      title: "رئيس مصلحة التوعية",
      name: "الأستاذ / عمر بن يوسف",
      role: "رئيس مصلحة التوعية والإعلام",
      description: "تنظيم البرامج التحسيسية والحملات التوعوية للوقاية من الفساد",
      email: "awareness@onpcp.dz",
      phone: "023 XX XX XX",
      category: "توعية",
    },
    {
      title: "رئيس مصلحة الدراسات",
      name: "الدكتورة / سعاد بن خالد",
      role: "رئيسة مصلحة الدراسات والتحليل",
      description: "إجراء الدراسات والأبحاث حول ظاهرة الفساد وتحليل البيانات",
      email: "studies@onpcp.dz",
      phone: "023 XX XX XX",
      category: "دراسات",
    },
    {
      title: "المستشار القانوني",
      name: "الأستاذ / كمال بن عيسى",
      role: "مستشار قانوني",
      description: "تقديم الاستشارات القانونية ومتابعة الإجراءات القضائية",
      email: "legal@onpcp.dz",
      phone: "023 XX XX XX",
      category: "قانوني",
    },
  ];

  const categoryColors = {
    "إدارة عليا": "bg-purple-100 text-purple-800",
    "إدارة": "bg-blue-100 text-blue-800",
    "تحقيقات": "bg-red-100 text-red-800",
    "توعية": "bg-green-100 text-green-800",
    "دراسات": "bg-yellow-100 text-yellow-800",
    "قانوني": "bg-gray-100 text-gray-800",
  };

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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            أعضاء الفريق
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            يتكون المكتب الولائي من فريق متخصص ومتفان في خدمة الصالح العام
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizationStructure.map((person, index) => (
            <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl font-bold">
                    {person.name.split(" ")[1]?.[0] || ""}
                  </div>
                  <Badge 
                    className={categoryColors[person.category as keyof typeof categoryColors]}
                  >
                    {person.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-1">{person.title}</CardTitle>
                <CardDescription className="text-base font-semibold text-gray-700">
                  {person.name}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {person.description}
                </p>
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg 
                      className="w-4 h-4 ml-2 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                    <span dir="ltr">{person.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg 
                      className="w-4 h-4 ml-2 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                      />
                    </svg>
                    <span dir="ltr">{person.phone}</span>
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
            المصالح والأقسام
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🏛️",
                title: "الإدارة العامة",
                description: "الإشراف والتنسيق العام",
              },
              {
                icon: "🔍",
                title: "مصلحة التحقيقات",
                description: "التحقيق في قضايا الفساد",
              },
              {
                icon: "📢",
                title: "مصلحة التوعية",
                description: "التحسيس والتوعية",
              },
              {
                icon: "📊",
                title: "مصلحة الدراسات",
                description: "البحث والتحليل",
              },
            ].map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-5xl mb-3">{dept.icon}</div>
                  <CardTitle className="text-lg">{dept.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{dept.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">تواصل معنا</CardTitle>
            <CardDescription className="text-base">
              للاستفسارات أو للحصول على معلومات إضافية، يمكنكم التواصل معنا
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span dir="ltr">contact@onpcp.dz</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span dir="ltr">023 XX XX XX</span>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

