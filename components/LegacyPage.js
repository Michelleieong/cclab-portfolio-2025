import BodyClassName from "./BodyClassName";
import LegacyScriptLoader from "./LegacyScriptLoader";

export default function LegacyPage({ page }) {
  return (
    <>
      <BodyClassName className={page.bodyClass} />
      {page.inlineStyles ? (
        <style
          dangerouslySetInnerHTML={{
            __html: page.inlineStyles,
          }}
        />
      ) : null}
      <div
        className="min-h-screen"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: page.bodyHtml }}
      />
      {page.externalScripts.length > 0 || page.inlineScript ? (
        <LegacyScriptLoader
          externalScripts={page.externalScripts}
          inlineScript={page.inlineScript}
          scriptId={`legacy-${page.slug || "home"}`}
        />
      ) : null}
    </>
  );
}
