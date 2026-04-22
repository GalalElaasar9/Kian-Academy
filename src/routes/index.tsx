import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { SubscribeButton } from "@/components/SubscribeButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CountdownTimer } from "@/components/CountdownTimer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "كورس البرمجة الاحترافي — تعلم وابدأ مشوارك" },
      { name: "description", content: "كورس شامل لتعلم البرمجة من الصفر للاحتراف مع مشاريع حقيقية وضمان استرداد كامل." },
      { property: "og:title", content: "كورس البرمجة الاحترافي" },
      { property: "og:description", content: "تعلم البرمجة من الصفر للاحتراف مع مشاريع حقيقية." },
    ],
  }),
  component: Index,
});

const courseTopics = [
  { icon: "💻", title: "أساسيات البرمجة", desc: "ابدأ من الصفر مع HTML, CSS, JavaScript" },
  { icon: "⚛️", title: "React.js", desc: "بناء واجهات تفاعلية احترافية" },
  { icon: "🚀", title: "Backend Development", desc: "Node.js و قواعد البيانات" },
  { icon: "🎨", title: "UI/UX Design", desc: "تصميم تجارب مستخدم استثنائية" },
  { icon: "📱", title: "تطبيقات الموبايل", desc: "React Native للأندرويد و iOS" },
  { icon: "☁️", title: "النشر والاستضافة", desc: "نشر مشاريعك على الإنترنت" },
];

const projects = [
  { img: project1, title: "لوحة تحكم تفاعلية", desc: "Dashboard كامل بالـ Charts" },
  { img: project2, title: "متجر إلكتروني", desc: "E-commerce متكامل" },
  { img: project3, title: "نظام تحليلات", desc: "Analytics System احترافي" },
];

const testimonials = [
  { name: "أحمد محمد", role: "Frontend Developer", text: "أفضل كورس اشتركت فيه! المحتوى منظم والشرح ممتاز جداً." },
  { name: "سارة علي", role: "Full Stack Developer", text: "بعد الكورس قدرت أشتغل في شركة كبيرة. شكراً لكم!" },
  { name: "محمود حسن", role: "Freelancer", text: "المشاريع العملية كانت رهيبة وساعدتني أبني portfolio قوي." },
];

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`py-20 px-4 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-primary/20 border border-primary/40 text-accent text-sm font-semibold mb-6">
              🔥 عرض محدود لفترة قصيرة
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-l from-accent via-primary-glow to-accent bg-clip-text text-transparent leading-tight">
              كورس البرمجة الاحترافي
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              تعلم البرمجة من الصفر للاحتراف مع مشاريع حقيقية تأهلك لسوق العمل
            </p>
            <SubscribeButton size="lg" />
          </motion.div>
        </div>
      </section>

      {/* Course Content */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">محتوى الكورس</span>
          </h2>
          <p className="text-center text-muted-foreground mb-14 text-lg">كل اللي محتاجه عشان تبقى مبرمج محترف</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {courseTopics.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-3xl p-8 hover:shadow-glow transition-all"
              >
                <div className="text-5xl mb-4">{t.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">{t.title}</h3>
                <p className="text-muted-foreground">{t.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center"><SubscribeButton /></div>
        </div>
      </Section>

      {/* Projects */}
      <Section className="bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">مشاريع الطلاب</span>
          </h2>
          <p className="text-center text-muted-foreground mb-14 text-lg">مشاريع حقيقية بناها طلابنا بعد الكورس</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl border border-border shadow-elegant"
              >
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 right-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{p.title}</h3>
                  <p className="text-muted-foreground">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center"><SubscribeButton /></div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">آراء الطلاب</span>
          </h2>
          <p className="text-center text-muted-foreground mb-14 text-lg">اسمع من طلابنا الناجحين</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-3xl p-8"
              >
                <div className="text-accent text-3xl mb-4">★★★★★</div>
                <p className="text-foreground/90 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-primary-foreground">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center"><SubscribeButton /></div>
        </div>
      </Section>

      {/* Guarantee */}
      <Section className="bg-card/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150 }}
            className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-primary shadow-glow mb-8 animate-float"
          >
            <span className="text-6xl">🛡️</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">ضمان استرداد 100%</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            لو الكورس مش عاجبك خلال أول 14 يوم، هترجعلك فلوسك كاملة بدون أي أسئلة.
            احنا واثقين في جودة الكورس وفي قدرتك إنك تتعلم وتحترف.
          </p>
          <SubscribeButton />
        </div>
      </Section>

      {/* Pricing + Countdown */}
      <Section>
        <div id="pricing" className="max-w-3xl mx-auto scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">العرض ينتهي خلال</span>
          </h2>
          <div className="mb-12 mt-8">
            <CountdownTimer />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card backdrop-blur-md border-2 border-primary/40 rounded-[2rem] p-10 md:p-14 shadow-elegant relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/30 rounded-full blur-3xl" />
            <div className="relative z-10 text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent font-bold text-sm mb-4">
                خصم 50%
              </span>
              <h3 className="text-3xl font-bold mb-6 text-foreground">الباقة الكاملة</h3>
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-2xl text-muted-foreground line-through">2000 جنيه</span>
              </div>
              <div className="text-7xl md:text-8xl font-black mb-2">
                <span className="bg-gradient-primary bg-clip-text text-transparent">999</span>
                <span className="text-3xl text-foreground mr-2">جنيه</span>
              </div>
              <p className="text-muted-foreground mb-8">دفعة واحدة — بدون اشتراكات شهرية</p>

              <ul className="text-right max-w-md mx-auto space-y-3 mb-10">
                {["وصول مدى الحياة لكل المحتوى", "كل التحديثات المستقبلية مجاناً", "شهادة إتمام معتمدة", "مجتمع خاص للطلاب", "دعم فني مباشر"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-foreground">
                    <span className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <SubscribeButton size="lg" />
            </div>
          </motion.div>
        </div>
      </Section>

      <footer className="text-center py-8 text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} جميع الحقوق محفوظة
      </footer>
    </main>
  );
}
