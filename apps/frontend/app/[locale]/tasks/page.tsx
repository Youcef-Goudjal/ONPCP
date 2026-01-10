import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getTasksPage } from "@/lib/api/pages";
import Link from "next/link";

interface TasksPageProps {
  params: Promise<{ locale: string }>;
}

const statusBadgeColors: Record<string, string> = {
  نشط: "bg-green-500",
  مستمر: "bg-blue-500",
  دوري: "bg-purple-500",
  موسمي: "bg-yellow-500",
};

const priorityBadgeColors: Record<string, string> = {
  حرجة: "bg-red-600 text-white",
  عالية: "bg-orange-600 text-white",
  متوسطة: "bg-blue-600 text-white",
};

export default async function TasksPage({ params }: TasksPageProps) {
  const { locale } = await params;
  const pageData = await getTasksPage(locale);

  if (!pageData) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">المحتوى غير متاح</h1>
          <p className="text-gray-600">لم يتم العثور على محتوى الصفحة</p>
        </div>
      </div>
    );
  }

  const {
    heroTitle,
    heroSubtitle,
    scopeTitle,
    scopeDescription,
    tasks = [],
    statistics = [],
    ctaTitle,
    ctaDescription,
  } = pageData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {heroTitle || "المهام والأنشطة"}
          </h1>
          {heroSubtitle && (
            <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
              {heroSubtitle}
            </p>
          )}
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-16">
        {(scopeTitle || scopeDescription) && (
          <div className="max-w-4xl mx-auto text-center mb-16">
            {scopeTitle && (
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{scopeTitle}</h2>
            )}
            {scopeDescription && (
              <p className="text-lg text-gray-700 leading-relaxed mb-4">{scopeDescription}</p>
            )}
            {tasks.length > 0 && (
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                {Array.from(new Set(tasks.map((t) => t.priority)))
                  .filter(Boolean)
                  .map((priority) => (
                    <div key={priority} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow">
                      <div className={`w-3 h-3 rounded-full ${priorityBadgeColors[priority as string] || "bg-gray-600"}`}></div>
                      <span className="text-sm font-medium">{priority}</span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}

        {/* Tasks Grid */}
        {tasks.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <Card
                key={task.id}
                className="hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-5xl">{task.icon}</div>
                    <div className="flex flex-col gap-2 items-end">
                      <Badge className={priorityBadgeColors[task.priority] || "bg-gray-600 text-white"}>
                        {task.priority}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${statusBadgeColors[task.status] || "bg-gray-500"}`}></div>
                        <span className="text-xs text-gray-600">{task.status}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{task.title}</CardTitle>
                  <CardDescription className="text-base">
                    {task.description}
                  </CardDescription>
                </CardHeader>
                {task.details && task.details.length > 0 && (
                  <CardContent>
                    <ul className="space-y-2">
                      {task.details.map((detail, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <svg
                            className="w-4 h-4 ml-2 mt-0.5 flex-shrink-0 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
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
                )}
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Statistics Section */}
      {statistics.length > 0 && (
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              إحصائيات النشاط
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {statistics.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-5xl mb-3">{stat.icon}</div>
                    <div className={`text-4xl font-bold mb-2 ${stat.color || "text-gray-600"}`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      {(ctaTitle || ctaDescription) && (
        <section className="container mx-auto px-4 py-16">
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardHeader className="text-center">
              {ctaTitle && <CardTitle className="text-2xl mb-2">{ctaTitle}</CardTitle>}
              {ctaDescription && (
                <CardDescription className="text-base">{ctaDescription}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="text-center">
              <Link
                href={`/${locale}/report`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                التبليغ عن الفساد
              </Link>
            </CardContent>
          </Card>
        </section>
      )}
    </div>
  );
}
