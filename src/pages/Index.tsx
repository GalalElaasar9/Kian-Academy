import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { SubscribeButton } from "@/components/SubscribeButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CountdownTimer } from "@/components/CountdownTimer";

const courseTopics = [
  { num: "01", title: "أساسيات البرمجة", desc: "ابدأ من الصفر مع HTML, CSS, JavaScript وفهم المنطق البرمجي" },
  { num: "02", title: "React.js", desc: "بناء واجهات تفاعلية احترافية بأحدث التقنيات" },
  { num: "03", title: "Backend Development", desc: "Node.js و قواعد البيانات وبناء APIs" },
  { num: "04", title: "UI/UX Design", desc: "تصميم تجارب مستخدم استثنائية" },
  { num: "05", title: "تطبيقات الموبايل", desc: "React Native للأندرويد و iOS" },
  { num: "06", title: "النشر والاستضافة", desc: "نشر مشاريعك على الإنترنت باحترافية" },
];

const projects = [
  { img: project1, title: "Code Editor", desc: "محرر أكواد متكامل" },
  { img: project2, title: "SaaS Platform", desc: "منصة احترافية متكاملة" },
  { img: project3, title: "Mobile App", desc: "تطبيق موبايل بتصميم عصري" },
];

const testimonials = [
  { name: "أحمد محمد", role: "Frontend Developer", text: "أفضل كورس اشتركت فيه! المحتوى منظم والشرح ممتاز جداً." },
  { name: "سارة علي", role: "Full Stack Developer", text: "بعد الكورس قدرت أشتغل في شركة كبيرة. شكراً لكم!" },
  { name: "محمود حسن", role: "Freelancer", text: "المشاريع العملية كانت رهيبة وساعدتني أبني portfolio قوي." },
];

const stats = [
  { value: "+2500", label: "طالب" },
  { value: "+50", label: "ساعة محتوى" },
  { value: "+15", label: "مشروع عملي" },
  { value: "98%", label: "نسبة الرضا" },
];

function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-glow text-xs font-semibold tracking-wider uppercase mb-5">
        {tag}
      </span>
      <h2 className="text-4xl md:text-6xl font-black mb-4 text-foreground tracking-tight">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-24 px-4 scroll-mt-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export default function Index() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/15 blur-[120px]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/40 backdrop-blur-md border border-border text-sm font-medium text-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              عرض محدود — خصم 50% ينتهي قريباً
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
              <span className="text-foreground">احترف</span>{" "}
              <span className="text-gradient">البرمجة</span>
              <br />
              <span className="text-foreground">من الصفر</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              كورس شامل يأخذك من المبتدئ إلى المحترف عبر مشاريع حقيقية ومحتوى منظم خطوة بخطوة
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <SubscribeButton size="lg" />
              <a href="#content" className="px-8 py-4 rounded-full border border-border bg-card/30 backdrop-blur-md text-foreground hover:bg-card/60 transition-all font-semibold">
                استكشف المحتوى
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-black text-gradient mb-1">{s.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* COURSE CONTENT */}
      <Section id="content">
        <div className="max-w-6xl mx-auto">
          <SectionHeader tag="المنهج" title="محتوى الكورس" subtitle="كل ما تحتاجه لتصبح مبرمج محترف" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {courseTopics.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-7 hover:border-primary/40 transition-all shadow-soft"
              >
                <div className="text-sm font-mono text-primary-glow mb-4 tracking-wider">{t.num}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary-glow transition-colors">{t.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center"><SubscribeButton /></div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section className="bg-card/20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader tag="مشاريع حقيقية" title="مشاريع الطلاب" subtitle="نماذج من مشاريع بناها طلابنا بعد الكورس" />
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-border shadow-elegant bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 right-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center"><SubscribeButton /></div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <SectionHeader tag="آراء حقيقية" title="ماذا يقول طلابنا" />
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-7 shadow-soft"
              >
                <div className="text-accent text-lg mb-4 tracking-widest">★★★★★</div>
                <p className="text-foreground/85 mb-6 leading-relaxed text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-primary-foreground">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center"><SubscribeButton /></div>
        </div>
      </Section>

      {/* WHY KIAN */}
      <Section className="bg-card/20" id="why-kian">
        <div className="max-w-5xl mx-auto">
          <SectionHeader tag="من نحن" title="" subtitle="أكاديمية كيان — وجهتك الأولى لتعلم البرمجة باحترافية" />
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: "🎯", title: "منهج عملي 100%", desc: "تدريب عملى على مشاريع حقيقية خلال فترة الكورس بالإضافة إلى تدريب عملى لمدة شهرين فى شركات البرمجة" },
              { icon: "👨‍🏫", title: "مدربون محترفون ومينتورز متخصصون", desc: "فريق من المبرمجين أصحاب الخبرة في كبرى الشركات التقنية بالإضافة لمينتورز لمساعدتك خطوة بخطوة للوصول لأقصى إستفادة من الكورس." },
              { icon: "🤝", title: "متابعة شخصية", desc: "كل طالب عندنا له اهتمام خاص ومتابعة مستمرة حتى الإحتراف بالإضافة لمتابعة مستمرة بعد إنتهاء الكورس." },
              { icon: "🚀", title: "تأهيل لسوق العمل", desc: "نساعدك في بناء portfolio قوي والاستعداد لمقابلات الشركات." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-7 shadow-soft hover:border-primary/40 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-2xl p-8 mb-10">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              في <span className="text-gradient font-bold">أكاديمية كيان</span>، إحنا مش بنعلم برمجة بس — إحنا بنبني جيل جديد من المبرمجين القادرين على المنافسة محلياً وعالمياً.
              رسالتنا إن كل طالب يخرج من عندنا وعنده القدرة الحقيقية على تنفيذ مشاريع احترافية والدخول لسوق العمل بثقة.
            </p>
          </div>
          <div className="text-center"><SubscribeButton /></div>
        </div>
      </Section>

      <Section className="bg-card/20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-primary shadow-glow mb-8"
          >
            <svg className="w-12 h-12 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </motion.div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-glow text-xs font-semibold tracking-wider uppercase mb-5">
            ضماننا لك
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">ضمان استرداد 100%</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            لو الكورس مش عاجبك خلال أول 14 يوم، هنرجعلك فلوسك كاملة بدون أي أسئلة.
            احنا واثقين في جودة الكورس وفي قدرتك على الاحتراف.
          </p>
          <SubscribeButton />
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing">
        <div className="max-w-3xl mx-auto">
          <SectionHeader tag="عرض محدود" title="العرض ينتهي خلال" />
          <div className="mb-14">
            <CountdownTimer />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card backdrop-blur-md border border-primary/30 rounded-3xl p-10 md:p-14 shadow-elegant relative overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent font-bold text-xs tracking-wider uppercase mb-6">
                خصم 50%
              </span>
              <h3 className="text-2xl font-bold mb-8 text-foreground">الباقة الكاملة</h3>

              <div className="flex items-baseline justify-center gap-4 mb-2 flex-wrap">
                <span className="text-6xl md:text-7xl font-black text-foreground line-through decoration-red-500 decoration-4">2000</span>
                <span className="text-4xl md:text-5xl font-black text-red-500">999</span>
                <span className="text-xl font-bold text-red-500">جنيه</span>
              </div>
              <p className="text-muted-foreground mb-10 text-sm">دفعة واحدة — وصول مدى الحياة</p>

              <ul className="text-right max-w-sm mx-auto space-y-4 mb-10">
                {["وصول مدى الحياة لكل المحتوى", "تحديثات مستقبلية مجاناً", "شهادة إتمام معتمدة", "مجتمع خاص للطلاب", "دعم فني مباشر"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-foreground text-sm">
                    <span className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-xs flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <SubscribeButton size="lg" />
            </div>
          </motion.div>
        </div>
      </Section>

      <footer className="text-center py-10 text-muted-foreground border-t border-border text-sm">
        © {new Date().getFullYear()} جميع الحقوق محفوظة
      </footer>
    </main>
  );
}
