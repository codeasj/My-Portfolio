"use client";

import { useEffect, useState } from "react";

function DateTime() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hour = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const isPM = time.getHours() >= 12;
  const dateText = time.toLocaleDateString(undefined, { month: "long", day: "numeric" });

  return (
    <div className="hidden items-center gap-2 text-slate-800 dark:text-slate-100 md:flex">
      <p className="text-4xl font-medium leading-none">{hour}</p>
      <div className="flex flex-col leading-tight">
        <p className="text-xs font-semibold uppercase">{isPM ? "pm" : "am"}</p>
        <p className="text-xs font-medium">{dateText}</p>
      </div>
    </div>
  );
}

export default DateTime;
