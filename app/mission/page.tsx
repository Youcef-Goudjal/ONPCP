import { Target, Megaphone, Handshake, Mic, FileText, BarChart, Search, Scale, CheckCircle } from "lucide-react";

export default function Mission() {
  const missions = [
    {
      icon: Target,
      color: "text-blue-600",
      title: "تعزيز ثقافة محاربة الفساد",
      description: "تعزيز ثقافة محاربة الفساد في المجتمع من خلال برامج توعوية شاملة",
    },
    {
      icon: Megaphone,
      color: "text-orange-600",
      title: "التوعية بخطورة الفساد",
      description: "التوعية بخطورة الفساد وآثاره السلبية على التنمية الوطنية والمحلية",
    },
    {
      icon: Handshake,
      color: "text-green-600",
      title: "التعاون مع السلطات",
      description: "التعاون مع السلطات المحلية والأمنية في إطار القانون الجزائري",
    },
    {
      icon: Mic,
      color: "text-purple-600",
      title: "تنظيم الملتقيات والمحاضرات",
      description: "تنظيم ملتقيات ومحاضرات وحملات تحسيسية حول الوقاية من الفساد",
    },
    {
      icon: FileText,
      color: "text-teal-600",
      title: "استقبال التبليغات",
      description: "استقبال التبليغات ذات الصلة بحماية المال العام والممتلكات العمومية",
    },
    {
      icon: BarChart,
      color: "text-indigo-600",
      title: "إعداد التقارير والمقترحات",
      description: "إعداد تقارير ومقترحات للجهات الرسمية حول قضايا الفساد",
    },
    {
      icon: Search,
      color: "text-red-600",
      title: "متابعة ملفات الممتلكات",
      description: "متابعة الملفات المتعلقة بالمساس بالممتلكات العامة وحمايتها",
    },
    {
      icon: Scale,
      color: "text-gray-700",
      title: "ترسيخ الحوكمة الرشيدة",
      description: "ترسيخ مبادئ الحوكمة الرشيدة والشفافية في المؤسسات",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">المهام والصلاحيات</h1>
          <p className="text-xl max-w-3xl mx-auto">
            نعمل على تحقيق أهدافنا من خلال مجموعة شاملة من المهام والصلاحيات
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              مهام المكتب الولائي
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              يتولى المكتب الولائي مجموعة من المهام الأساسية لتحقيق رسالته في محاربة الفساد
              وحماية الممتلكات العامة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {missions.map((mission, index) => {
              const Icon = mission.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1"
                >
                  <Icon className={`w-12 h-12 mb-4 ${mission.color}`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{mission.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{mission.description}</p>
                </div>
              );
            })}
          </div>

          {/* Detailed Description */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">الإطار القانوني</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="bg-white p-4 rounded-lg font-semibold">
                تعمل المنظمة الوطنية للوقاية من الفساد وحماية الممتلكات العامة وفقاً لأحكام 
                <span className="text-green-600 mx-1">القانون العضوي 06-12</span>
                المتعلق بالجمعيات، وبموجب
                <span className="text-green-600 mx-1">عقد توثيقي رقم 2024/1309</span>.
              </p>
              <p>
                يتولى المكتب الولائي تنفيذ الأهداف الرئيسية للمنظمة على المستوى المحلي، من خلال 
                التنسيق مع السلطات المحلية والأمنية في إطار القانون، وتنظيم ملتقيات ومحاضرات 
                وحملات تحسيسية تستهدف مختلف شرائح المجتمع.
              </p>
              <p>
                كما يقوم المكتب باستقبال التبليغات ذات الصلة بحماية المال العام، مع ضمان السرية 
                التامة للمبلّغين، وإعداد تقارير ومقترحات للجهات الرسمية، ومتابعة الملفات المتعلقة 
                بالمساس بالممتلكات العامة.
              </p>
              <p>
                تلتزم المنظمة بترسيخ مبادئ الحوكمة الرشيدة والشفافية في جميع أعمالها، والتعاون 
                الفعّال مع كافة الجهات المعنية لتحقيق رؤية جزائر خالية من الفساد.
              </p>
            </div>
          </div>

          {/* Key Principles */}
          <div className="bg-white border-2 border-green-600 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              المبادئ الأساسية في عملنا
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "الاستقلالية",
                  description: "العمل بشكل مستقل بعيداً عن أي تأثيرات خارجية",
                },
                {
                  title: "المهنية",
                  description: "الالتزام بأعلى معايير المهنية والاحترافية",
                },
                {
                  title: "الموضوعية",
                  description: "التعامل مع جميع القضايا بموضوعية وحياد تام",
                },
                {
                  title: "السرية",
                  description: "ضمان السرية التامة للمعلومات والمبلغين",
                },
              ].map((principle, index) => (
                <div key={index} className="flex items-start space-x-3 space-x-reverse">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{principle.title}</h4>
                    <p className="text-gray-600 text-sm">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            هل لديك بلاغ عن فساد أو تجاوزات؟
          </h2>
          <p className="text-lg mb-6">نحن هنا لمساعدتك وضمان سرية معلوماتك</p>
          <a
            href="/report"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            قدم بلاغك الآن
          </a>
        </div>
      </section>
    </div>
  );
}

