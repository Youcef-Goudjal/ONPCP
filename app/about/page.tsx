export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
          <p className="text-xl max-w-3xl mx-auto">
            هيئة مدنية مستقلة تعمل على تعزيز مبادئ النزاهة والحوكمة الرشيدة
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">نبذة عنا</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              المكتب الولائي للمنظمة الوطنية للوقاية من الفساد وحماية الممتلكات العامة هو
              هيئة مدنية مستقلة تعمل على تعزيز مبادئ النزاهة والحوكمة الرشيدة، وفق إطار
              قانوني وتنظيمي يحترم المعايير الوطنية والدولية.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-blue-600 p-8 rounded-xl">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رؤيتنا</h3>
              <p className="text-gray-700 leading-relaxed">
                بناء مجتمع تسوده الشفافية والمساءلة، خالٍ من مظاهر الفساد، قائم على احترام
                القانون وصون المال العام.
              </p>
            </div>

            <div className="bg-white border-2 border-green-600 p-8 rounded-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رسالتنا</h3>
              <p className="text-gray-700 leading-relaxed">
                العمل على نشر الوعي ومحاربة الفساد عبر برامج عملية وشراكات فعّالة مع
                المجتمع المدني، المؤسسات العمومية والخاصة، والهيئات الرقابية.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">قيمنا</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "💎",
                  title: "النزاهة",
                  description: "الالتزام بأعلى معايير الأمانة والصدق",
                },
                {
                  icon: "🔍",
                  title: "الشفافية",
                  description: "الوضوح والمكاشفة في جميع أعمالنا",
                },
                {
                  icon: "🤲",
                  title: "المسؤولية",
                  description: "تحمل المسؤولية الكاملة عن أعمالنا",
                },
                {
                  icon: "⚖️",
                  title: "احترام القانون",
                  description: "الالتزام الصارم بالقوانين والأنظمة",
                },
                {
                  icon: "🏛️",
                  title: "حماية المصلحة العامة",
                  description: "جعل المصلحة العامة فوق كل اعتبار",
                },
                {
                  icon: "🤝",
                  title: "التعاون",
                  description: "بناء شراكات فعالة مع جميع الأطراف",
                },
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            معاً نبني مجتمعاً نزيهاً وشفافاً
          </h2>
          <p className="text-lg mb-6">انضم إلينا في مكافحة الفساد وحماية الممتلكات العامة</p>
        </div>
      </section>
    </div>
  );
}

