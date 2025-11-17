import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TasksPage() {
  const mainTasks = [
    {
      id: 1,
      title: "التوعية والتحسيس",
      icon: "📢",
      description: "نشر ثقافة الوقاية من الفساد ومحاربته في المجتمع",
      details: [
        "تنظيم حملات توعوية في المؤسسات التعليمية والإدارية",
        "إعداد برامج تحسيسية موجهة للمواطنين",
        "نشر المطبوعات والمواد الإعلامية التوعوية",
        "تنظيم ندوات ومؤتمرات حول وقاية الفساد",
      ],
      priority: "عالية",
      status: "مستمر",
      color: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      title: "تلقي التبليغات",
      icon: "📝",
      description: "استقبال ومعالجة التبليغات المتعلقة بالفساد",
      details: [
        "توفير قنوات آمنة للتبليغ عن الفساد",
        "حماية هوية المبلّغين وضمان سريتهم",
        "تصنيف وتوثيق جميع التبليغات الواردة",
        "المتابعة الدقيقة لكل حالة مبلغ عنها",
      ],
      priority: "حرجة",
      status: "نشط",
      color: "bg-red-100 text-red-800",
    },
    {
      id: 3,
      title: "التحقيقات الميدانية",
      icon: "🔍",
      description: "إجراء التحقيقات في قضايا الفساد المشتبه بها",
      details: [
        "التحقق من صحة التبليغات الواردة",
        "إجراء تحقيقات ميدانية معمقة",
        "جمع الأدلة والوثائق اللازمة",
        "إعداد تقارير تحقيق شاملة",
      ],
      priority: "عالية",
      status: "مستمر",
      color: "bg-orange-100 text-orange-800",
    },
    {
      id: 4,
      title: "الرقابة والتفتيش",
      icon: "🛡️",
      description: "مراقبة المؤسسات والإدارات العمومية",
      details: [
        "إجراء زيارات تفتيشية دورية",
        "مراقبة الصفقات العمومية",
        "التأكد من احترام قواعد الشفافية",
        "فحص إجراءات الشراء والتعاقدات",
      ],
      priority: "عالية",
      status: "دوري",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 5,
      title: "الدراسات والأبحاث",
      icon: "📊",
      description: "إجراء دراسات حول ظاهرة الفساد وأسبابها",
      details: [
        "تحليل أنماط الفساد في القطاعات المختلفة",
        "إعداد دراسات إحصائية سنوية",
        "دراسة التشريعات والقوانين ذات الصلة",
        "تقديم توصيات للوقاية من الفساد",
      ],
      priority: "متوسطة",
      status: "مستمر",
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: 6,
      title: "التنسيق المؤسساتي",
      icon: "🤝",
      description: "التنسيق مع الجهات الحكومية والقضائية",
      details: [
        "التعاون مع الجهات القضائية والأمنية",
        "التنسيق مع الإدارات المحلية",
        "تبادل المعلومات مع المكاتب الولائية الأخرى",
        "المشاركة في الاجتماعات الوطنية",
      ],
      priority: "عالية",
      status: "نشط",
      color: "bg-indigo-100 text-indigo-800",
    },
    {
      id: 7,
      title: "التكوين والتدريب",
      icon: "🎓",
      description: "تنظيم دورات تكوينية للموظفين والمسؤولين",
      details: [
        "تنظيم دورات تكوينية حول النزاهة والشفافية",
        "تدريب الموظفين على آليات الوقاية من الفساد",
        "ورشات عمل للإداريين والمسؤولين",
        "برامج تكوينية للمجتمع المدني",
      ],
      priority: "متوسطة",
      status: "موسمي",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 8,
      title: "إعداد التقارير",
      icon: "📋",
      description: "إعداد تقارير دورية حول نشاطات المكتب",
      details: [
        "إعداد تقارير شهرية وربع سنوية",
        "تقارير سنوية حول حالة الفساد",
        "تقارير خاصة حول قضايا معينة",
        "نشر الإحصائيات والمعطيات",
      ],
      priority: "عالية",
      status: "دوري",
      color: "bg-gray-100 text-gray-800",
    },
    {
      id: 9,
      title: "حماية الممتلكات العامة",
      icon: "🏛️",
      description: "متابعة حماية وصيانة الممتلكات العمومية",
      details: [
        "رصد الاعتداءات على الممتلكات العامة",
        "متابعة صيانة المرافق العمومية",
        "التحقيق في حالات التبديد أو الإتلاف",
        "التنسيق لحماية الأملاك العامة",
      ],
      priority: "عالية",
      status: "مستمر",
      color: "bg-teal-100 text-teal-800",
    },
  ];

  const statusBadgeColors = {
    "نشط": "bg-green-500",
    "مستمر": "bg-blue-500",
    "دوري": "bg-purple-500",
    "موسمي": "bg-yellow-500",
  };

  const priorityBadgeColors = {
    "حرجة": "bg-red-600 text-white",
    "عالية": "bg-orange-600 text-white",
    "متوسطة": "bg-blue-600 text-white",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            المهام والأنشطة
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
            تعرف على المهام الأساسية والأنشطة التي يقوم بها المكتب الولائي للوقاية من الفساد
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            نطاق العمل
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            يتولى المكتب الولائي للوقاية من الفساد وحماية الممتلكات العامة مجموعة من المهام
            الرئيسية التي تهدف إلى ترسيخ ثقافة النزاهة والشفافية في المجتمع، ومحاربة جميع
            أشكال الفساد الإداري والمالي.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow">
              <div className="w-3 h-3 rounded-full bg-red-600"></div>
              <span className="text-sm font-medium">حرجة</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow">
              <div className="w-3 h-3 rounded-full bg-orange-600"></div>
              <span className="text-sm font-medium">عالية</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <span className="text-sm font-medium">متوسطة</span>
            </div>
          </div>
        </div>

        {/* Tasks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainTasks.map((task) => (
            <Card 
              key={task.id} 
              className="hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="text-5xl">{task.icon}</div>
                  <div className="flex flex-col gap-2 items-end">
                    <Badge className={priorityBadgeColors[task.priority as keyof typeof priorityBadgeColors]}>
                      {task.priority}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <div className={`w-2 h-2 rounded-full ${statusBadgeColors[task.status as keyof typeof statusBadgeColors]}`}></div>
                      <span className="text-xs text-gray-600">{task.status}</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{task.title}</CardTitle>
                <CardDescription className="text-base">
                  {task.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {task.details.map((detail, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                      <svg 
                        className="w-4 h-4 ml-2 mt-0.5 flex-shrink-0 text-green-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            إحصائيات النشاط
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "📊",
                number: "250+",
                label: "تبليغ معالج",
                color: "text-blue-600",
              },
              {
                icon: "🔍",
                number: "120+",
                label: "تحقيق ميداني",
                color: "text-red-600",
              },
              {
                icon: "📢",
                number: "45+",
                label: "حملة توعوية",
                color: "text-green-600",
              },
              {
                icon: "🎓",
                number: "30+",
                label: "دورة تكوينية",
                color: "text-purple-600",
              },
            ].map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-5xl mb-3">{stat.icon}</div>
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">كن جزءًا من الحل</CardTitle>
            <CardDescription className="text-base">
              مشاركتكم ضرورية في بناء مجتمع نزيه وشفاف
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              إذا كنت على علم بأي حالة فساد أو سوء استخدام للممتلكات العامة، نشجعك على 
              التبليغ عنها. هويتك محمية ومعلوماتك سرية.
            </p>
            <a 
              href="/report" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                />
              </svg>
              التبليغ عن الفساد
            </a>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

