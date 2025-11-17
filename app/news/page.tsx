"use client";

import { useState } from "react";

export default function News() {
  // Sample news data - in a real app, this would come from a CMS or API
  const [newsItems] = useState([
    {
      id: 1,
      title: "ورشة تكوينية حول وقاية الفساد",
      date: "2025-11-15",
      category: "ورشات عمل",
      image: "🎓",
      excerpt:
        "تنظيم ورشة تكوينية لفائدة موظفي الإدارات العمومية حول آليات وقاية الفساد وتعزيز الشفافية",
      description:
        "نظم المكتب الولائي ورشة تكوينية مكثفة استهدفت موظفي الإدارات العمومية، حيث تم التطرق إلى أهم آليات وقاية الفساد وتعزيز ثقافة النزاهة في العمل الإداري.",
    },
    {
      id: 2,
      title: "حملة توعوية ميدانية",
      date: "2025-11-10",
      category: "حملات توعوية",
      image: "📢",
      excerpt: "إطلاق حملة توعوية واسعة للتحسيس بأهمية حماية الممتلكات العامة",
      description:
        "في إطار برنامجه التحسيسي، أطلق المكتب الولائي حملة توعوية ميدانية شملت عدة بلديات، بهدف التحسيس بأهمية حماية الممتلكات العامة والإبلاغ عن التجاوزات.",
    },
    {
      id: 3,
      title: "لقاء تنسيقي مع السلطات المحلية",
      date: "2025-11-05",
      category: "اجتماعات",
      image: "🤝",
      excerpt: "اجتماع تنسيقي مع السلطات المحلية لتعزيز التعاون في وقاية الفساد",
      description:
        "عقد المكتب الولائي اجتماعاً تنسيقياً مع ممثلي السلطات المحلية والهيئات الرقابية، لتعزيز التعاون والتنسيق في مجال وقاية الفساد وحماية المال العام.",
    },
    {
      id: 4,
      title: "يوم دراسي حول الحوكمة الرشيدة",
      date: "2025-10-28",
      category: "أيام دراسية",
      image: "📚",
      excerpt: "تنظيم يوم دراسي حول مبادئ الحوكمة الرشيدة والشفافية",
      description:
        "نظم المكتب الولائي يوماً دراسياً حول مبادئ الحوكمة الرشيدة والشفافية، بمشاركة خبراء وأكاديميين ومسؤولين من مختلف القطاعات.",
    },
    {
      id: 5,
      title: "تكريم المؤسسات الملتزمة بالشفافية",
      date: "2025-10-20",
      category: "فعاليات",
      image: "🏆",
      excerpt: "حفل تكريم المؤسسات العمومية التي أظهرت التزاماً بالشفافية والنزاهة",
      description:
        "أقام المكتب الولائي حفلاً لتكريم المؤسسات العمومية التي أظهرت التزاماً واضحاً بمبادئ الشفافية والنزاهة في تسيير شؤونها.",
    },
    {
      id: 6,
      title: "إطلاق منصة التبليغ الإلكترونية",
      date: "2025-10-15",
      category: "إعلانات",
      image: "💻",
      excerpt: "إطلاق المنصة الإلكترونية للتبليغ عن الفساد بشكل آمن وسري",
      description:
        "أعلن المكتب الولائي عن إطلاق منصة إلكترونية جديدة تتيح للمواطنين التبليغ عن حالات الفساد بشكل آمن وسري، مع ضمان حماية هوية المبلغين.",
    },
  ]);

  const [selectedNews, setSelectedNews] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const categories = [
    "all",
    "ورشات عمل",
    "حملات توعوية",
    "اجتماعات",
    "أيام دراسية",
    "فعاليات",
    "إعلانات",
  ];

  const filteredNews =
    filterCategory === "all"
      ? newsItems
      : newsItems.filter((item) => item.category === filterCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">الأخبار والنشاطات</h1>
          <p className="text-xl max-w-3xl mx-auto">
            تابع آخر أخبارنا ونشاطاتنا الميدانية في مجال وقاية الفساد
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-50 py-8 sticky top-16 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  filterCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-700 hover:bg-purple-50 border border-gray-300"
                }`}
              >
                {category === "all" ? "جميع الأخبار" : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer border border-gray-100 hover:-translate-y-1"
              onClick={() => setSelectedNews(item.id)}
            >
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-12 flex items-center justify-center">
                <div className="text-8xl">{item.image}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {new Date(item.date).toLocaleDateString("ar-DZ", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{item.excerpt}</p>
                <button className="text-purple-600 font-semibold hover:text-purple-800">
                  اقرأ المزيد ←
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">لا توجد أخبار</h3>
            <p className="text-gray-600">لم يتم العثور على أخبار في هذه الفئة</p>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-purple-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            اشترك في نشرتنا الإخبارية
          </h2>
          <p className="text-lg mb-6">احصل على آخر الأخبار والنشاطات مباشرة في بريدك</p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              اشترك
            </button>
          </div>
        </div>
      </section>

      {/* Modal for selected news */}
      {selectedNews && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const news = newsItems.find((item) => item.id === selectedNews);
              return news ? (
                <>
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-16 flex items-center justify-center">
                    <div className="text-9xl">{news.image}</div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {news.category}
                      </span>
                      <span className="text-gray-500">
                        {new Date(news.date).toLocaleDateString("ar-DZ", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {news.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      {news.description}
                    </p>
                    <button
                      onClick={() => setSelectedNews(null)}
                      className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors"
                    >
                      إغلاق
                    </button>
                  </div>
                </>
              ) : null;
            })()}
          </div>
        </div>
      )}
    </div>
  );
}

