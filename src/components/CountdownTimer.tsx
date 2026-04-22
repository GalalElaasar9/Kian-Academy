import { useEffect, useState } from "react";

export function CountdownTimer() {
  const [time, setTime] = useState({ hours: 1, minutes: 0, seconds: 0 });

  useEffect(() => {
    const end = Date.now() + 60 * 60 * 1000;
    const t = setInterval(() => {
      const diff = Math.max(0, end - Date.now());
      setTime({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const Box = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-primary shadow-glow rounded-2xl w-20 h-20 md:w-28 md:h-28 flex items-center justify-center text-3xl md:text-5xl font-black text-primary-foreground tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-2 text-sm md:text-base text-muted-foreground">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center gap-4 md:gap-6">
      <Box value={time.hours} label="ساعة" />
      <Box value={time.minutes} label="دقيقة" />
      <Box value={time.seconds} label="ثانية" />
    </div>
  );
}
