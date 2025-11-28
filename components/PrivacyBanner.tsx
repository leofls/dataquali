"use client";

import { useEffect, useState } from "react";


const STORAGE_KEY = "privacyAcceptedAt";
const EXPIRATION_DAYS = 7; // 7 dias

function getCookie(name: string) {
  try {
    const match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  } catch (e) {
    return null;
  }
}

function setCookie(name: string, value: string, days: number) {
  try {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + d.toUTCString();
    // path=/ to make available site-wide; SameSite=Lax to be safe. Do not set Secure here so it works in dev http.
    document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/; SameSite=Lax`;
  } catch (e) {
    // ignore
  }
}

function hasValidAcceptance() {
  try {
    const raw = getCookie(STORAGE_KEY);
    if (!raw) return false;
    const ts = Number(raw);
    if (Number.isNaN(ts)) return false;
    return Date.now() - ts < EXPIRATION_DAYS * 24 * 60 * 60 * 1000;
  } catch (e) {
    return false;
  }
}

export default function PrivacyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hasValidAcceptance()) setVisible(true);
  }, []);

  function accept() {
    try {
      setCookie(STORAGE_KEY, String(Date.now()), EXPIRATION_DAYS);
    } catch (e) {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-6 z-50 mx-auto max-w-4xl rounded-lg bg-white/95 shadow-lg ring-1 ring-slate-200 md:bottom-8">
      <div className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-slate-800">
          Nós usamos cookies e dados para melhorar sua experiência. Ao continuar,
          você concorda com nossa <a href="/politica-de-privacidade" className="underline text-sky-600">Política de
          Privacidade</a>.
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={accept}
            className="inline-flex items-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-sky-700"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
