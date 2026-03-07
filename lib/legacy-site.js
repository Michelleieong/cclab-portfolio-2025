import fs from "node:fs/promises";
import path from "node:path";
import { cache } from "react";

const ROOT_DIR = process.cwd();

export const LEGACY_ROUTES = {
  "": { source: "index.html" },
  about: { source: "about.html" },
  main: { source: "main.html" },
  extra: { source: "extra.html" },
  "cclab-works": { source: "cclab-works.html" },
  "advanced-cclab": { source: "advanced-cclab.html" },
  project1: { source: "LostandFound.html" },
  project2: { source: "FaceGenerator.html" },
  project3: { source: "Project3.html" },
  project4: { source: "project4.html" },
  project5: { source: "project5.html" },
  project6: { source: "Project6.html" },
  project7: { source: "Project7.html" },
  zine: { source: "zine.html" },
  zine1: { source: "zine1.html", skipInlineScript: true },
  zine2: { source: "zine2.html" },
  shortfilm: { source: "shortfilm.html" },
  "hs-arduino1": { source: "hs-arduino1.html" },
  "hs-arduino2": { source: "hs-arduino2.html" },
  arduino1: { source: "arduino1.html" },
  arduino2: { source: "arduino2.html" },
  "orange-peel": { source: "orange-peel.html" },
  drawings: { source: "drawings.html" },
  work1: { source: "work1.html" },
  work2: { source: "work2.html" },
  work3: { source: "work3.html" },
};

const HTML_ROUTE_LOOKUP = Object.fromEntries(
  Object.entries(LEGACY_ROUTES).map(([slug, config]) => [
    config.source.toLowerCase(),
    slug ? `/${slug}/` : "/",
  ]),
);

const STATIC_FILE_PATTERN = /\.(png|jpe?g|gif|webp|svg|mp3|wav|pdf|ttf|otf)$/i;

function normalizeRoutePath(target) {
  const cleaned = target.replace(/^\.\//, "");
  const mapped = HTML_ROUTE_LOOKUP[cleaned.toLowerCase()];
  return mapped ?? target;
}

function normalizeAssetPath(target) {
  if (
    !target ||
    target.startsWith("http://") ||
    target.startsWith("https://") ||
    target.startsWith("mailto:") ||
    target.startsWith("#") ||
    target.startsWith("/")
  ) {
    return target;
  }

  const cleaned = target.replace(/^\.\//, "");
  if (!STATIC_FILE_PATTERN.test(cleaned)) {
    return target;
  }

  return `/${cleaned}`;
}

function rewriteLegacyReferences(content) {
  return content
    .replace(/href=(["'])([^"']+)\1/gi, (match, quote, target) => {
      if (target.toLowerCase().endsWith(".html")) {
        return `href=${quote}${normalizeRoutePath(target)}${quote}`;
      }

      return `href=${quote}${normalizeAssetPath(target)}${quote}`;
    })
    .replace(/src=(["'])([^"']+)\1/gi, (match, quote, target) => {
      return `src=${quote}${normalizeAssetPath(target)}${quote}`;
    })
    .replace(/url\((["']?)([^"')]+)\1\)/gi, (match, quote, target) => {
      return `url(${quote}${normalizeAssetPath(target)}${quote})`;
    });
}

function extractMatches(html, expression) {
  return [...html.matchAll(expression)].map((match) => match[1]?.trim()).filter(Boolean);
}

function extractBodyClass(html) {
  const match = html.match(/<body[^>]*class=(["'])([^"']+)\1/i);
  return match?.[2] ?? "";
}

function rewriteLegacyScriptContent(content) {
  return content.replace(
    /(["'])([^"']+\.(png|jpe?g|gif|webp|mp3|wav|ttf|otf))\1/gi,
    (match, quote, target) => {
      if (target.startsWith("http://") || target.startsWith("https://") || target.startsWith("/")) {
        return match;
      }

      return `${quote}${normalizeAssetPath(target)}${quote}`;
    },
  );
}

export const getLegacyPage = cache(async (slug = "") => {
  const routeConfig = LEGACY_ROUTES[slug];
  if (!routeConfig) {
    return null;
  }

  const filePath = path.join(ROOT_DIR, routeConfig.source);
  const html = await fs.readFile(filePath, "utf8");
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "woolyspace";
  const bodyHtmlMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const inlineStyles = extractMatches(html, /<style[^>]*>([\s\S]*?)<\/style>/gi).join("\n\n");
  const rawExternalScripts = [...html.matchAll(/<script[^>]+src=(["'])([^"']+)\1[^>]*><\/script>/gi)]
    .map((match) => match[2]?.trim())
    .filter(Boolean);
  const inlineScripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => match[1]?.trim())
    .filter(Boolean);
  const localScriptContents = [];
  const externalScripts = [];

  for (const source of rawExternalScripts) {
    if (source.startsWith("http://") || source.startsWith("https://")) {
      externalScripts.push(source);
      continue;
    }

    const scriptPath = path.join(ROOT_DIR, source.replace(/^\.\//, ""));
    const scriptContent = await fs.readFile(scriptPath, "utf8");
    localScriptContents.push(rewriteLegacyScriptContent(scriptContent));
  }

  let bodyHtml = bodyHtmlMatch?.[1] ?? "";
  bodyHtml = bodyHtml.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");

  return {
    slug,
    title,
    bodyClass: extractBodyClass(html),
    bodyHtml: rewriteLegacyReferences(bodyHtml),
    inlineStyles: rewriteLegacyReferences(inlineStyles),
    externalScripts,
    inlineScript: routeConfig.skipInlineScript
      ? localScriptContents.join("\n\n")
      : [...inlineScripts, ...localScriptContents].join("\n\n"),
  };
});

export function getLegacySlugs() {
  return Object.keys(LEGACY_ROUTES).filter(Boolean);
}
