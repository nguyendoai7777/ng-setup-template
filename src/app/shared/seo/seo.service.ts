import { isPlatformServer } from '@angular/common';
import { DOCUMENT, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { EOGType, JsonLdData, OGType } from '@seo';
import { CastString } from '@typings';
import { AppConfigServerService } from '../configs/app-config.server.service';

// `@Service` available from v22.next.9
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject<Document>(DOCUMENT);
  private readonly plf = inject(PLATFORM_ID);
  private readonly env = inject(AppConfigServerService);

  /** ------------------- META/HEAD ------------------- */
  updateMeta(config: {
    title?: string;
    description?: string;
    url?: string; // canonical
    image?: string;
    keywords?: string;
    lang?: string; // hreflang
    ogType?: OGType;
    robots?: CastString<'index, follow' | 'index, nofollow' | 'noindex, follow' | 'none'>;
    siteName?: string;
  }) {
    if (!isPlatformServer(this.plf)) return;

    const head = this.doc.head;

    // --- CORE META ---
    const coreMeta = [
      { name: 'title', content: config.title },
      { name: 'description', content: config.description },
      { name: 'robots', content: config.robots ?? 'index, follow' }
    ];

    coreMeta.forEach(meta => {
      if (meta.content) {
        if (meta.name === 'title') this.title.setTitle(meta.content);
        else this.meta.updateTag({ name: meta.name, content: meta.content });
      }
    });

    // --- SOCIAL META ---
    const socialMeta = [
      { property: 'og:title', content: config.title },
      { property: 'og:description', content: config.description },
      { property: 'og:type', content: config.ogType ?? EOGType.website },
      { property: 'og:image', content: config.image },
      { property: 'og:url', content: config.url },
      { property: 'og:site_name', content: config.siteName ?? this.env.env.AppName },
      { name: 'twitter:title', content: config.title },
      { name: 'twitter:description', content: config.description },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: config.image }
    ];

    socialMeta.forEach(tag => {
      if (tag.content) this.meta.updateTag(tag as MetaDefinition);
    });

    // --- KEYWORDS ---
    if (config.keywords) this.meta.updateTag({ name: 'keywords', content: config.keywords });

    // --- CANONICAL ---
    if (config.url) {
      const linkCanonical = this.doc.querySelector("link[rel='canonical']") || this.doc.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', config.url);

      const metaDesc = this.doc.querySelector("meta[name='description']");
      if (metaDesc) head.insertBefore(linkCanonical, metaDesc.nextSibling);
      else head.appendChild(linkCanonical);
    }

    // --- HREFLANG ---
    if (config.lang && config.url) {
      const linkHreflang = this.doc.querySelector(`link[rel='alternate'][hreflang='${config.lang}']`) || this.doc.createElement('link');
      linkHreflang.setAttribute('rel', 'alternate');
      linkHreflang.setAttribute('hreflang', config.lang);
      linkHreflang.setAttribute('href', config.url);
      head.appendChild(linkHreflang);

      // <html lang>
      this.doc.documentElement.lang = config.lang;
    }
  }

  /** ------------------- JSON-LD ------------------- */
  setDataStructured(data: JsonLdData) {
    if (!isPlatformServer(this.plf)) return;

    const { type, ...rest } = data;
    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-type', type);
    script.text = JSON.stringify({ '@context': 'https://schema.org', '@type': type, ...rest });

    // Remove old JSON-LD of same type
    const oldScript = this.doc.querySelector(`script[type='application/ld+json'][data-type='${type}']`);
    if (oldScript) oldScript.remove();

    this.doc.head.appendChild(script);
  }
}
