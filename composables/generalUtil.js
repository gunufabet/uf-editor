import content from "~/assets/script/content.json";
import contentTH from "~/assets/script/th/content.json";
import contentSoccer from '~/assets/script/contentSoccer.json'
import contentSoccerTH from '~/assets/script/th/contentSoccer.json'

export function getContent() {
  const { locale } = useI18n();
  if (locale.value === "th") {
    return contentTH;
  }

  return content;
}

export function getContentSoccer() {
  const { locale } = useI18n();
  if (locale.value === "th") {
    return contentSoccerTH;
  }

  return contentSoccer;
}
