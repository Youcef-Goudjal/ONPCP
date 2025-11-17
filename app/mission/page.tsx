export default function Mission() {
  const missions = [
    {
      icon: "📊",
      title: "رصد ومتابعة المؤشرات",
      description: "رصد ومتابعة المؤشرات المتعلقة بالفساد على المستوى المحلي",
    },
    {
      icon: "📝",
      title: "استقبال البلاغات",
      description: "استقبال ومعالجة البلاغات المتعلقة بالتجاوزات المالية والإدارية",
    },
    {
      icon: "🎓",
      title: "التكوين والتدريب",
      description: "تنظيم دورات تكوينية وورشات عمل لتعزيز ثقافة النزاهة",
    },
    {
      icon: "🤝",
      title: "التنسيق مع السلطات",
      description: "التنسيق مع السلطات المحلية والجهوية لمحاربة كل أشكال الفساد",
    },
    {
      icon: "📄",
      title: "إعداد التقارير",
      description: "إعداد تقارير دورية حول وضعية الشفافية وحماية الممتلكات العامة",
    },
    {
      icon: "🛡️",
      title: "مرافقة المواطنين",
      description: "مرافقة المواطنين في تقديم شكاويهم وضمان سرية المعلومات",
    },
    {
      icon: "📢",
      title: "حملات التوعية",
      description: "القيام بحملات توعوية ميدانية وأيام دراسية",
    },
    {
      icon: "🔍",
      title: "المتابعة والتقييم",
      description: "متابعة تنفيذ التوصيات وتقييم مستوى الأداء والشفافية",
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
            {missions.map((mission, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{mission.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{mission.title}</h3>
                <p className="text-gray-700 leading-relaxed">{mission.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed Description */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">المزيد من التفاصيل</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                يعمل المكتب الولائي بشكل مستمر على رصد ومتابعة كافة المؤشرات المتعلقة
                بالفساد على المستوى المحلي، من خلال آليات عمل دقيقة وفعالة تضمن الوصول إلى
                المعلومات الصحيحة في الوقت المناسب.
              </p>
              <p>
                كما يتولى المكتب استقبال ومعالجة البلاغات الواردة من المواطنين بخصوص أي
                تجاوزات مالية أو إدارية، مع ضمان السرية التامة لهوية المبلغين وحمايتهم من أي
                انتقام أو تهديد.
              </p>
              <p>
                يقوم المكتب بتنظيم دورات تكوينية متخصصة وورشات عمل تستهدف مختلف الفئات في
                المجتمع، بهدف نشر ثقافة النزاهة وتعزيز الوعي بمخاطر الفساد وآليات مكافحته.
              </p>
              <p>
                ويتم التنسيق الدائم مع السلطات المحلية والجهوية والهيئات الرقابية لضمان
                التعاون الفعال في محاربة جميع أشكال الفساد وحماية المال العام.
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
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    ✓
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

