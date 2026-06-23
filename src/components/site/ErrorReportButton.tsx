import { useEffect, useRef, useState } from "react";
import { Bug, Check, Copy, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type LogEntry = { level: string; time: string; message: string };
type NetEntry = { time: string; method: string; url: string; status?: number; error?: string };

const SUPPORT_EMAIL = "support@handycover.example";
const MAX_ENTRIES = 100;

const consoleBuffer: LogEntry[] = [];
const networkBuffer: NetEntry[] = [];
const errorBuffer: LogEntry[] = [];
let installed = false;

function push<T>(buf: T[], item: T) {
  buf.push(item);
  if (buf.length > MAX_ENTRIES) buf.shift();
}

function safeStringify(args: unknown[]): string {
  return args
    .map((a) => {
      if (a instanceof Error) return `${a.name}: ${a.message}\n${a.stack ?? ""}`;
      if (typeof a === "string") return a;
      try {
        return JSON.stringify(a);
      } catch {
        return String(a);
      }
    })
    .join(" ");
}

function installCapture() {
  if (installed || typeof window === "undefined") return;
  installed = true;

  (["log", "info", "warn", "error", "debug"] as const).forEach((level) => {
    const original = console[level].bind(console);
    console[level] = (...args: unknown[]) => {
      push(consoleBuffer, {
        level,
        time: new Date().toISOString(),
        message: safeStringify(args),
      });
      original(...args);
    };
  });

  window.addEventListener("error", (e) => {
    push(errorBuffer, {
      level: "error",
      time: new Date().toISOString(),
      message: `${e.message}\n  at ${e.filename}:${e.lineno}:${e.colno}\n${e.error?.stack ?? ""}`,
    });
  });

  window.addEventListener("unhandledrejection", (e) => {
    const reason = e.reason;
    push(errorBuffer, {
      level: "unhandledrejection",
      time: new Date().toISOString(),
      message:
        reason instanceof Error
          ? `${reason.name}: ${reason.message}\n${reason.stack ?? ""}`
          : safeStringify([reason]),
    });
  });

  const originalFetch = window.fetch.bind(window);
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
    const method = init?.method ?? (input instanceof Request ? input.method : "GET");
    const time = new Date().toISOString();
    try {
      const res = await originalFetch(input, init);
      push(networkBuffer, { time, method, url, status: res.status });
      return res;
    } catch (err) {
      push(networkBuffer, {
        time,
        method,
        url,
        error: err instanceof Error ? err.message : String(err),
      });
      throw err;
    }
  };
}

function buildReport(userNote: string): string {
  const lines: string[] = [];
  lines.push("=== ERROR REPORT ===");
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`URL: ${window.location.href}`);
  lines.push(`User-Agent: ${navigator.userAgent}`);
  lines.push(`Viewport: ${window.innerWidth}x${window.innerHeight}`);
  if (userNote.trim()) {
    lines.push("\n--- User note ---");
    lines.push(userNote.trim());
  }
  lines.push("\n--- Runtime errors ---");
  lines.push(errorBuffer.length ? errorBuffer.map((e) => `[${e.time}] ${e.level}: ${e.message}`).join("\n") : "(none)");
  lines.push("\n--- Console (last 100) ---");
  lines.push(
    consoleBuffer.length
      ? consoleBuffer.map((e) => `[${e.time}] ${e.level}: ${e.message}`).join("\n")
      : "(none)",
  );
  lines.push("\n--- Network (last 100) ---");
  lines.push(
    networkBuffer.length
      ? networkBuffer
          .map((e) => `[${e.time}] ${e.method} ${e.url} ${e.status ?? `ERROR: ${e.error}`}`)
          .join("\n")
      : "(none)",
  );
  return lines.join("\n");
}

export function ErrorReportButton() {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);
  const reportRef = useRef("");

  useEffect(() => {
    installCapture();
  }, []);

  const handleOpen = () => {
    reportRef.current = buildReport(note);
    setOpen(true);
    setCopied(false);
  };

  const handleCopy = async () => {
    reportRef.current = buildReport(note);
    try {
      await navigator.clipboard.writeText(reportRef.current);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = reportRef.current;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleEmail = () => {
    reportRef.current = buildReport(note);
    const subject = encodeURIComponent("Fehlerbericht / Error report");
    // mailto bodies are capped by clients (~2000 chars). Truncate safely.
    const body = encodeURIComponent(reportRef.current.slice(0, 1800) + "\n...(gekürzt, vollständig in der Zwischenablage)");
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        aria-label="Fehlerbericht erstellen"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background shadow-lg transition-transform hover:scale-105"
      >
        <Bug className="size-4" />
        Fehlerbericht
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-end justify-end bg-black/40 p-4 sm:items-center sm:justify-center">
          <div className="w-full max-w-2xl rounded-lg border border-border bg-background shadow-xl">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2">
                <Bug className="size-4" />
                <h2 className="text-sm font-semibold">Fehlerbericht an Support</h2>
              </div>
              <button
                type="button"
                aria-label="Schließen"
                onClick={() => setOpen(false)}
                className="rounded p-1 hover:bg-accent"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="space-y-3 p-4">
              <label className="block text-xs font-medium text-muted-foreground">
                Was ist passiert? (optional)
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Kurze Beschreibung des Problems…"
                rows={3}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <details className="rounded-md border border-border">
                <summary className="cursor-pointer px-3 py-2 text-xs font-medium text-muted-foreground">
                  Diagnose-Daten ansehen ({consoleBuffer.length} console · {networkBuffer.length} network · {errorBuffer.length} errors)
                </summary>
                <pre className="max-h-64 overflow-auto whitespace-pre-wrap break-all px-3 py-2 text-[11px] leading-snug text-muted-foreground">
                  {buildReport(note)}
                </pre>
              </details>
              <div className="flex flex-wrap gap-2">
                <Button onClick={handleCopy} variant="outline" size="sm">
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  {copied ? "Kopiert" : "Kopieren"}
                </Button>
                <Button onClick={handleEmail} size="sm">
                  <Mail className="size-4" />
                  An Support senden
                </Button>
              </div>
              <p className="text-[11px] text-muted-foreground">
                Tipp: „Kopieren" + „An Support senden" — der vollständige Bericht ist in der Zwischenablage, der Entwurf öffnet sich in deinem Mail-Programm.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
